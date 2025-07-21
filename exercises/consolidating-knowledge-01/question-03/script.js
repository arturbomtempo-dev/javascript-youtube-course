// Função auxiliar que calcula e exibe quantas notas devem ser entregues
function printNote(quantity, noteValue) {
    const count = Math.floor(quantity / noteValue);
    console.log(`${count} nota(s) de ${noteValue}`);
    return quantity % noteValue;
}

// Função principal que chama a auxiliar para cada tipo de nota
function dispenseCash(amount) {
    console.log('Entregar:');

    amount = printNote(amount, 100);
    amount = printNote(amount, 50);
    amount = printNote(amount, 20);
    amount = printNote(amount, 10);
    amount = printNote(amount, 5);
    amount = printNote(amount, 2);
    amount = printNote(amount, 1);
}

// Parte principal do programa
const input = prompt('Digite um valor inteiro em reais:');
const amount = Number(input);

// Verificação de valor válido
if (!isNaN(amount) && amount >= 0) {
    dispenseCash(amount);
} else {
    console.log('Por favor, insira um valor válido.');
}
