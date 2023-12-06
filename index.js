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

app.post('api/auth/login', async )

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