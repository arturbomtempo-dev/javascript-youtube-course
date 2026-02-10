document.getElementById('btnFetch').addEventListener('click', () => {
    const userId = document.getElementById('userId').value.trim();
    const resultDiv = document.getElementById('result');

    if (!userId || userId < 1 || userId > 10) {
        resultDiv.innerText = "Digite um ID válido entre 1 e 10.";
        return;
    }

    fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
        .then(response => response.json())
        .then(posts => {
            if (posts.length === 0) {
                resultDiv.innerText = "Nenhum post encontrado para esse usuário.";
            } else {
                resultDiv.innerHTML = "<h3>Posts:</h3>" + posts.map(post => `
                    <div>
                        <strong>${post.title}</strong>
                        <p>${post.body}</p>
                    </div>
                `).join('');
            }
        })
        .catch(error => {
            resultDiv.innerText = "Erro: " + error.message;
        });
});