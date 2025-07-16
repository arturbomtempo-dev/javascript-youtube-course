// Recebendo número do usuário via prompt
let numero = prompt("Digite um número:");
numero = Number(numero); // Convertendo para número

// Verificando se é positivo ou negativo
if (numero >= 0) {
    console.log("O número é positivo.");
} else {
    console.log("O número é negativo.");
}