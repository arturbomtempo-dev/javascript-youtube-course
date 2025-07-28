// Criando vetor de notas
const notas = [];

for (let i = 1; i <= 5; i++) {
    const nota = Number(prompt('Digite a ' + i + 'ª nota:'));
    notas.push(nota);
}

// Criando novo vetor com .map(), somando +1 ponto (máximo 10)
const notasAtualizadas = notas.map((nota) => {
    const novaNota = nota + 1;
    return novaNota > 10 ? 10 : novaNota; // Limitando a nota máxima
});

console.log('Notas originais:', notas);
console.log('Notas atualizadas:', notasAtualizadas);
