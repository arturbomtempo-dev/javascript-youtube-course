// Função que recebe os segundos totais e converte para horas, minutos e segundos
function convertTime(totalSeconds) {
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    alert(`${totalSeconds} segundos equivalem a ${hours} hora(s), ${minutes} minuto(s) e ${seconds} segundo(s)`);
}

// Recebe o valor digitado e chama a função
const input = prompt('Digite a quantidade de segundos:');
const totalSeconds = Number(input);

// Verifica se o valor é um número válido e positivo
if (!isNaN(totalSeconds) && totalSeconds >= 0) {
    convertTime(totalSeconds);
} else {
    alert('Por favor, insira um número válido e positivo.');
}
