document.addEventListener("DOMContentLoaded", function () {
    function loadRecipes() {

        const currentUser = localStorage.getItem('username');

        let recipes = [];
        
        const recipesText = localStorage.getItem('recipes');

        if (recipesText) {
            recipes = JSON.parse(recipesText);
        }

        recipes = recipes.filter(nextElement => nextElement.username === currentUser)

        const recipesAccordion = document.getElementById('Recipes');

        if (recipes.length) {
            for (const [i, recipe] of recipes.entries()) {
                const accordionItem = document.createElement('div');
                accordionItem.className = 'accordion-item';

                const accordionHeader = document.createElement('h2');
                accordionHeader.className = 'accordion-header';
                accordionHeader.id = `recipe${i + 1}`;

                const accordionButton = document.createElement('button');
                accordionButton.className = 'accordion-button collapsed';
                accordionButton.setAttribute('type', 'button');
                accordionButton.setAttribute('data-bs-toggle', 'collapse');
                accordionButton.setAttribute('data-bs-target', `#collapse${i + 1}`);
                accordionButton.setAttribute('aria-expanded', 'false');
                accordionButton.setAttribute('aria-controls', `collapse${i + 1}`);
                accordionButton.textContent = recipe.name;

                accordionHeader.appendChild(accordionButton);

                const accordionBody = document.createElement('div');
                accordionBody.className = 'accordion-collapse collapse' ;
                accordionBody.id = `collapse${i+1}`;
                accordionBody.setAttribute('aria-labelledby', `recipe${i + 1}`);
                accordionBody.setAttribute('data-bs-parent', '#Recipes');

                const bodyContent = document.createElement('div');
                bodyContent.className = 'accordion-body';
                bodyContent.innerHTML = `
                <p>${recipe.instructions}</p>
                `;

                accordionBody.appendChild(bodyContent);

                accordionItem.appendChild(accordionHeader);
                accordionItem.appendChild(accordionBody);

                recipesAccordion.appendChild(accordionItem);
            }
        } else {
            recipesAccordion.innerHTML = '<p class="centered">No recipes available</p>'
        }
    }

    loadRecipes();
});