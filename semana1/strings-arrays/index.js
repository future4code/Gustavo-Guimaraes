// ----------------------------EXERCÍCIOS DE INTERPRETAÇÃO----------------------------------
/* let array
console.log('a. ', array)
// RESPOSTA: a. undefined


array = null
console.log('b. ', array) */
// RESPOSTA: b. null


/* array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
console.log('c. ', array.length)
    // RESPOSTA: c. 11


let i = 0
console.log('d. ', array[i])
    // RESPOSTA: d. 3


array[i + 1] = 19
console.log('e. ', array)
    // RESPOSTA: e. ??


const valor = array[i + 6]
console.log('f. ', valor)
// RESPOSTA: f. 9 */


/*  2. Leia o código abaixo com atenção  
const frase = prompt("Digite uma frase")

console.log(frase.toUpperCase().replaceAll("A", "I"), frase.length) */
// Qual será o valor impresso no console se a entrada do usuário for: "Subi num ônibus em Marrocos"?
// RESPOSTA: SUBI NUM ONIBUS EM MIRROCOS 27


// ----------------------------EXERCÍCIOS DE ESCRITA DE CÓDIGO------------------------
// Faça um programa que pergunte ao usuário seu nome e seu e-mail. Em seguida, imprima na tela a seguinte mensagem:
const nomeUser = prompt("Qual o seu nome?")
const emailUser = prompt("Qual o seu email?")
const boasVindas = `O e - mail ${emailUser} foi cadastrado com sucesso.Seja bem - vinda(o), ${nomeUser}!`
console.log(boasVindas)


// 2.
const comida = ["pizza", "macarrão", "almôndegas", "salmão", "frango assado"]
console.log(comida)

console.log("Essas são as minhas comidas preferidas:")
console.log(comida[0])
console.log(comida[1])
console.log(comida[2])
console.log(comida[3])
console.log(comida[4])

const comidaFavUser = prompt("Qual sua comida favorita?")
comida.splice(1, 1)
const novaListaComida = comida.replaceAll([1], comidaFavUser)
// ?
console.log(novaListaComida)


/* 3. Faça um programa, seguindo os passos:
a) Crie um array vazio e guarde-o em uma variável, chamada listaDeTarefas
b) Pergunte ao usuário 3 tarefas que ele precise realizar no dia e armazene-as, uma por uma, no array
c) Imprima o array na tela
d) Peça ao usuário que digite o índice de uma tarefa que ele já realizou: 0, 1 ou 2 
e) Remova da lista o item de índice que o usuário escolheu.
f) Imprima o array na tela
 */
let listaDeTarefas = []
const tarefa0 = prompt("Diga uma tarefa do seu dia ")
const tarefa1 = prompt("Diga outra")
const tarefa2 = prompt("Diga mais uma")
listaDeTarefas.push(tarefa0)
listaDeTarefas.push(tarefa1)
listaDeTarefas.push(tarefa2)
console.log(listaDeTarefas)
let tarefaRealizada = Number(prompt("Diga qual tarefa realizou utilizando 0, 1 ou 2, sendo 0 a primeira colocada e 2 a última "))
listaDeTarefas.splice(tarefaRealizada, 1)
console.log(listaDeTarefas)