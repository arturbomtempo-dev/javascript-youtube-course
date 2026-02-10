const numbers = [10, 20, 30];

console.log("Array inicial:", numbers);

numbers.push(40);
console.log("Depois do push(40):", numbers);

const last = numbers.pop();
console.log("Depois do pop(), removido:", last);
console.log("Array após pop:", numbers);

console.log("Tamanho do array:", numbers.length);