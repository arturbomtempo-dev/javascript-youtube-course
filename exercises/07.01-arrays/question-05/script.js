// Função que cria um vetor com três nomes recebidos por parâmetro
function criarVetorDeNomes(nome1, nome2, nome3) {
    const nomes = [];
    nomes[0] = nome1;
    nomes[1] = nome2;
    nomes[2] = nome3;

    return nomes; // retorna o vetor preenchido
}

// Chamando a função com três nomes de exemplo
const resultado = criarVetorDeNomes('Ana', 'Carlos', 'Lúcia');

// Exibindo o vetor resultante no console
console.log(resultado);
