document.addEventListener("DOMContentLoaded", function () {
    function loadRecipeRequests() {

        const currentUser = localStorage.getItem('userName');
        // if (!currentUser) {
        //     return
        // }

        let recipeRequests = [];
        const requestsText = localStorage.getItem('requests');

        if (requestsText) {
            recipeRequests = JSON.parse(requestsText);
        }

        recipeRequests = recipeRequests.filter(nextElement => nextElement.username === currentUser);

        const requestsTable = document.querySelector('#requestsTable');

        if (recipeRequests.length) {
            
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

                usernameColumn.textContent = request.username;
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
});