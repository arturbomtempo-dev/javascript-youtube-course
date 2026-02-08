// Array para armazenar os alunos
const students = [];

// Variável para controlar o próximo ID
let nextId = 1;

// ============================================
// Funções de Cadastro
// ============================================

// Cadastra um aluno no final do array
function registerStudent(name, age, classGroup) {
    const student = {
        id: nextId,
        name: name,
        age: age,
        classGroup: classGroup,
    };

    students.push(student);
    nextId++;

    console.log(`Aluno "${name}" cadastrado com sucesso! ID: ${student.id}`);
}

// Cadastra um aluno no início do array
function registerStudentAtStart(name, age, classGroup) {
    const student = {
        id: nextId,
        name: name,
        age: age,
        classGroup: classGroup,
    };

    students.unshift(student);
    nextId++;

    console.log(`Aluno "${name}" cadastrado no início com sucesso! ID: ${student.id}`);
}

// ============================================
// Funções de Listagem
// ============================================

// Lista todos os alunos
function listStudents() {
    console.log('\n=== Lista de Alunos ===');

    if (students.length === 0) {
        console.log('Nenhum aluno cadastrado.');
        return;
    }

    console.log(`Total de alunos: ${students.length}\n`);
    console.log('ID | Nome                | Idade | Turma');
    console.log('---|---------------------|-------|------');

    students.forEach((student) => {
        const id = String(student.id).padEnd(2);
        const name = student.name.padEnd(19);
        const age = String(student.age).padEnd(5);
        console.log(`${id} | ${name} | ${age} | ${student.classGroup}`);
    });

    // Exibe nomes em uma linha usando map e join
    const names = students.map((student) => student.name);
    console.log(`\nNomes: ${names.join(', ')}`);
}

// ============================================
// Funções de Busca
// ============================================

// Busca aluno por nome
function searchStudentByName(name) {
    const student = students.find((s) => s.name.toLowerCase() === name.toLowerCase());

    console.log('\n=== Busca por Nome ===');

    if (student) {
        console.log(`Aluno encontrado:`);
        console.log(`  ID: ${student.id}`);
        console.log(`  Nome: ${student.name}`);
        console.log(`  Idade: ${student.age}`);
        console.log(`  Turma: ${student.classGroup}`);
    } else {
        console.log(`Aluno "${name}" não encontrado.`);
    }
}

// Busca alunos por turma
function searchStudentsByClass(classGroup) {
    const filtered = students.filter(
        (s) => s.classGroup.toLowerCase() === classGroup.toLowerCase()
    );

    console.log(`\n=== Alunos da Turma ${classGroup} ===`);

    if (filtered.length === 0) {
        console.log(`Nenhum aluno encontrado na turma "${classGroup}".`);
        return;
    }

    console.log(`Total: ${filtered.length} aluno(s)\n`);

    filtered.forEach((student) => {
        console.log(`  - ${student.name} (ID: ${student.id}, Idade: ${student.age})`);
    });
}

// ============================================
// Função de Atualização
// ============================================

// Atualiza os dados de um aluno
function updateStudent(id, newName, newAge, newClassGroup) {
    const index = students.findIndex((s) => s.id === id);

    console.log('\n=== Atualização de Aluno ===');

    if (index === -1) {
        console.log(`Aluno com ID ${id} não encontrado.`);
        return;
    }

    const oldName = students[index].name;
    students[index].name = newName;
    students[index].age = newAge;
    students[index].classGroup = newClassGroup;

    console.log(`Aluno "${oldName}" atualizado para:`);
    console.log(`  Nome: ${newName}`);
    console.log(`  Idade: ${newAge}`);
    console.log(`  Turma: ${newClassGroup}`);
}

// ============================================
// Funções de Remoção
// ============================================

// Remove o último aluno
function removeLastStudent() {
    console.log('\n=== Remoção do Último Aluno ===');

    if (students.length === 0) {
        console.log('Nenhum aluno para remover.');
        return;
    }

    const removed = students.pop();
    console.log(`Aluno "${removed.name}" (ID: ${removed.id}) removido do final.`);
}

// Remove o primeiro aluno
function removeFirstStudent() {
    console.log('\n=== Remoção do Primeiro Aluno ===');

    if (students.length === 0) {
        console.log('Nenhum aluno para remover.');
        return;
    }

    const removed = students.shift();
    console.log(`Aluno "${removed.name}" (ID: ${removed.id}) removido do início.`);
}

// Remove aluno por ID
function removeStudentById(id) {
    const index = students.findIndex((s) => s.id === id);

    console.log('\n=== Remoção por ID ===');

    if (index === -1) {
        console.log(`Aluno com ID ${id} não encontrado.`);
        return;
    }

    const removed = students.splice(index, 1)[0];
    console.log(`Aluno "${removed.name}" (ID: ${removed.id}) removido com sucesso.`);
}

// ============================================
// Função de Estatísticas
// ============================================

// Exibe estatísticas do sistema
function showStatistics() {
    console.log('\n=== Estatísticas ===');

    if (students.length === 0) {
        console.log('Nenhum aluno cadastrado.');
        return;
    }

    // Total de alunos
    console.log(`Total de alunos: ${students.length}`);

    // Turmas únicas usando map e filter para remover duplicatas
    const allClasses = students.map((s) => s.classGroup);
    const uniqueClasses = allClasses.filter((classGroup, index) => {
        return allClasses.indexOf(classGroup) === index;
    });

    console.log(`Turmas: ${uniqueClasses.join(', ')}`);

    // Média de idade usando reduce
    const totalAge = students.reduce((sum, student) => sum + student.age, 0);
    const averageAge = totalAge / students.length;
    console.log(`Média de idade: ${averageAge.toFixed(1)} anos`);
}

// ============================================
// Funções Extras (Desafio)
// ============================================

// Ordena alunos por nome (alfabética)
function sortByName() {
    students.sort((a, b) => a.name.localeCompare(b.name));
    console.log('\nAlunos ordenados por nome (A-Z).');
    listStudents();
}

// Ordena alunos por idade
function sortByAge() {
    students.sort((a, b) => a.age - b.age);
    console.log('\nAlunos ordenados por idade (crescente).');
    listStudents();
}

// Verifica se um aluno existe
function studentExists(name) {
    const exists = students.some((s) => s.name.toLowerCase() === name.toLowerCase());

    console.log('\n=== Verificação de Existência ===');

    if (exists) {
        console.log(`Aluno "${name}" está cadastrado no sistema.`);
    } else {
        console.log(`✗ Aluno "${name}" NÃO está cadastrado no sistema.`);
    }
}

// Verifica se todos os alunos têm idade mínima
function allHaveMinimumAge(minAge) {
    console.log(`\n=== Verificação de Idade Mínima (${minAge} anos) ===`);

    if (students.length === 0) {
        console.log('Nenhum aluno cadastrado.');
        return;
    }

    const allApproved = students.every((s) => s.age >= minAge);

    if (allApproved) {
        console.log(`Todos os alunos têm ${minAge} anos ou mais.`);
    } else {
        console.log(`✗ Nem todos os alunos têm ${minAge} anos ou mais.`);

        // Mostra quem não atende
        const notApproved = students.filter((s) => s.age < minAge);
        console.log('Alunos abaixo da idade mínima:');
        notApproved.forEach((s) => {
            console.log(`  - ${s.name} (${s.age} anos)`);
        });
    }
}

// ============================================
// Menu Interativo
// ============================================

// Exibe o menu principal
function showMenu() {
    console.log('\n=== Sistema de Gestão Escolar ===');
    console.log('1. Cadastrar aluno (final)');
    console.log('2. Cadastrar aluno (início)');
    console.log('3. Listar alunos');
    console.log('4. Buscar aluno por nome');
    console.log('5. Buscar alunos por turma');
    console.log('6. Atualizar aluno');
    console.log('7. Remover último aluno');
    console.log('8. Remover primeiro aluno');
    console.log('9. Remover aluno por ID');
    console.log('10. Exibir estatísticas');
    console.log('11. Ordenar por nome');
    console.log('12. Ordenar por idade');
    console.log('13. Verificar se aluno existe');
    console.log('14. Verificar idade mínima');
    console.log('Digite "fim" para sair\n');
}

// Função principal com menu interativo
function main() {
    // Cadastra alguns alunos iniciais para teste
    registerStudent('Ana Silva', 16, '9A');
    registerStudent('Bruno Santos', 15, '9B');
    registerStudent('Carla Oliveira', 17, '9A');
    registerStudent('Diego Costa', 14, '8A');
    registerStudent('Eva Martins', 16, '9B');

    console.log('\n--- Alunos iniciais cadastrados para teste ---\n');

    // Loop do menu - continua enquanto não digitar "fim"
    let option = '';

    while (option !== 'fim') {
        showMenu();
        option = prompt('Escolha uma opção:');

        // Se cancelou o prompt, trata como "fim"
        if (option === null) {
            option = 'fim';
            continue;
        }

        // Normaliza para verificar "fim" (case-insensitive)
        if (option.toLowerCase() === 'fim') {
            option = 'fim';
            continue;
        }

        // Processa a opção escolhida
        switch (option) {
            case '1': {
                const name = prompt('Nome do aluno:');
                const age = Number(prompt('Idade:'));
                const classGroup = prompt('Turma:');
                registerStudent(name, age, classGroup);
                break;
            }
            case '2': {
                const name = prompt('Nome do aluno:');
                const age = Number(prompt('Idade:'));
                const classGroup = prompt('Turma:');
                registerStudentAtStart(name, age, classGroup);
                break;
            }
            case '3':
                listStudents();
                break;
            case '4':
                const name = prompt('Nome do aluno:');
                searchStudentByName(name);
                break;
            case '5':
                const classGroup = prompt('Turma:');
                searchStudentsByClass(classGroup);
                break;
            case '6': {
                const id = Number(prompt('ID do aluno:'));
                const newName = prompt('Novo nome:');
                const newAge = Number(prompt('Nova idade:'));
                const newClassGroup = prompt('Nova turma:');
                updateStudent(id, newName, newAge, newClassGroup);
                break;
            }
            case '7':
                removeLastStudent();
                break;
            case '8':
                removeFirstStudent();
                break;

            case '9': {
                const id = Number(prompt('ID do aluno a remover:'));
                removeStudentById(id);
                break;
            }
            case '10':
                showStatistics();
                break;
            case '11':
                sortByName();
                break;
            case '12':
                sortByAge();
                break;
            case '13': {
                const name = prompt('Nome do aluno:');
                studentExists(name);
                break;
            }
            case '14': {
                const minAge = Number(prompt('Idade mínima:'));
                allHaveMinimumAge(minAge);
                break;
            }
            default:
                console.log('\n⚠ Opção inválida. Tente novamente.');
        }
    }

    console.log('\nSistema encerrado. Até logo!');
}

// Inicia o programa
main();
