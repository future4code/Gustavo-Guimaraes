// -------------------------------------------------- Exercícios de interpretação de código -------------------------------------
/* O que o código abaixo está fazendo? Qual o resultado impresso no console? */
/* let valor = 0
for (let i = 0; i < 5; i++) {
    valor += i
}
console.log(valor) */
// R: Ele sempre acrescentará o valor do i ao valor do valor até que o i chegue em 5. 
// R: 0+1+2+3+4 = 10


/* 2. Leia o código abaixo:
 */
/* const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
for (let numero of lista) {
    if (numero > 18) {
        console.log(numero)
    }
} */
/* a) O que vai ser impresso no console?
        R: 19; 21; 23; 25; 27; 30.
    b) Se eu quisesse acessar o **índice** de cada elemento dessa lista, o `for...of...` é suficiente?
    Se sim, o que poderia ser usado para fazer isso? 
        R: Retirado o elemento "if" o let of leria todos os elementos da lista. */


// 3. Qual seria o resultado impresso no console, se o usuário digitasse o número 4 ?

/* const quantidadeTotal = Number(prompt("Digite a quantidade de linhas: "))
let quantidadeAtual = 0
while (quantidadeAtual < quantidadeTotal) {
    let linha = ""
    for (let asteriscos = 0; asteriscos < quantidadeAtual + 1; asteriscos++) {
        linha += "*"
    }
    console.log(linha)
    quantidadeAtual++
} */

/* R:   *
 **
 ***
 **** 
 */


// -------------------------------------------------- Exercícios de escrita de código -------------------------------------
/* 1. Pergunte ao usuário quantos bichinhos de estimação ele tem e guarde esse dado em uma variável. 
a) Se a quantidade for 0, imprima no console "Que pena! Você pode adotar um pet!"

b) Se a quantidade for maior que 0, solicite que o usuário digite os nomes deles, um por um, e guarde esses nomes em um array

- 💡 Dica

    Coloque o seu prompt dentro de um loop. Esse loop deve ser executado a mesma quantidade de vezes que o usuário inseriu. Por exemplo: se o usuário tem 4 pets, ele deve conseguir inserir 4 nomes.

c) Por fim, imprima o array com os nomes dos bichinhos no console */

const bichinhosDeEstimacao = Number(prompt("Quantos bichinhos de estimação você tem?"))
if (bichinhosDeEstimacao === 0) {
    console.log("Que pena! Você pode adotar um pet!")
} else {
    const nomesDosBichinhos = []
    for (let i = 0; i < bichinhosDeEstimacao; i++) {
        let nome = prompt("Qual o nome de um deles?")
        nomesDosBichinhos.push(nome)
    }
    console.log(nomesDosBichinhos)
}

/* 2. Considere que você tenha acesso a um array  (chamado de 'array original') que é composto somente de números. 
Baseando-se nisso, crie uma função para cada um dos itens abaixo, realizando as operações pedidas: */
/* a) Escreva um programa que **imprime** cada um dos valores do array original.

b) Escreva um programa que **imprime** cada um dos valores do array original divididos por 10

c) Escreva um programa que **crie** um novo array contendo, somente, os números pares do array original e **imprima** esse novo array

d) Escreva um programa que **crie** um novo array contendo strings, da seguinte forma: "O elemento do índex `i` é: `numero`". Depois, **imprima** este novo array.

e) Escreva um programa que imprima no console o maior e o menor números contidos no array original
 */

const arrayOriginal = [10, 100, 200, 400, 45]
    // a.)
for (let num of arrayOriginal) {
    console.log(num)
}
// b.)
for (let num of arrayOriginal) {
    console.log(num / 10)
}
// c.)
const novoArray = []
for (let num of arrayOriginal) {
    if ((num % 2) === 0) {
        novoArray.push(num)
    }
}
console.log(novoArray)
    // d.) 
const segundoNovoArray = []

for (let i = 0; i < arrayOriginal.length; i++) {
    segundoNovoArray.push(`O elemento do índex ${i} é: ${arrayOriginal[i]}`)
}
console.log(segundoNovoArray)
    // e.) e) Escreva um programa que imprima no console o maior e o menor números contidos no array original
let valorMaximo = 0
let valorMinimo = 15
for (let i = 0; i < arrayOriginal.length; i++) {
    if (arrayOriginal[i] > valorMaximo) {
        valorMaximo = arrayOriginal[i]
    } else if (arrayOriginal[i] < valorMinimo) {
        valorMinimo = arrayOriginal[i]
    }
}
console.log(`O maior número é ${valorMaximo} e o menor é ${valorMinimo}`)