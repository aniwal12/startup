// document.getElementById('requestForm').addEventListener('submit', function(event) {
//     event.preventDefault();
document.addEventListener("DOMContentLoaded", function () {
    let username = localStorage.getItem("username");
    if (!username) {
        document.getElementById("request").style.display="none"
        document.getElementById("logout").style.display="none"
    }
    configureWebSocket();
});
const userWelcomeElement = document.getElementById('userWelcome');
if (userWelcomeElement) {
    
    const currentUser = localStorage.getItem('username');

    if (currentUser) {
        userWelcomeElement.textContent = `User: ${currentUser}`;
    } else {
        userWelcomeElement.textContent = 'Login to request a recipe'
    }
}

function configureWebSocket() {
    const protocol = window.location.protocol === 'http:' ? 'ws' : 'wss';
    this.socket = new WebSocket(`${protocol}://${window.location.host}/ws`);
    this.socket.onopen = function (){
        console.log('connected');
    }
}

function broadcastEvent(from, type, value) {
    const event = {
        from: from,
        type: type,
        value: value,
    };
    this.socket.send(JSON.stringify(event));
}


async function submitRequest() {

    const currentUser = localStorage.getItem('username');
    const requesteduser = document.getElementById('requestName').value;
    const requestedRecipe = document.getElementById('recipeName').value;
    const newRequest = {username: requesteduser, requestingUser: currentUser, recipeName: requestedRecipe};

    console.log(`Recipe request sent to ${requesteduser} for the recipe: ${requestedRecipe}`);

    broadcastEvent(currentUser, "request", newRequest);

        //submitRequestLocal(newRequest);
}


function submitRequestLocal(newRequest) {
    const requestsText = localStorage.getItem('requests');

   let requests = [];
    
   if (requestsText){
    requests = JSON.parse(requestsText);
   }

    requests.push(newRequest);

    localStorage.setItem('requests', JSON.stringify(requests));

    document.getElementById('requestName').value = '';
    document.getElementById('recipeName').value = '';

    return false;

};