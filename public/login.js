function login() {
    const nameEl = document.querySelector("#name");
    localStorage.setItem("username", nameEl.value);
    window.location.href = "recipes.html";
}

function displayRecipe(data) {
    fetch('https://www.themealdb.com/api/json/v1/1/random.php')
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        const containerEl = document.querySelector('#recipe');
  
        const recipeEl = document.createElement('p');
        recipeEl.classList.add('recipe');
        const instructionsEl = document.createElement('p');
        instructionsEl.classList.add('instructions');
  
        recipeEl.textContent = data.meals[0].strMeal;
        instructionsEl.textContent = data.meals[0].strInstructions;
  
        containerEl.appendChild(recipeEl);
        containerEl.appendChild(instructionsEl);
      });
  }

  displayRecipe();