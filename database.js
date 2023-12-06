const { MongoClient } = require('mongodb');
const bcrypt = require('bcrypt');
const uuid = require('uuid');
const config = require('./dbConfig.json');

const url = `mongodb+srv://${config.userName}:${config.password}@${config.hostname}`;
const client = new MongoClient(url);
const db = client.db('startup');
const userCollection = db.collection('user');
const recipeCollection = db.collection('recipe');
const requestCollection = db.collection('request');

function getUser(email) {
    return userCollection.findOne({email: email});
}

function getUserByToken(token) {
    return userCollection.findOne({token: token});
}

async function createUser(email, password) {
    const passwordHash = await bcrypt.hash(password, 10);

    const user = {
        email: email,
        password: passwordHash,
        token: uuid.v4(),
    };
    await userCollection.insertOne(user);

    return user;
}

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

module.exports = { getUser, getUserByToken, createUser, loadRecipes, loadRequests, addRecipe, addRequest };
