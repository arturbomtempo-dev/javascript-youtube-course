const car = {
    brand: "Toyota",
    model: "Corolla",
    year: 2023
};

console.log("Marca: " + car.brand);
console.log("Modelo: " + car.model);

console.log("Ano: " + car["year"]);

car.year = 2024;
console.log("Ano atualizado: " + car.year);