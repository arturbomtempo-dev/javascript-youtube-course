let input = document.getElementById("nameInput");
let button = document.getElementById("sendBtn");

button.addEventListener("click", () => {
    let name = input.value;
    alert("Olá, " + name + "!");
});