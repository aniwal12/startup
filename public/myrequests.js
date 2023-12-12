
//document.addEventListener("DOMContentLoaded", function () {
document.addEventListener("DOMContentLoaded", function () {
    let username = localStorage.getItem("username");
    if (!username) {
        document.getElementById("requests").style.display="none"
    }
    console.log("help");
    configureWebSocketrequest();
});

let requestSocket

function configureWebSocketrequest() {
    console.log("configure");
    const protocol = window.location.protocol === 'http:' ? 'ws' : 'wss';
    requestSocket = new WebSocket(`${protocol}://${window.location.host}/ws`);
    requestSocket.onopen = function (){
        console.log('connected');
        const currentUser = localStorage.getItem('username');
        broadcastRequest(currentUser, "connected" );
    }
    requestSocket.onclose = () => console.log("request socket closed")
    requestSocket.onmessage = async (event) => {
        console.log("message received")
        const msg = JSON.parse(event.data);
        console.log(msg);
        if (msg.type === "requestsUpdate") {
            localStorage.setItem('requests', JSON.stringify(msg.value));
            const currentUser = localStorage.getItem('username');
            buildTable(currentUser);
        }
    }
}

function broadcastRequest(from, type, value) {
    const event = {
        from: from,
        type: type,
        value: value,
    };
    requestSocket.send(JSON.stringify(event));
}
    

const userWelcomeElement = document.getElementById('userWelcome');
        if (userWelcomeElement) {
            
            const currentUser = localStorage.getItem('username');

            if (currentUser) {
                userWelcomeElement.textContent = `User: ${currentUser}`;
            } else {
                userWelcomeElement.textContent = 'Login to send a recipe.'
            }
        }

function buildTable(currentUser){

    const recipeRequests = JSON.parse(localStorage.getItem('requests'));
    const currentUserRecipeRequests = recipeRequests.filter(nextElement => nextElement.username === currentUser);
    
    const requestsTable = document.querySelector('#requestsTable');

        if (currentUserRecipeRequests.length && currentUser) {
            
            const tableHeader = `
            <thead>
                <tr>
                    <th>Username</th>
                    <th>Recipe Name</th>
                </tr>
            </thead>
            `;
            requestsTable.innerHTML = tableHeader;

            for (const request of recipeRequests) {
                const row = document.createElement('tr');
                const usernameColumn = document.createElement('td');
                const recipeNameColumn = document.createElement('td');

                usernameColumn.textContent = request.requestingUser;
                recipeNameColumn.textContent = request.recipeName;

                row.appendChild(usernameColumn);
                row.appendChild(recipeNameColumn);

                requestsTable.appendChild(row);
            }
        } else {

                requestsTable.innerHTML = '<p class="centered">No recipe requests</p>';
            }
        }

async function loadRecipeRequests() {

    const currentUser = localStorage.getItem('username');

        let recipeRequests = [];
        try {
            const response = await fetch(`/api/requests?username=${currentUser}`);
            recipeRequests = await response.json();

            localStorage.setItem('requests', JSON.stringify(recipeRequests));
        } catch {
            const requestsText = localStorage.getItem('requests');
            
            if (requestsText) {
                recipeRequests = JSON.parse(requestsText);
            }
        }
        buildTable(currentUser);
    }

        loadRecipeRequests();
//});