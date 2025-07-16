// Expressões com diferentes ordens de precedência

console.log("1 + 2 * 3 =", 1 + 2 * 3);       // Multiplica antes de somar (1 + 6 = 7)
console.log("(1 + 2) * 3 =", (1 + 2) * 3);   // Soma primeiro por causa dos parênteses (3 * 3 = 9)
console.log("10 / 2 + 5 =", 10 / 2 + 5);     // Primeiro divide (5 + 5 = 10)
console.log("10 / (2 + 3) =", 10 / (2 + 3)); // Parênteses somam antes (10 / 5 = 2)