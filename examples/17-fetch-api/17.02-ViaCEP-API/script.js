document.getElementById('btnFetch').addEventListener('click', () => {
    const cep = document.getElementById('cep').value.trim();
    const resultDiv = document.getElementById('result');

    if (!/^\d{8}$/.test(cep)) {
        resultDiv.innerText = "Por favor, digite um CEP válido com 8 números.";
        return;
    }

    fetch(`https://viacep.com.br/ws/${cep}/json/`)
        .then(response => {
            if (!response.ok) {
                throw new Error('CEP não encontrado');
            }

            return response.json();
        })
        .then(data => {
            if (data.erro) {
                resultDiv.innerText = "CEP não encontrado.";
            } else {
                resultDiv.innerHTML = `
                    <p><strong>Logradouro:</strong> ${data.logradouro}</p>
                    <p><strong>Bairro:</strong> ${data.bairro}</p>
                    <p><strong>Cidade:</strong> ${data.localidade}</p>
                    <p><strong>Estado:</strong> ${data.uf}</p>
                `;
            }
        })
        .catch(error => {
            resultDiv.innerText = "Erro: " + error.message;
        });
});