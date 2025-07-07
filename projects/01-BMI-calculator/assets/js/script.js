document.querySelector("button").addEventListener("click", () => {
    const weight = parseFloat(document.getElementById("weight").value.replace(",", "."));
    const height = parseFloat(document.getElementById("height").value.replace(",", "."));

    if (isNaN(weight) || isNaN(height) || height <= 0) {
        alert("Por favor, insira valores válidos para peso e altura.");
        return;
    }

    const imc = weight / (height * height);
    let classification = "";

    if (imc < 18.5) {
        classification = "Abaixo do peso";
    } else if (imc < 25) {
        classification = "Peso normal";
    } else if (imc < 30) {
        classification = "Sobrepeso";
    } else if (imc < 35) {
        classification = "Obesidade Grau I";
    } else if (imc < 40) {
        classification = "Obesidade Grau II";
    } else {
        classification = "Obesidade Grau III";
    }

    alert(`Seu IMC é ${imc.toFixed(2)}\nClassificação: ${classification}`);
});
