const student = {
    name: "Eduarda",
    age: 22,
    grades: [8.5, 7.0, 9.0], // array dentro do objeto
    address: {              // objeto dentro do objeto
        street: "Rua das Flores",
        number: 123,
        city: "Belo Horizonte"
    }
};

console.log("Nome do aluno:", student.name);
console.log("Nota 1:", student.grades[0]);
console.log("Cidade:", student.address.city);

// Modificando a cidade no objeto aninhado
student.address.city = "Contagem";
console.log("Cidade atualizada:", student.address.city);