// ------------------------------------------------------------------------------------------- EXERCÍCIOS DE INTERPRETAÇÃO ------------------------------------------------------------------------------------
// 1.Leia o código abaixo
/* ```jsx
function minhaFuncao(variavel) {
	return variavel * 5
}

console.log(minhaFuncao(2))
console.log(minhaFuncao(10))
```
 */
//a) O que vai ser impresso no console?
// RESPOSTA: 10 e 50; 1454
/* b) O que aconteceria se retirasse os dois `console.log`
e simplesmente invocasse a função `minhaFuncao(2)`
e `minhaFuncao(10)` ? O que apareceria no console ? */
// RESPOSTA: Não seria impresso nada no console, então as operações seriam realizadas mas não veríamos seu resultado 


// 2. Leia o código abaixo

/* let textoDoUsuario = prompt("Insira um texto");

const outraFuncao = function(texto) {
    return texto.toLowerCase().includes("cenoura")
}

const resposta = outraFuncao(textoDoUsuario)
console.log(resposta) */
/* b. Determine qual será a saída no console para cada uma das 3 entradas do usuário:
     i.   `Eu gosto de cenoura`
     ii.  `CENOURA é bom pra vista`
     iii. `Cenouras crescem na terra` */
// RESPOSTA: b. i. true; b. ii.  true; b. iii. true 


// ------------------------------------------------------------------------------------------- EXERCÍCIOS DE ESCRITA ------------------------------------------------------------------------------------
/* 1. Escreva as funções explicadas abaixo:
a) A função não deve receber nenhum parâmetro e deve imprimir uma mensagem falando algumas informações sobre você, como:
"Eu sou Caio, tenho 23 anos, moro em São Paulo e sou estudante."
Troque o nome, idade, cidade e se é estudante ou não por informações sobre você. Lembrando que a função não possui entradas, apenas imprime essa mensagem.

b)  Agora escreva uma função que receba 4 parâmetros que correspondem às informações de uma pessoa: o nome (`string`), a idade (`number`), a cidade (`string`) e uma profissão (`string`). Ela deve retornar uma `string` que unifique todas as informações da pessoa em uma só mensagem com o template: 
Eu sou [NOME], tenho [IDADE] anos, moro em [ENDEREÇO] e sou [PROFISSÃO]. */

function mensagemSobreMim() {
    console.log("Eu sou Gustavo, tenho 24 anos, moro em Foz e sou estudante")
}
mensagemSobreMim()

function mensagemDeIntroducao(nome, idade, cidade, profissao) {
    console.log(`Eu sou ${nome}, tenho ${idade} anos, moro em ${cidade} e sou ${profissao}`)
}

mensagemDeIntroducao("gus", 14, "sp", "analista")


// 2. Escreva as funções explicadas abaixo:
/* a) Escreva uma função que receba 2 números como parâmetros, e, dentro da função, faça a soma das duas entradas e retorne o resultado. Invoque a função e imprima no console o resultado.

b) Faça uma função que recebe 2 números e retorne um booleano que informa se o primeiro número é **maior ou igual** ao segundo.

c) Escreva uma função que receba um número e devolva um booleano indicando se ele é par ou não

d) Faça uma função que recebe uma mensagem (`string`) como parâmetro e imprima o tamanho dessa mensagem, juntamente com uma versão dela em letras maiúsculas. */

/* a */
function somarDoisNumeros(num1, num2) {
    const resultado1 = num1 + num2
    return resultado1
}
const primeiraOperacao = somarDoisNumeros(4, 5)
console.log(primeiraOperacao)
    /* b */
function primeiroNumeroMaiorQueSegundo(num1, num2) {
    const resultado2 = (num1 >= num2)
    return resultado2
}
const operacao1 = primeiroNumeroMaiorQueSegundo(5, 4)
console.log(operacao1)
    /* c */
function parOuNao(numero) {
    const resultado3 = (numero % 2) === 0
    return resultado3
}
const numeropar = parOuNao(2)
console.log(numeropar)
    /* d */
function fraseEmMaiuscula(frase) {
    console.log(frase.length)
    console.log(frase.toUpperCase())
}
fraseEmMaiuscula("Utilizar esta frase como teste")


// 3. Crie uma função para cada uma das operações básicas (soma, subtração, multiplicação e divisão). 
// Em seguida, peça para o usuário inserir dois números e chame essas 4 funções com esses valores inputados pelo usuário sendo o argumento. 
// Por fim, mostre no console o resultado das operações:
/* 
Números inseridos: 30 e 3
Soma: 33
Diferença: 27
Multiplicação: 90
Divisão: 10
 */
function soma(numero1, numero2) {
    const resultadoSoma = numero1 + numero2
    return resultadoSoma
}

function subtracao(numero1, numero2) {
    const resultadoSubtracao = numero1 - numero2
    return resultadoSubtracao
}

function multiplicacao(numero1, numero2) {
    const resultadoMultiplicacao = numero1 * numero2
    return resultadoMultiplicacao
}

function divisao(numero1, numero2) {
    const resultadoDivisao = numero1 / numero2
    return resultadoDivisao
}
let numeroUsuario = Number(prompt("Digite o primeiro número"))
let numero2Usuario = Number(prompt("Digite outro número"))

console.log(soma(numeroUsuario, numero2Usuario))
console.log(subtracao(numeroUsuario, numero2Usuario))
console.log(multiplicacao(numeroUsuario, numero2Usuario))
console.log(divisao(numeroUsuario, numero2Usuario))