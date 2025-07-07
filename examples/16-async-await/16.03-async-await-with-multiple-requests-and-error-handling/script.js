async function fetchMultipleUsers(usernames) {
    try {
        const promises = usernames.map(async (username) => {
            const response = await fetch(`https://api.github.com/users/${username}`);
            if (!response.ok) {
                throw new Error(`Usuário ${username} não encontrado`);
            }
            return response.json();
        });

        const users = await Promise.all(promises);
        console.log("Usuários encontrados:", users);
    } catch (error) {
        console.error("Erro:", error.message);
    }
}

fetchMultipleUsers(["octocat", "arturbomtempo-dev", "torvalds"]);