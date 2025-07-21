// Função para gerar um número aleatório entre 1 e 5
function generateRandomNumber() {
    return Math.floor(Math.random() * 5) + 1;
}

// Função que verifica se um número é par
function isEven(number) {
    return number % 2 === 0;
}

// Função que determina se o jogador venceu com base na escolha
function playerWon(playerChoice, total) {
    const result = isEven(total) ? 'par' : 'ímpar';
    return result === playerChoice.toLowerCase();
}

// Parte principal do programa: jogo com repetição até o jogador perder
let winCount = 0;

while (true) {
    const playerNumber = Number(prompt('Escolha um número:'));
    const playerChoice = prompt('Par ou Ímpar?').toLowerCase();

    const computerNumber = generateRandomNumber();
    const total = playerNumber + computerNumber;
    const resultType = isEven(total) ? 'par' : 'ímpar';

    console.log(`Você escolheu: ${playerNumber}`);
    console.log(`Computador escolheu: ${computerNumber}`);
    console.log(`Total: ${total} → ${resultType}`);

    // Verifica o resultado da rodada
    if (playerWon(playerChoice, total)) {
        console.log('Você venceu esta rodada!\n');
        winCount++;
    } else {
        console.log('Você perdeu.\n');
        break;
    }
}

// Exibe o total de vitórias consecutivas ao final do jogo
console.log(`Você venceu ${winCount} rodada(s) consecutiva(s).`);
