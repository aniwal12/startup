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

app.post('/api/auth/creat', async (req, res) => {
    if (await db.getUser(req.body.email)) {
        req.status(409).send({ msg: 'Existing user' });
    } else {
        const user = await db.createUser(req.body.email, req.body.password);

        setAuthCookie(res, user.token);

        res.send({
            id: user._id,
        });
    }
});

app.post('api/auth/login', async (req, res) => {
    const user = await db.getUser(req.body.email);
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

app.get('api/user/:email', async (req, res) => {
    const user = await db.getUser(req.params.email);
    if (user) {
        const token = req?.cookies.token;
        res.send({ email: user.email, authenticated: token === user.token });
        return;
    }
    res.status(404).send({ msg: 'Unknown' });
});

app.get('/api/recipes', async (req, res, next) => {
    let username = req.query.username;
    let recipes = await db.loadRecipes(username);
    res.send(recipes);
});

app.get('/api/requests', async (req, res, next) => {
    let username = req.query.username;
    console.log(req.query);
    let requests = await db.loadRequests(username);
    res.send(requests);
});

app.post('/api/recipes', async (req, res) => {
    let recipes = await db.addRecipe(req.body);
    res.send(recipes);
});

app.post('/api/requests', async (req, res) => {
    let requests = await db.addRequest(req.body);
    res.send(requests);
})

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});