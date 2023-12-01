const express = require('express');
const app = express();

app.use(express.json());

app.use(express.static('public'));

app.get('/api/recipes', (req, res, next) => {
    res.send(recipes);
});

app.get('/api/requets', (req, res, next) => {
    res.send(requests);
});

app.post('/api/recipes', (req, res) => {
    recipes = updateRecipes(req.body, recipes);
    res.send(recipes);
});

app.post('/api/requests', (req, res) => {
    requests = addRequest(req.body, requests);
    res.send(requests);
})

app.listen(4000);

let recipes = [];
function updateRecipes(newRecipe, recipes) {
    recipes.push(newRecipe);

    removeRequests(newRecipe, requests)

    return recipes;
}

let requests = [];
function addRequest(newRequest, requests) {
    requests.push(newRequest);

    return requests;
}

function removeRequests(newRecipe, requests) {
    requests = requests.filter(request => request.recipeName != newRecipe.recipename)

    return requests;
}