const jsonString = '{"name":"Eduarda","age":22,"courses":["JS","HTML","CSS"]}';

const userObj = JSON.parse(jsonString);

console.log("JSON convertido para objeto JavaScript:");
console.log(userObj);
console.log("Nome do usuário:", userObj.name);
console.log("Cursos:", userObj.courses.join(", "));