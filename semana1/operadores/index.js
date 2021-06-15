/* 1. Leia o código abaixo. Indique todas as mensagens impressas no console, **SEM EXECUTAR o programa**.


    const bool1 = true
    const bool2 = false
    const bool3 = !bool2

    let resultado = bool1 && bool2
    console.log("a. ", resultado)

    resultado = bool1 && bool2 && bool3 
    console.log("b. ", resultado) 

    resultado = !resultado && (bool1 || bool2) 
    console.log("c. ", resultado)

    console.log("d. ", typeof resultado)
    ``` */
// RESPOSTA: a. false; b. false; c. false (conferir); d. boolean


/* 2. Seu colega se aproxima de você falando que o código dele não funciona como devia.  Vamos ajudá-lo: consegue perceber algum problema? O que será impresso no console? 

  
    let primeiroNumero = prompt("Digite um numero!")
    let segundoNumero = prompt("Digite outro numero!")

    const soma = primeiroNumero + segundoNumero

    console.log(soma)
 */
// RESPOSTA: Quando algo é digitado no prompt, a variável é considerada uma "string", e não um "number". Ou seja, temos que transformar o valor recebido pelo prompt em número com o comando number().


/* 3. Para o exercício anterior, sugira ao seu colega uma solução para que o valor impresso no console seja, de fato, a soma dos dois números. */
//  RESPOSTA: Só é necessário deixar o código assim:
/* let primeiroNumero = Number(prompt("Digite um numero!"))
let segundoNumero = Number(prompt("Digite outro numero!")) */

/* 1.Faça um programa que:
a) Pergunte a idade do usuário

b) Pergunte a idade do seu melhor amigo ou da sua melhor amiga

c) ** Imprima na console ** a seguinte mensagem: "Sua idade é maior do que a do seu melhor amigo?", seguido pela resposta(`true`
ou `false`)

d) ** Imprima na console ** a diferença de idade(não tem problema se sair um número negativo) */
const idadeUser = Number(prompt("Qual a sua idade?"))
const idadeAmigo = Number(prompt("Qual a idade de seu melhor amigo?"))
console.log("Sua idade é maior do que a do seu melhor amigo?", (idadeUser > idadeAmigo))
console.log(idadeUser - idadeAmigo)

/* 2. Faça um programa que:
a) Peça ao usuário que insira um número **par**

b) Imprima na console **o resto da divisão** desse número por 2.

c) Teste o programa com diversos números pares. Você notou um padrão? Escreva em um comentário de código.

d) O que acontece se o usuário inserir um número ímpar? Escreva em um comentário de código */
const numberPar = Number(prompt("Insira um número Par!"))
console.log(numberPar % 2)
    // c. o resultado sempre será 0
    // d. Haverá 1 de resto


/* 3.Faça um programa que pergunte ao usuário sua idade em anos. Depois, imprima no console 
a) A idade do usuário em meses

b) A idade do usuário em dias

c) A idade do usuário em horas */
const idade = Number(prompt("Quantos anos você tem?"))
const idadeMeses = idade * 12
const idadeDias = idade * 365
const idadeHoras = idade * 8760
console.log(idadeMeses, idadeDias, idadeHoras)

/* 4. Faça um programa que pergunte ao usuário dois números. Em seguida, faça as operações e imprima no console as seguintes mensagens:
O primeiro numero é maior que segundo ? true
O primeiro numero é igual ao segundo ? false
O primeiro numero é divisível pelo segundo ? true
O segundo numero é divisível pelo primeiro ? true */
const numero1 = Number(prompt("Insira um número"))
const numero2 = Number(prompt("Insira outro número"))
console.log("O primeiro numero é maior que segundo ?", (numero1 > numero2))
console.log("O primeiro numero é igual ao segundo?", (numero1 === numero2))
console.log("O primeiro numero é divisível pelo segundo ?", ((numero1 % numero2) === 0))
console.log("O segundo numero é divisível pelo primeiro ?", ((numero2 % numero1) === 0))
