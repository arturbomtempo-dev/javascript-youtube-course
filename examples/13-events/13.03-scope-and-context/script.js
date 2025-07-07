const button = document.getElementById('btnScope');

button.addEventListener('click', () => {
    console.log(this); // 'this' se refere ao elemento button
    alert("Este botão tem texto: " + this.innerText);
});

// Se usar arrow function, 'this' não será o elemento:
button.addEventListener('click', () => {
    console.log(this); // 'this' é o contexto externo (geralmente window)
});