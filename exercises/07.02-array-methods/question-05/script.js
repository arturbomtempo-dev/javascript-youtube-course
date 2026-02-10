// Criando vetor de alunos (nome e nota)
const alunos = [];

for (let i = 1; i <= 3; i++) {
    const nome = prompt('Digite o nome do aluno ' + i + ':');
    const nota = Number(prompt('Digite a nota de ' + nome + ':'));
    alunos.push({ nome, nota });
}

// Exibindo todos os alunos com .forEach()
console.log('Lista de alunos:');

alunos.forEach((aluno) => {
    console.log(`${aluno.nome} - Nota: ${aluno.nota}`);
});

// Filtrando aprovados com .filter()
const aprovados = alunos.filter((aluno) => aluno.nota >= 7);
console.log('Alunos aprovados:', aprovados);

// Buscando aluno específico com .find()
const buscarNome = prompt('Digite o nome de um aluno para buscar:');
const alunoBuscado = alunos.find((aluno) => aluno.nome.toLowerCase() === buscarNome.toLowerCase());

if (alunoBuscado) {
    console.log('Aluno encontrado:', alunoBuscado);
} else {
    console.log('Aluno não encontrado.');
}

// Verificando se todos foram aprovados com .every()
const todosAprovados = alunos.every((aluno) => aluno.nota >= 7);
console.log('Todos os alunos foram aprovados?', todosAprovados);
