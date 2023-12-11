const cookieParser = require('cookie-parser');
const bcrypt = require('bcrypt');
const express = require('express');
const db = require('./database.js');
const app = express();

const authCookieName = 'token';

const port = process.argv.length > 2 ? process.argv[2] : 4000;
app.use(express.json());

app.use(cookieParser());

app.use(express.static('public'));

app.set('trust proxy', true);

app.post('/api/auth/create', async (req, res) => {
    if (await db.getUser(req.body.username)) {
        res.status(409).send({ msg: 'Existing user' });
    } else {
        const user = await db.createUser(req.body.username, req.body.password);

        setAuthCookie(res, user.token);

        res.send({
            id: user._id,
        });
    }
});

app.post('/api/auth/login', async (req, res) => {
    const user = await db.getUser(req.body.username);
    if (user) {
        if (await bcrypt.compare(req.body.password, user.password)) {
            setAuthCookie(res, user.token);
            res.send({ id: user._id });
            return;
        }
    }
    res.status(401).send({ msg: 'Unathorized'});
});

app.delete('/api/auth/logout', (_req, res) => {
    res.clearCookie(authCookieName);
    res.status(204).end();
});


var secureApiRouter = express.Router();
app.use(secureApiRouter);

secureApiRouter.use(async (req, res, next) => {
    authToken = req.cookies[authCookieName];
    const user = await db.getUserByToken(authToken);
    if (user) {
        req.user = user
        next();
    } else {
        res.status(401).send({ msg: 'Unauthorized' });
    }
});

secureApiRouter.get('/api/recipes', async (req, res, next) => {
    let username = req.user.username;
    let recipes = await db.loadRecipes(username);
    res.send(recipes);
});

secureApiRouter.get('/api/requests', async (req, res, next) => {
    let username = req.user.username;
    console.log(req.user);
    let requests = await db.loadRequests(username);
    res.send(requests);
});

secureApiRouter.post('/api/recipes', async (req, res) => {
    let recipes = await db.addRecipe(req.body);
    res.send(recipes);
});

secureApiRouter.post('/api/requests', async (req, res) => {
    let requests = await db.addRequest(req.body);
    res.send(requests);
})

app.use(function (err, req, res, next) {
    res.status(500).send({ type: err.name, message: err.message });
});

app.use((_req, res) => {
    res.sendFile('index.html', { root: 'public' });
});

function setAuthCookie(res, authToken) {
    res.cookie(authCookieName, authToken, {
        secure: true,
        httpOnly: true,
        sameSite: 'strict',
    });
}

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});