# Lista de Exercícios – Métodos de Arrays (JavaScript)

Esta pasta contém a **resolução de 5 exercícios** com foco nos principais **métodos de arrays em JavaScript**.  
Cada exercício simula um pequeno sistema com entrada do usuário e manipulação de listas, usando métodos como `.push`, `.pop`, `.shift`, `.unshift`, `.length`, `.includes`, `.find`, `.map`, `.filter`, `.forEach`, `.some` e outros.

> ⚠️ **Importante:** Os exercícios devem ser executados com entrada via `prompt` e exibição via `console.log`.  
> Todos os códigos são scripts simples para praticar os métodos e não exigem HTML.

---

### Questão 01 – Cadastro de nomes com inserção e remoção

Crie um vetor chamado `nomes`.  
Peça ao usuário que informe **3 nomes**, um por vez, e adicione-os no vetor com o método `.push()`.  
Depois, remova o **primeiro nome** com `.shift()` e adicione um novo nome **no início** com `.unshift()`.

Ao final, exiba:

-   O vetor completo
-   A quantidade de nomes cadastrados (`.length`)
-   Se o nome `"Maria"` está presente na lista (`.includes()`)

---

### Questão 02 – Sistema de lista de tarefas

Crie um vetor chamado `tarefas`.  
Peça para o usuário digitar **5 tarefas** (use `prompt` em um `for`) e armazene com `.push()`.

Depois:

-   Exiba todas as tarefas com `.forEach()`
-   Peça ao usuário o nome de uma tarefa para remover e utilize `.indexOf()` e `.splice()` para removê-la
-   Mostre novamente a lista atualizada

---

### Questão 03 – Atualização de notas com .map()

Crie um vetor chamado `notas` com 5 valores numéricos (peça com `prompt`).  
Depois, utilize `.map()` para gerar um novo vetor onde cada nota será acrescida de 1 ponto (máximo 10).  
Exiba o vetor original e o novo vetor.

---

### Questão 04 – Filtro de produtos com preço

Crie um vetor de objetos chamado `produtos`, onde cada item tem `{ nome, preco }`.  
Peça ao usuário para cadastrar 5 produtos.

Depois:

-   Exiba todos os produtos com `.forEach()`
-   Crie um novo vetor apenas com produtos de preço **maior que R$ 100** usando `.filter()`
-   Peça ao usuário um nome de produto e use `.find()` para buscar o objeto correspondente
-   Verifique com `.some()` se existe algum produto com preço acima de R$ 500

---

### Questão 05 – Sistema de aprovação com find e every

Crie um vetor chamado `alunos`, onde cada item será um objeto com `nome` e `nota`.

1. Peça ao usuário para cadastrar 3 alunos.
2. Use `.forEach()` para exibir todos os alunos e notas
3. Use `.filter()` para separar os alunos com nota maior ou igual a 7
4. Pergunte o nome de um aluno e use `.find()` para exibir os dados dele
5. Use `.every()` para verificar se **todos os alunos foram aprovados** (nota ≥ 7)
