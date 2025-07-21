// Função que realiza a contagem com base em três parâmetros: início, fim e passo
function count(start, end, step) {
    // Caso o passo seja 0, substitui por 1 e avisa o usuário
    if (step === 0) {
        console.log('Passo inválido! Usando passo 1 por padrão.');
        step = 1;
    }

    console.log(`Contando de ${start} até ${end}, de ${step} em ${step}:`);

    // Se o início for menor que o fim, faz contagem crescente
    if (start < end) {
        for (let i = start; i <= end; i += step) {
            console.log(i);
        }
    }
    // Senão, faz contagem decrescente
    else {
        for (let i = start; i >= end; i -= step) {
            console.log(i);
        }
    }
}

// Exemplos de uso:
count(1, 10, 2);
count(10, 0, 2);
