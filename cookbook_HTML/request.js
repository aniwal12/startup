function makeRequest() {
    const requestName = document.querySelector("#requestName");
    localStorage.setItem("user1", requestName);
    
    const recipeName = document.querySelector("#recipeName");
    localStorage.setItem("recipe1", recipeName);
}