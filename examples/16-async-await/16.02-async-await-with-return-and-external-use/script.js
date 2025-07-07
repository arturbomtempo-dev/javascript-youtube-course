async function getPost(postId) {
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);
        if (!response.ok) {
            throw new Error("Post não encontrado");
        }
        
        const post = await response.json();
        return post;
    } catch (error) {
        console.error("Erro ao buscar post:", error.message);
        return null;
    }
}

(async () => {
    const post = await getPost(1);

    if (post) {
        console.log("Título do post:", post.title);
    }
})();