async function fetchUser(username) {
    try {
        const response = await fetch(`https://api.github.com/users/${username}`);

        if (!response.ok) {
            throw new Error("Usuário não encontrado");
        }

        const data = await response.json();
        console.log("Dados do usuário:", data);
    } catch (error) {
        console.error("Erro:", error.message);
    }
}

fetchUser("arturbomtempo-dev");