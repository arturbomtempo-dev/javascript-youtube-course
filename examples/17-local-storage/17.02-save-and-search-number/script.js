document.getElementById('saveBtn').addEventListener('click', () => {
    const number = document.getElementById('inputNumber').value;
    localStorage.setItem('myNumber', number);
    alert('Número salvo!');
});

document.getElementById('loadBtn').addEventListener('click', () => {
    const savedNumber = localStorage.getItem('myNumber');
    const output = document.getElementById('output');

    if (savedNumber) {
        output.innerText = "Número salvo: " + savedNumber;
    } else {
        output.innerText = "Nenhum número salvo encontrado.";
    }
});