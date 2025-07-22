function contagem(n) {
    // Exibe o valor de n no console
    console.log(n);
    // Se n for igual a 0, encerra a função
    if (n === 0) {
        return;
    }
    // Chama a função novamente com n - 1 (recursão)
    contagem(n - 1);
}

contagem(10);
