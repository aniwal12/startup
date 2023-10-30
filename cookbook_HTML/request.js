// document.getElementById('requestForm').addEventListener('submit', function(event) {
//     event.preventDefault();
const userWelcomeElement = document.getElementById('userWelcome');
if (userWelcomeElement) {
    
    const currentUser = localStorage.getItem('username');

    if (currentUser) {
        userWelcomeElement.textContent = `User: ${currentUser}`;
    } else {
        userWelcomeElement.textContent = 'Login to request a recipe'
    }
}

function submitRequest() {

    const currentUser = localStorage.getItem('username');

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

    localStorage.setItem('requests', JSON.stringify(requests));

    document.getElementById('requestName').value = '';
    document.getElementById('recipeName').value = '';

    return false;

};