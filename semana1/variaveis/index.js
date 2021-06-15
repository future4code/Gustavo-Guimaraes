/* 1. Analise o programa abaixo e diga o que será impresso no console, SEM EXECUTAR o programa.
let a = 10
let b = 10

console.log(b)

b = 5
console.log(a, b)

// Resposta: 10 e 10 5
2. Analise o programa abaixo e diga o que será impresso no console, ** SEM EXECUTAR o programa. **

    ``
`jsx
    let a = 10
    let b = 20
    let c
    c = a
    b = c
    a = b

    console.log(a, b, c)
    `
``
// Resposta: 10 10 10
3. Analise o programa abaixo, entenda o que ele faz e ** sugira melhores nomes para as variáveis ** .Lembre - se que devemos escolher nomes significativos, usar o padrão ** camelCase ** .Alem disso, os nomes não podem começar com números ou caracteres especiais.

``
`jsx
    let p = prompt("Quantas horas você trabalha por dia?")
    let t = prompt("Quanto você recebe por dia?")
    alert(`
Voce recebe $ { t / p }
por hora `)
    `
`` */
// Resposta: p = horasTrabalhadas t = salarioDia


//1. Construa um programa, seguindo os seguintes passos:
const nome = prompt("Qual seu nome?")
const idade = prompt("Qual sua idade?")
console.log(typeof nome, typeof idade)
console.log("Olá", nome, ",você tem", idade, "anos")
    // d-) A variável const precisa de algo sendo atribuído a ela, e como este não é o caso o erro é gerado.
    // f-) Ambas foram registradas como string, já que as respostas foram obtidas através do prompt

//2. Escreva um programa que faça 3 perguntas de Sim ou Não, armazenado em uma variável. Por exemplo: "Você está usando uma roupa azul hoje?". Depois, siga os passos
let alimentacao1 = prompt("Você toma café?")
let alimentacao2 = prompt("Você toma chá?")
let alimentacao3 = prompt("Você consome carne?")
let café = alimentacao1
let chá = alimentacao2
let carne = alimentacao3
console.log("Você toma café? -", café, "Você toma chá? -", chá, "Você consome carne? -", carne)
    //3. Suponha que temos duas variáveis a e b, cada uma com um valor inicial
let a = 10
let b = 25
let c = b
b = a
a = c
console.log(a, b)

// Desafio - Faça um programa que receba dois números do usuário e faça as seguintes operações, imprimindo os resultados no console da seguinte forma:
let n1 = (Number(prompt("Número")))
let n2 = (Number(prompt("Número")))

let x = console.log(n1 + n2)
let y = console.log(n1 * n2)