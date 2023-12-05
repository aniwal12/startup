//document.addEventListener("DOMContentLoaded", function () {

const userWelcomeElement = document.getElementById('userWelcome');
        if (userWelcomeElement) {
            
            const currentUser = localStorage.getItem('username');

            if (currentUser) {
                userWelcomeElement.textContent = `User: ${currentUser}`;
            } else {
                userWelcomeElement.textContent = 'Login to send a recipe.'
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

        recipeRequests = recipeRequests.filter(nextElement => nextElement.username === currentUser);

        const requestsTable = document.querySelector('#requestsTable');

        if (recipeRequests.length && currentUser) {
            
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

        loadRecipeRequests();
//});