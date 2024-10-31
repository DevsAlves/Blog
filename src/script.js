const form = document.getElementById("search-blog");
const posts = document.querySelectorAll(".post");


// Event listener para o campo de busca
form.addEventListener("input", (e) => {
    const searchText = e.target.value.toLowerCase(); /*Capturar o que o usuário vai digitar */
    filterPosts(searchText);
});


const filterPosts = (searchText) => {
    posts.forEach(post => {
        const title = post.getAttribute("data-title").toLowerCase();
        const description = post.getAttribute("data-description").toLowerCase();
        
        // Verifica se o título ou a descrição contém o texto de busca
        if (title.includes(searchText) || description.includes(searchText)) {
            post.style.display = ""; // Mostra o post
        } else {
            post.style.display = "none"; // Esconde o post
        }
    });
};


// Fazendo um teste