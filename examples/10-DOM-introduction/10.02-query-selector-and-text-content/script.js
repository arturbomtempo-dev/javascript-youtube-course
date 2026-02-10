document.getElementById('updateParagraphBtn').addEventListener('click', () => {
    const paragraph = document.querySelector('.description');
    paragraph.textContent = "Parágrafo atualizado via textContent!";
});