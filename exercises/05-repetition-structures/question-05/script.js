let qtd = Number(prompt("Quantas notas você quer inserir?"));
let soma = 0;
let contador = 0;

while (contador < qtd) {
    let nota = Number(prompt(`Digite a nota ${contador + 1}:`));
    soma += nota;
    contador++;
}

// Calculando a média
let media = soma / qtd;
console.log("Média final:", media.toFixed(2));