const grades = [5, 7, 8, 6.5, 9, 4];

// Filtrar notas maiores ou iguais a 7
const passedGrades = grades.filter(grade => grade >= 7);
console.log("Notas aprovadas (>=7):", passedGrades);

// Somar as notas aprovadas
const total = passedGrades.reduce((accumulator, current) => accumulator + current, 0);
console.log("Soma das notas aprovadas:", total);