let divide = (a, b) => {
    if (b === 0) {
        return "Não é possível dividir por zero.";
    }
    
    return a / b;
};

console.log(divide(10, 2));
console.log(divide(10, 0));