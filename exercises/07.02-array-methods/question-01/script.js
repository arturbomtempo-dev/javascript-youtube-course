// Criando vetor vazio
const nomes = [];

// Adicionando 3 nomes com .push()
nomes.push(prompt('Digite o 1º nome:'));
nomes.push(prompt('Digite o 2º nome:'));
nomes.push(prompt('Digite o 3º nome:'));

// Removendo o primeiro nome com .shift()
nomes.shift();

// Adicionando novo nome no início com .unshift()
nomes.unshift(prompt('Digite um novo nome para adicionar no início:'));

// Exibindo resultados
console.log('Nomes cadastrados:', nomes);
console.log('Quantidade de nomes:', nomes.length);
console.log("Tem 'Maria' na lista?", nomes.includes('Maria'));
