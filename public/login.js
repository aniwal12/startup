async function loginUser() {
  loginOrCreate(`/api/auth/login`);
}

async function createUser() {
  loginOrCreate(`/api/auth/create`);
}

async function loginOrCreate(endpoint) {
  const username = document.querySelector('#userName')?.value;
  const password = document.querySelector('#userPassword')?.value;
  const response = await fetch(endpoint, {
    method: 'post',
    body: JSON.stringify({username: username, password: password }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });

  if (response.ok) {
    localStorage.setItem('username', username);
    window.location.href = 'recipes.html';
  } else {
    const body = await response.json();
    const modalEl = document.querySelector('#msgModal');
    modalEl.querySelector('.modal-body').textContent = `Error: ${body.msg}`;
    const msgModal = new bootstrap.Modal(modalEl, {});
    msgModal.show();
  }
}

function logout() {
  localStorage.removeItem('username');
  fetch(`/api/auth/logout`, {
    method: 'delete',
  }).then(() => (window.location.href = '/'));
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