// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
    // implemente sua lógica aqui
    return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
    // implemente sua lógica aqui
    const mensagem = prompt('Digite uma mensagem!')

    console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
    // implemente sua lógica aqui
    const alturaUsuario = Number(prompt("Insira a altura do retângulo"))
    const larguraUsuario = Number(prompt("Insira a largura do retângulo"))
    const areaRetangulo = alturaUsuario * larguraUsuario
    return console.log(areaRetangulo)
}


// EXERCÍCIO 02
function imprimeIdade() {
    // implemente sua lógica aqui
    const anoAtual = Number(prompt("Insira o ano atual"))
    const anoDeNascimento = Number(prompt("Insira o seu ano de nascimento"))
    return console.log(anoAtual - anoDeNascimento)
}

// EXERCÍCIO 03 
function calculaIMC(peso, altura) {
    // implemente sua lógica aqui
    const imc = peso / (altura * altura)
    return imc
}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
    // implemente sua lógica aqui
    // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."
    const nome = prompt("Qual seu nome?")
    const idade = prompt("Qual sua idade?")
    const email = prompt("Qual seu melhor email?")
    return console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`)
}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
    // implemente sua lógica aqui
    const cor1 = prompt("Qual sua cor favorita?")
    const cor2 = prompt("Qual sua segunda cor favorita?")
    const cor3 = prompt("Qual sua terceira cor mais favorita?")
    const coresFavoritas = [cor1, cor2, cor3]
    return console.log(coresFavoritas)
}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
    // implemente sua lógica aqui
    const stringEmMaiuscula = string.toUpperCase()
    return stringEmMaiuscula
}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
    // implemente sua lógica aqui
    const ingressosNecessarios = custo / valorIngresso
    return ingressosNecessarios
}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
    // implemente sua lógica aqui,
    const tamanhoStrings = (string1.length === string2.length)
    return (tamanhoStrings)

}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
    // implemente sua lógica aqui
    const primeiroElemento = array[0]
    return primeiroElemento
}


// EXERCÍCIO 10
function retornaUltimoElemento(array) {
    // implemente sua lógica aqui
    const ultimoElemento = array[array.length - 1]
    return ultimoElemento
}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
    // implemente sua lógica aqui3
    let primeiroElemento1 = array[0]
    array[0] = array[array.length - 1]
    array[array.length - 1] = primeiroElemento1
    return array

}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
    // implemente sua lógica aqui
    const resultadoDaChecagem = (string1.toUpperCase() === string2.toUpperCase())
    return resultadoDaChecagem
}



// EXERCÍCIO 13
function checaRenovacaoRG() {
    // implemente sua lógica aqui
    const anoAtual1 = Number(prompt("Insira o ano atual"))
    const anoDeNascimento1 = Number(prompt("Insira o seu ano de nascimento"))
    const anoEmissaoDoRG = Number(prompt("Insira o ano de emissão de seu RG"))
    const idade1 = anoAtual1 - anoDeNascimento1
    const idadeDoRG = anoAtual1 - anoEmissaoDoRG
    const pessoasJovens = ((idade1 <= 20) && (idadeDoRG >= 5))
    const pessoasAdultas = ((idade1 <= 50) && (idade1 > 20) && (idadeDoRG >= 10))
    const pessoasIdosas = ((idade1 > 50) && (idadeDoRG >= 15))
    const renovacaoRG = ((pessoasJovens) || (pessoasAdultas) || (pessoasIdosas))
    return console.log(renovacaoRG)
}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
    // implemente sua lógica aqui
    const anoBissexto1 = ((ano % 400) === 0)
    const anoBissexto2 = ((ano % 4) === 0) && !((ano % 100 === 0) && !anoBissexto1)
    return anoBissexto1 || anoBissexto2
}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
    // implemente sua lógica aqui
    const idadeUsuario = prompt("Responda com sim ou não: você tem mais de 18 anos?")
    const escolaridadeUsuario = prompt("Responda com sim ou não: você possui ensino médio completo?")
    const disponibilidadeUsuario = prompt("Responda com sim ou não: você possui disponibilidade total?")
    const idadebol = (idadeUsuario === "sim")
    const escolaridadebol = (escolaridadeUsuario === "sim")
    const disponibilidadebol = (disponibilidadeUsuario === "sim")
    const positivo = idadebol && escolaridadebol && disponibilidadebol
    return console.log(positivo)
}