# Lista de Exercícios – Consolidando Conhecimentos 01 (JavaScript)

Esta pasta contém a **resolução de 5 exercícios** com foco em **revisão e consolidação de lógica de programação**.  
Todos os desafios aplicam, de forma integrada, os principais conceitos estudados até aqui:

-   Declaração de variáveis e operadores
-   Estruturas condicionais (`if`, `else`, `switch`)
-   Laços de repetição (`while`, `for`)
-   Declaração e uso de funções

> ⚠️ **Importante:** Nenhum exercício utiliza **arrays** ou estruturas que ainda não foram ensinadas.  
> O objetivo é que o aluno se sinta **seguro para resolver problemas reais**, apenas com o conhecimento atual.

---

### Questão 01 – Conversor de Tempo

Crie um programa que solicite ao usuário um valor em **segundos** e converta esse valor para **horas, minutos e segundos**.  
O resultado deve ser exibido no seguinte formato:

```plaintext
3600 segundos equivalem a 1 hora(s), 0 minuto(s) e 0 segundo(s)
```

Utilize funções e operadores matemáticos como divisão inteira e resto (`%`).

---

### Questão 02 – Contador Personalizado

Crie uma função chamada `contar` que receba três parâmetros:  
**início**, **fim** e **passo**. A função deve exibir no console os números de acordo com esses parâmetros.

Exemplo de chamada:

```javascript
contar(1, 10, 2);
// Saída: 1 3 5 7 9
```

O programa deve funcionar para contagens crescentes ou decrescentes.
Trate casos inválidos, como passo igual a zero.

---

### Questão 03 – Simulador de Caixa Eletrônico

Escreva um programa que **receba um valor inteiro** em dinheiro (ex: 127) e simule a entrega de cédulas.
As **notas disponíveis** são: 100, 50, 20, 10, 5, 2 e 1.

O programa deve mostrar a quantidade de cada nota necessária para compor o valor informado, começando pela maior:

```plaintext
Entregar:
1 nota(s) de 100
0 nota(s) de 50
1 nota(s) de 20
0 nota(s) de 10
1 nota(s) de 5
1 nota(s) de 2
0 nota(s) de 1
```

Crie uma **função** para calcular e exibir as notas.

---

### Questão 04 – Calculadora de Faixa Etária

Solicite ao usuário o **ano de nascimento** e o **ano atual**.
Com base na idade calculada, exiba a **faixa etária** correspondente:

-   Menor de idade (menos de 18 anos)
-   Adulto (entre 18 e 59 anos)
-   Idoso (60 anos ou mais)

Utilize **funções** para isolar os cálculos e a lógica da classificação.

---

### Questão 05 – Jogo: Par ou Ímpar

Crie um jogo **entre o usuário e o computador**, com as seguintes regras:

1. O usuário **escolhe** um número.
2. O computador **sorteia** um número entre **1 e 5**.
3. O usuário escolhe **“par”** ou **“ímpar”**.
4. **Soma-se** os dois números e **verifica quem venceu**.
5. O jogo continua até o **jogador perder**.

A cada rodada, o programa deve exibir o **número do usuário**, o **número do computador**, **o total**, o **resultado** (par ou ímpar) e **se o jogador venceu**.

Ao final, exiba quantas rodadas o jogador venceu consecutivamente.
