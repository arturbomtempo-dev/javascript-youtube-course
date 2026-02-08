# Lista de Exercícios – Consolidando Conhecimentos 02 (JavaScript)

Esta pasta contém a **resolução de um exercício maior** com foco em **revisão e consolidação de arrays, funções e objetos**.  
O desafio aplica, de forma integrada, os principais conceitos estudados até aqui:

- Declaração de variáveis e operadores
- Estruturas condicionais (`if`, `else`, `switch`)
- Laços de repetição (`while`, `for`)
- Declaração e uso de funções
- **Arrays e métodos de array** (`push`, `pop`, `shift`, `unshift`, `splice`, `indexOf`, `join`, `find`, `filter`, `map`, `forEach`)

> 💡 **Dica:** Você pode rodar esse exercício diretamente no navegador, abrindo o console do desenvolvedor (F12) e executando o JavaScript por lá. Porém, **recomendo usar o Node.js** para ter uma experiência mais fluida. Basta rodar no terminal:
>
> ```bash
> node nome-do-arquivo.js
> ```

---

### Exercício – Sistema de Gestão Escolar

Crie um **sistema de gestão escolar** que permita gerenciar uma lista de alunos. O sistema deve ser **modularizado**, ou seja, cada funcionalidade deve estar em uma **função separada**.

O programa deve utilizar um **array** para armazenar os alunos, onde cada aluno é representado por um **objeto** com as seguintes propriedades:

```javascript
{
    id: 1,
    nome: "João Silva",
    idade: 16,
    turma: "9A"
}
```

---

#### Funcionalidades Obrigatórias

O sistema deve implementar as seguintes funções:

##### 1. `cadastrarAluno(nome, idade, turma)`

- Adiciona um novo aluno ao **final** do array.
- O `id` deve ser gerado automaticamente (sequencial).
- Exibe uma mensagem de confirmação do cadastro.

##### 2. `cadastrarAlunoInicio(nome, idade, turma)`

- Adiciona um novo aluno ao **início** do array.
- O `id` deve ser gerado automaticamente.
- Exibe uma mensagem de confirmação do cadastro.

##### 3. `listarAlunos()`

- Exibe todos os alunos cadastrados.
- Use o método `forEach()` para percorrer o array.
- Exiba os nomes dos alunos em uma **única linha**, separados por vírgula.

Exemplo de saída:

```plaintext
=== Lista de Alunos ===
Total de alunos: 3

ID | Nome           | Idade | Turma
1  | João Silva     | 16    | 9A
2  | Maria Santos   | 15    | 9B
3  | Pedro Oliveira | 17    | 9A

Nomes: João Silva, Maria Santos, Pedro Oliveira
```

##### 4. `buscarAlunoPorNome(nome)`

- Busca um aluno pelo nome utilizando o método `find()`.
- Exibe os dados completos do aluno encontrado.
- Se não encontrar, exibe uma mensagem informando.

##### 5. `buscarAlunosPorTurma(turma)`

- Retorna todos os alunos de uma determinada turma usando o método `filter()`.
- Exibe a lista dos alunos filtrados.

##### 6. `atualizarAluno(id, novoNome, novaIdade, novaTurma)`

- Busca o aluno pelo `id` e atualiza seus dados.
- Use `findIndex()` ou `indexOf()` para encontrar a posição do aluno.
- Exibe uma mensagem de confirmação ou erro caso o aluno não seja encontrado.

##### 7. `removerUltimoAluno()`

- Remove o **último** aluno do array.
- Exibe o nome do aluno removido.

##### 8. `removerPrimeiroAluno()`

- Remove o **primeiro** aluno do array.
- Exibe o nome do aluno removido.

##### 9. `removerAlunoPorId(id)`

- Remove um aluno específico pelo seu `id` usando o método `splice()`.
- Primeiro, encontre o índice do aluno com `findIndex()`.
- Exibe uma mensagem de confirmação ou erro.

##### 10. `exibirEstatisticas()`

- Exibe estatísticas do sistema utilizando métodos de array:
    - Total de alunos
    - Lista de todas as turmas únicas (use `map()` + `filter()` para remover duplicatas)
    - Média de idade dos alunos

Exemplo de saída:

```plaintext
=== Estatísticas ===
Total de alunos: 5
Turmas: 9A, 9B, 8A
Média de idade: 15.8 anos
```

---

#### Exemplo de Uso

```javascript
// Cadastrando alunos
cadastrarAluno('João Silva', 16, '9A');
cadastrarAluno('Maria Santos', 15, '9B');
cadastrarAlunoInicio('Pedro Oliveira', 17, '9A');

// Listando
listarAlunos();

// Buscando
buscarAlunoPorNome('Maria Santos');
buscarAlunosPorTurma('9A');

// Atualizando
atualizarAluno(1, 'João Pedro Silva', 17, '9A');

// Removendo
removerUltimoAluno();
removerAlunoPorId(2);

// Estatísticas
exibirEstatisticas();
```

---

#### Desafio Extra (Opcional)

Se quiser ir além, implemente também:

1. **`ordenarPorNome()`** – Ordena os alunos em ordem alfabética usando `sort()`.
2. **`ordenarPorIdade()`** – Ordena os alunos por idade (crescente ou decrescente).
3. **`existeAluno(nome)`** – Verifica se um aluno existe usando `some()`.
4. **`todosAprovados(idadeMinima)`** – Verifica se todos os alunos têm pelo menos a idade mínima usando `every()`.

---

#### Métodos de Array que Devem ser Utilizados

| Método        | Onde usar                         |
| ------------- | --------------------------------- |
| `push()`      | Cadastrar no final                |
| `unshift()`   | Cadastrar no início               |
| `pop()`       | Remover último                    |
| `shift()`     | Remover primeiro                  |
| `splice()`    | Remover por ID                    |
| `find()`      | Buscar aluno por nome             |
| `findIndex()` | Encontrar índice para atualização |
| `filter()`    | Filtrar alunos por turma          |
| `forEach()`   | Percorrer e listar                |
| `map()`       | Extrair propriedades (ex: nomes)  |
| `join()`      | Exibir nomes em uma linha         |
| `reduce()`    | Calcular média de idades          |

---

#### Menu Interativo (Obrigatório)

O sistema deve exibir um **menu interativo** que permite ao usuário escolher a operação desejada. O menu deve continuar aparecendo até que o usuário digite **"fim"** para encerrar o programa.

Use um **laço `while`** para manter o menu ativo.

Exemplo de menu:

```plaintext
=== Sistema de Gestão Escolar ===
1. Cadastrar aluno (final)
2. Cadastrar aluno (início)
3. Listar alunos
4. Buscar aluno por nome
5. Buscar alunos por turma
6. Atualizar aluno
7. Remover último aluno
8. Remover primeiro aluno
9. Remover aluno por ID
10. Exibir estatísticas
11. Ordenar por nome
12. Ordenar por idade
13. Verificar se aluno existe
14. Verificar idade mínima
Digite "fim" para sair

Escolha uma opção:
```

---

#### Dicas

- Crie o array de alunos como uma variável global no início do código.
- Use uma variável para controlar o próximo `id` disponível.
- Modularize bem: cada função deve ter uma única responsabilidade.
- Teste cada função individualmente antes de integrá-las.
- Use `console.log()` para exibir as informações formatadas.
