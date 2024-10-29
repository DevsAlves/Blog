const form = document.getElementById("search-blog");
const search = document.getElementById("search-bar");

form.addEventListener("mouseover", () => {
    search.classList.add("form");

    // setTimeout( () => {
    //     search.classList.replace("form" , "searc-bar");
    // }, 1500);
});

form.addEventListener("mouseout", () => {
    search.classList.replace("form" , "searc-bar");
}); 



// Parte de Busca da main 
const query = document.getElementById("posts-container");


