function greetUser(name, callback) {
    callback(name);
}

function welcomeMessage(userName) {
    console.log("Olá, " + userName + "! Seja bem-vindo ao curso.");
}

greetUser("Eduarda", welcomeMessage);