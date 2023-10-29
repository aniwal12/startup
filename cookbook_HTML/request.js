document.getElementById('requestForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const requesteduser = document.getElementById('requestName').value;
    const requestedRecipe = document.getElementById('recipeName').value;

    console.log('Recipe request sent to ${requesteduser} for the recipe: ${requestedRecipe}');

    localstorage.setItem(requesteduser.value, requestedRecipe.value);

    document.getElementById('requestName').value = '';
    document.getElementById('recipeName').value = '';
});