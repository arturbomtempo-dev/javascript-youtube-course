function applyOperation(a, b, operation) {
    return operation(a, b);
}

let result = applyOperation(6, 7, function (x, y) {
    return x * y;
});

console.log("Resultado da multiplicação:", result);