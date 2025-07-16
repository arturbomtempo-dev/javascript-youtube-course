let nota = prompt("Digite a nota do aluno:");
nota = Number(nota);

// Operador ternário para aprovar ou reprovar
let resultado = (nota >= 6) ? "Aprovado" : "Reprovado";
console.log("Resultado:", resultado);