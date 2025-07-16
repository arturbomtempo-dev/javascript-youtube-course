let valor = prompt("Digite um número:");
valor = Number(valor); // Convertendo

// Verificando se é um número válido
if (isNaN(valor)) {
    console.log("Valor inválido.");
} else if (valor % 2 === 0) {
    console.log("O número é par.");
} else {
    console.log("O número é ímpar.");
}