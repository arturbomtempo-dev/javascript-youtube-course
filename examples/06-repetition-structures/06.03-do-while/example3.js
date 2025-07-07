let number;

do {
    number = Number(prompt("Digite um número maior que 10:"));
} while (number <= 10);

console.log("Número aceito: " + number);