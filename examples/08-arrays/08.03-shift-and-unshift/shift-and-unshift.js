const colors = ["red", "green", "blue"];

console.log("Array inicial:", colors);

const first = colors.shift();
console.log("Depois do shift(), removido:", first);
console.log("Array após shift:", colors);

colors.unshift("yellow");
console.log("Depois do unshift('yellow'):", colors);

console.log("Tamanho do array:", colors.length);