function applyOperation(a, b, operation) {
    return operation(a, b);
}

function add(x, y) {
    return x + y;
}

function subtract(x, y) {
    return x - y;
}

console.log(applyOperation(10, 5, add));
console.log(applyOperation(10, 5, subtract));