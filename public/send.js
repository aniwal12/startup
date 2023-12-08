// document.getElementById('sendform').addEventListener('submit', function(event) {
//     event.preventDefault();
document.addEventListener("DOMContentLoaded", function () {
    let username = localStorage.getItem("username");
    if (!username) {
        document.getElementById("send").style.display="none"
        document.getElementById("logout").style.display="none"
    }
});

async function sendRecipe() {

    const receivingUser = document.getElementById('sendName').value;
    const sentRecipeName = document.getElementById('recipeName').value;
    const sentInstructions = document.getElementById('recipeContent').value;
    const newRecipe = {username: receivingUser, recipename: sentRecipeName, instructions: sentInstructions};

    console.log(`Recipe for ${sentRecipeName} sent to ${receivingUser}`);

    try {
        const response = await fetch ('/api/recipes', {
            method: 'POST',
            headers: {'content-type': 'application/json'},
            body: JSON.stringify(newRecipe)
        });

        const recipes = await response.json();
        localStorage.setItem('recipes', JSON.stringify(recipes));
    } catch {

        sendRecipeLocal(newRecipe);
    }

    document.getElementById('sendForm').reset();

    }

function sendRecipeLocal(newRecipe) {

    let Recipes = [];

    const RecipesText = localStorage.getItem('recipes');
   
    if (RecipesText) {

        Recipes = JSON.parse(RecipesText); 
    }

    Recipes.push(newRecipe);

    localStorage.setItem('recipes', JSON.stringify(Recipes));

    const requestsText = localStorage.getItem('requests');

    if (!requestsText) {
        return;
    }

    let requests = JSON.parse(requestsText);

    requests = requests.filter(nextElement => nextElement.recipeName !== sentRecipeName);

    localStorage.setItem('requests', JSON.stringify(requests));

    document.getElementById('sendName').value = '';
    document.getElementById('recipeName').value = '';
    document.getElementById('recipeContent').value = '';

    return false;
};
//});