let userNumbers = [];

for (let i = 0; i < 3; i++) {
    let input = prompt("Digite um número para a posição " + i + ":");
    let number = Number(input);

    if (!isNaN(number)) {
        userNumbers.push(number);
    } else {
        console.log("Valor inválido, tente novamente.");
        i--;
    }
}

console.log("Números digitados:", userNumbers);
console.log("Quantidade de números no array:", userNumbers.length);

let firstRemoved = userNumbers.shift();
console.log("Número removido do início:", firstRemoved);
console.log("Array após remoção:", userNumbers);

userNumbers.unshift(100);
console.log("Array após adicionar 100 no início:", userNumbers);
