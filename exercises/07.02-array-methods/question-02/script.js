// Criando vetor vazio
const tarefas = [];

// Solicitando 5 tarefas com prompt e armazenando via .push()
for (let i = 1; i <= 5; i++) {
    const tarefa = prompt('Digite a ' + i + 'ª tarefa:');
    tarefas.push(tarefa);
}

// Exibindo todas as tarefas com .forEach()
console.log('Lista de tarefas:');

tarefas.forEach((tarefa, index) => {
    console.log(index + 1 + ' - ' + tarefa);
});

// Removendo tarefa informada pelo usuário com .indexOf() e .splice()
const remover = prompt('Digite o nome de uma tarefa que deseja remover:');
const indice = tarefas.indexOf(remover);

if (indice !== -1) {
    tarefas.splice(indice, 1);
    console.log('Tarefa removida com sucesso.');
} else {
    console.log('Tarefa não encontrada.');
}

// Lista atualizada
console.log('Lista atualizada:');

tarefas.forEach((tarefa, index) => {
    console.log(index + 1 + ' - ' + tarefa);
});
