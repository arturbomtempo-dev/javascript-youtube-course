// Função recursiva que imprime contagem até 0
function contagemRegressiva(n) {
    console.log(n);

    // Se n ainda for maior que 0, chama novamente com n - 1
    if (n > 0) {
        contagemRegressiva(n - 1);
    }
}

// Testando a função com número 5
contagemRegressiva(5);