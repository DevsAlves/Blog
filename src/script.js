const form = document.getElementById("search-blog");
const search = document.getElementById("search-bar");

form.addEventListener("click", () => {
    search.classList.add("form");

    setTimeout( () => {
        search.classList.replace("form" , "searc-bar");
    }, 1500);
});

// Parte de Busca da main 


