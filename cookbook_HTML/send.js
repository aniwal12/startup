// document.getElementById('sendform').addEventListener('submit', function(event) {
//     event.preventDefault();

function sendRecipe() {

    const receivingUser = document.getElementById('sendName').value;
    const sentRecipeName = document.getElementById('recipeName').value;
    const sentInstructions = document.getElementById('recipeContent').value;

    console.log(`Recipe for ${sentRecipeName} sent to ${receivingUser}`);

    let Recipes = [];

    const RecipesText = localStorage.getItem('recipes');
   
    if (RecipesText) {

        Recipes = JSON.parse(RecipesText);
    }

    Recipes.push({
        username: receivingUser,
        recipename: sentRecipeName,
        instructions: sentInstructions,
    })

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