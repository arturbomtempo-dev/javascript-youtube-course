// Esta função é chamada quando o botão é clicado
function showNumber() {
    // Pegamos o valor digitado no input (sempre vem como string)
    const numero = document.getElementById("numeroInput").value;

    // Exibimos o número no console
    console.log("O número digitado foi: " + numero);
}