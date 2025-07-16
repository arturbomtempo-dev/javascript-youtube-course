// Função que verifica qual número é maior
function maiorNumero(a, b) {
    if (a > b) {
        console.log(`${a} é maior que ${b}`);
    } else if (b > a) {
        console.log(`${b} é maior que ${a}`);
    } else {
        console.log("Os dois números são iguais.");
    }
}

// Testando com dois valores
maiorNumero(10, 7);