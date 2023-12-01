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

async function submitRequest() {

    const currentUser = localStorage.getItem('username');

    const requesteduser = document.getElementById('requestName').value;
    const requestedRecipe = document.getElementById('recipeName').value;
    const newRequest = {username: requesteduser, recipeName: requestedRecipe};

    console.log(`Recipe request sent to ${requesteduser} for the recipe: ${requestedRecipe}`);

    try {
        const response = await fetch ('/api/requests', {
            method: 'POST',
            headers: {'content-type': 'application/json'},
            body: JSON.stringify(newRequest),
        });

        const requests = await response.json();
        localStorage.setItem('requests', JSON.stringify(scores));
    } catch {

        submitRequestLocal(newRequest);
    }
}


function sumbitRequestLocal(newRequest) {
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