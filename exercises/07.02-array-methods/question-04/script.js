// Vetor de objetos: produtos com nome e preço
const produtos = [];

for (let i = 1; i <= 5; i++) {
    const nome = prompt('Digite o nome do produto ' + i + ':');
    const preco = Number(prompt('Digite o preço do produto ' + i + ':'));
    produtos.push({ nome, preco });
}

// Exibindo todos os produtos
console.log('Todos os produtos:');

produtos.forEach((produto, i) => {
    console.log(`${i + 1}. ${produto.nome} - R$ ${produto.preco}`);
});

// Filtrando produtos com preço > R$ 100
const caros = produtos.filter((p) => p.preco > 100);
console.log('Produtos com preço acima de R$ 100:', caros);

// Buscando produto pelo nome com .find()
const busca = prompt('Digite o nome de um produto para buscar:');
const encontrado = produtos.find((p) => p.nome.toLowerCase() === busca.toLowerCase());

if (encontrado) {
    console.log('Produto encontrado:', encontrado);
} else {
    console.log('Produto não encontrado.');
}

// Verificando se há produto acima de R$ 500 com .some()
const temAcimaDe500 = produtos.some((p) => p.preco > 500);
console.log('Algum produto custa mais de R$ 500?', temAcimaDe500);
