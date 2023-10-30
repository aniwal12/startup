// document.getElementById('sendform').addEventListener('submit', function(event) {
//     event.preventDefault();

function sendRecipe() {

    const receivingUser = document.getElementById('sendName');
    const sentRecipeName = document.getElementById('recipeName');
    const sentInstructions = document.getElementById('recipeContent');

    console.log(`Recipe for ${sentRecipeName} sent to ${receivingUser}`);

    const RecipesText = localStorage.getItem('recipes');

    let Recipes = [];
   
    if (RecipesText) {

        Recipes = JSON.parse(RecipesText);
    }

    Recipes.push({
        username: receivingUser,
        recipename: sentRecipeName,
        instructions: sentInstructions,
    })

    localStorage.setItem('recipes', Recipes);

    const requestsText = localstorage.getItem('requests');

    if (!requestsText) {
        return;
    }

    let requests = JSON.parse(requestsText);

    requests = requests.filter(nextElement => nextElement.recipename !== sentRecipeName);

    localStorage.setItem('requests', JSON.stringify(requests));

    document.getElementById('sendName').value = '';
    document.getElementById('recipeName').value = '';
    document.getElementById('recipeContent').value = '';

    return false;
};
//});