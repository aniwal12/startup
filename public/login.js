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
  
        const recipeEl = document.createElement('h3');
        recipeEl.classList.add('recipe');
        
        const videoEl = document.getElementById('video');
  
        recipeEl.textContent = data.meals[0].strMeal;

        videoEl.href = data.meals[0].strYoutube;
  
        containerEl.appendChild(recipeEl);
      });
  }

  displayRecipe();