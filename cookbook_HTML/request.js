document.getElementById('requestForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const requesteduser = document.getElementById('requestName').value;
    const requestedRecipe = document.getElementById('recipeName').value;

    console.log(`Recipe request sent to ${requesteduser} for the recipe: ${requestedRecipe}`);

    const requestsText = localStorage.getItem('requests');

   let requests = [];
    
   if (requestsText){
    requests = JSON.parse(requestsText);
   }

    requests.push({
        username: requesteduser,
        recipeName: requestedRecipe,
    })

    localStorage.setItem('requests', requests);

    document.getElementById('requestName').value = '';
    document.getElementById('recipeName').value = '';
});