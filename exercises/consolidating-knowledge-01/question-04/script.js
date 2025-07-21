// Função que calcula a idade com base no ano de nascimento e no ano atual
function calculateAge(birthYear, currentYear) {
    return currentYear - birthYear;
}

// Função que classifica a idade de acordo com a faixa etária
function classifyAge(age) {
    if (age < 18) {
        return 'Menor de idade';
    } else if (age < 60) {
        return 'Adulto';
    } else {
        return 'Idoso';
    }
}

// Parte principal do programa: entrada, cálculo e exibição do resultado
const inputBirth = prompt('Digite o ano de nascimento:');
const inputCurrent = prompt('Digite o ano atual:');
const birthYear = Number(inputBirth);
const currentYear = Number(inputCurrent);

// Verifica se os valores são válidos
if (!isNaN(birthYear) && !isNaN(currentYear) && birthYear <= currentYear) {
    const age = calculateAge(birthYear, currentYear);
    const category = classifyAge(age);

    console.log(`Você tem ${age} ano(s).`);
    console.log(`Classificação: ${category}`);
} else {
    console.log('Por favor, insira anos válidos.');
}
