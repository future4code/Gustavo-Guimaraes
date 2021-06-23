//----------------------------------- Exercícios de interpretação de código --------------------------------------
/* 1. Leia o código abaixo:


    const respostaDoUsuario = prompt("Digite o número que você quer testar")
    const numero = Number(respostaDoUsuario)

    if (numero % 2 === 0) {
      console.log("Passou no teste.")
    } else {
      console.log("Não passou no teste.")
    }


    a) Explique o que o código faz. Qual o teste que ele realiza? 
        R:  Ele testa qual número é divisível por 2
    b) Para que tipos de números ele imprime no console "Passou no teste"? 
        R:  Qualquer um que seja par. 
    c) Para que tipos de números a mensagem é "Não passou no teste"? 
        R:  Números ímpares não passariam no teste, pois apresentariam resto. */

//2. O código abaixo foi feito por uma pessoa desenvolvedora, contratada para automatizar algumas tarefas de um supermercado:

/* let fruta = prompt("Escolha uma fruta")
let preco
switch (fruta) {
    case "Laranja":
        preco = 3.5
        break;
    case "Maçã":
        preco = 2.25
        break;
    case "Uva":
        preco = 0.30
        break;
    case "Pêra":
        preco = 5.5
        break;
        // BREAK PARA O ITEM c.
    default:
        preco = 5
        break;
}
console.log("O preço da fruta ", fruta, " é ", "R$ ", preco)


a) Para que serve o código acima?
    R: É uma forma de exibir o preço de uma determinada fruta que fosse escolhida. 
b) Qual será a mensagem impressa no console, se o valor de fruta for `"Maçã"`?
    R: O preço da fruta Maçã é R$ 2.25
c) Considere que um usuário queira comprar uma `Pêra`, qual seria a mensagem impressa no console se retirássemos o `break` que está logo acima do `default` (o `break` indicado pelo comentário "BREAK PARA O ITEM c.")?
    R: Seria "O preço da fruta Pêra é R$ 5" porque seria impresso o último valor. */


/*  3. Leia o código abaixo: 

const numero = Number(prompt("Digite o primeiro número."))

if (numero > 0) {
    console.log("Esse número passou no teste")
    let mensagem = "Essa mensagem é secreta!!!"
}

console.log(mensagem)

a) O que a primeira linha está fazendo?
    R: A primeira linha pede um número ao usuário e a insere dentro de uma variável. 
b) Considere um usuário digitou o número 10. Qual será a mensagem do terminal? E se fosse o número -10?
    R: Caso o número seja 10, será impresso "Esse número passou no teste". Se for -10, nada será impresso.
c) Haverá algum erro no console? Justifique usando os conceitos de bloco ou escopo.
    R: A mensagem não será impressa (resultando em erro) porque a variável utilizada não tem um escopo global. 
 */



//----------------------------------- Exercícios de escrita de código --------------------------------------

/* 1. Faça um programa que pergunta ao usuário qual a idade dele e imprima no console se ele/ela pode dirigir (apenas maiores de idade).

    a) Faça um `prompt` para receber a idade do usuário e guarde em uma variável.

    b) Garanta que essa variável é do tipo `Number`, você deve usar o cast para number para isso.

    c) Agora veja se essa idade do usuário corresponde à idade mínima que permite dirigir. Se sim, imprima no console `"Você pode dirigir"`, caso contrário, imprima `"Você não pode dirigir."` */

const idadeDoUsuario = Number(prompt("Qual a sua idade?"))
if (idadeDoUsuario >= 18) {
    console.log("Você pode dirigir")
} else {
    console.log("Você não pode dirigir")
}

/* 2. Agora faça um programa que verifica que turno do dia um aluno estuda. Peça para digitar **M** (matutino) ou **V** (Vespertino) ou **N** (Noturno). Imprima no console a mensagem "Bom Dia!", "Boa Tarde!" ou "Boa Noite!". Utilize o bloco `if/else`
    - 💡 Dica

        Se o usuário digitar "V" no prompt, você deverá imprimir no console a mensagem `"Boa Tarde!"`
        Nesse caso, temos 3 resultados diferentes (Bom dia/Tarde/Noite)

        Se o usuário digitar "V", a saída deve ser:


        "Boa Tarde!" */

const turnoDoEstudo = prompt("Em que período você estuda? Responda com M para matutino, V para vespertino e N para noturno")
if (turnoDoEstudo === "V") {
    console.log("Boa tarde!")
} else if (turnoDoEstudo === "M") {
    console.log("Bom dia!")
} else if (turnoDoEstudo === "N") {
    console.log("Boa noite!")
}

const turnoDoEstudo = prompt("Em que período você estuda? Responda com M para matutino, V para vespertino e N para noturno")
switch (turnoDoEstudo) {
    case "V":
        console.log("Boa tarde!")
        break
    case "M":
        console.log("Bom dia!")
        break
    case "N":
        console.log("Boa noite!")
        break
}


/*     4. Considere a situação: você vai ao cinema com um amigo ou amiga, porém ele/ela só assistirá a um filme com você se ele for do gênero fantasia **e** se o ingresso está abaixo de 15 reais. 
    Faça um código que pergunta ao usuário qual o gênero de filme que vão assistir e outra pergunta sobre o preço do ingresso, então verifique se seu amigo ou amiga vai topar assistir o filme. 
    Caso positivo, imprima no console a mensagem: `"Bom filme!"`, caso contrário, imprima `"Escolha outro filme :("` */

const generoFilme = prompt("Qual é o gênero do filme?")
const precoFilme = Number(prompt("Qual o preço do filme?"))
const lanchinho = prompt("Você quer pipoca, chocolate ou o que para acompanhar?")
const generoFilmeBooleano = generoFilme === "fantasia"
const precoFilmeBooleano = precoFilme < 15

console.log(generoFilmeBooleano)

if (generoFilmeBooleano && precoFilmeBooleano) {
    console.log(`Bom filme! Aproveite seu ${lanchinho}`)
} else {
    console.log("Escolha outro filme :c")
}