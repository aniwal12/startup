const { MongoClient } = require('mongodb');
const config = require('./dbConfig.json');
const url = `mongodb+srv://${config.userName}:${config.password}@${config.hostname}`;
const client = new MongoClient(url);
const db = client.db('startup');
const recipeCollection = db.collection('recipe');
const requestCollection = db.collection('request');

async function loadRecipes(currentUser) {
    const query = { username : currentUser}

    const cursor = recipeCollection.find(query);
    return cursor.toArray();
}

async function loadRequests(currentUser) {
    const query = { username : currentUser}
    console.log(query);
    const cursor = requestCollection.find(query);
    return cursor.toArray();
}

async function addRecipe(recipe) {
    const result = await recipeCollection.insertOne(recipe);
    requestCollection.deleteMany({recipename: recipe.recipeName,
    requestingUser: recipe.username})
    return result;
}

async function addRequest(request) {
    const result = await requestCollection.insertOne(request);
    return result;
}

module.exports = { loadRecipes, loadRequests, addRecipe, addRequest };
