document.getElementById('showNameBtn').addEventListener('click', function () {
    const input = document.getElementById('inputName');
    const display = document.getElementById('displayName');
    display.innerText = "Olá, " + input.value + "!";
});