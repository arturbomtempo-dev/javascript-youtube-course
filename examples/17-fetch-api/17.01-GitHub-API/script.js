document.getElementById('btnFetch').addEventListener('click', () => {
    const username = document.getElementById('username').value.trim();
    const resultDiv = document.getElementById('result');

    if (!username) {
        resultDiv.innerText = "Por favor, digite um nome de usuário.";
        return;
    }

    fetch(`https://api.github.com/users/${username}`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Usuário não encontrado');
            }

            return response.json();
        })
        .then(data => {
            resultDiv.innerHTML = `
                <p><strong>Nome:</strong> ${data.name || 'Não informado'}</p>
                <p><strong>Repositórios públicos:</strong> ${data.public_repos}</p>
                <p><strong>Seguidores:</strong> ${data.followers}</p>
                <img src="${data.avatar_url}" alt="Avatar" width="100">
            `;
        })
        .catch(error => {
            resultDiv.innerText = "Erro: " + error.message;
        });
});