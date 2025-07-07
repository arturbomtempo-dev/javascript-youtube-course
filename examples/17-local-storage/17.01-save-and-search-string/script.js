document.getElementById('saveBtn').addEventListener('click', () => {
    const text = document.getElementById('inputText').value;

    localStorage.setItem('myText', text);
    alert('Texto salvo!');
});

document.getElementById('loadBtn').addEventListener('click', () => {
    const savedText = localStorage.getItem('myText');
    const output = document.getElementById('output');

    if (savedText) {
        output.innerText = "Texto salvo: " + savedText;
    } else {
        output.innerText = "Nenhum texto salvo encontrado.";
    }
});