// ---------------------------------------- EXERCÍCIOS DE INTERPRETAÇÃO ---------------------------------------------
// 1. Leia o código abaixo
/* const filme = {
    nome: "Auto da Compadecida",
    ano: 2000,
    elenco: ["Matheus Nachtergaele", "Selton Mello", "Denise Fraga",
        "Virginia Cavendish"
    ],
    transmissoesHoje: [
        { canal: "Telecine", horario: "21h" },
        { canal: "Canal Brasil", horario: "19h" },
        { canal: "Globo", horario: "14h" }
    ]
}

console.log(filme.elenco[0])
console.log(filme.elenco[filme.elenco.length - 1])
console.log(filme.transmissoesHoje[2])
 */
// RESPOSTA: a.) Matheus Nachtergaele; Virginia Cavendish; { canal: "Globo", horario: "14h" }


// 2. Leia o código abaixo
/* const cachorro = {
    nome: "Juca",
    idade: 3,
    raca: "SRD"
}

const gato = {...cachorro, nome: "Juba" }

const tartaruga = {...gato, nome: gato.nome.replaceAll("a", "o") }

console.log(cachorro)
console.log(gato)
console.log(tartaruga) */

// RESPOSTA: 
/* a.) objeto {nome: "Juca", idade: 3, raca: "srd"} 
objeto {nome: "Juba", idade: 3, raca: "srd"}
objeto {nome: "Jubo", idade: 3, raca: "srd"} */
// b.) Ela copia o objeto inteiro referenciado.


// 3. Leia o código abaixo 
/* function minhaFuncao(objeto, propriedade) {
    return objeto[propriedade]
}

const pessoa = {
    nome: "Caio",
    idade: 23,
    backender: false
}

console.log(minhaFuncao(pessoa, "backender"))
console.log(minhaFuncao(pessoa, "altura"))
 */
// RESPOSTA: 
/* a.) false
Undefined */
// b.) Não existe essa propriedade (altura) nem valor atribuido a ela no objeto. Já no primeiro caso, é só o valor atribuido aquela propriedade, que no caso é um booleano.
// ---------------------------------------- EXERCÍCIOS DE ESCRITA ---------------------------------------------

/* 1. Resolva os passos a seguir: 
a) Crie um objeto. Ele deve conter duas propriedades: nome (string) e apelidos (um array que sempre terá exatamente três apelidos). Depois, escreva uma função que recebe como entrada um objeto e imprime uma mensagem no modelo abaixo:
// Exemplo de entrada
const pessoa = {
    nome: "Amanda", 
    apelidos: ["Amandinha", "Mandinha", "Mandi"]
 }
 
 // Exemplo de saída
 "Eu sou Amanda, mas pode me chamar de: Amandinha, Mandinha ou Mandi" */

const pessoaEApelidos = {
    nome: "Gustavo",
    apelidos: ["Gus", "Gusty", "Gu"],
}

function apresentacaoEApelidos(objeto) {
    return console.log(`Eu sou ${objeto.nome}, mas pode me chamar de ${objeto.apelidos[0]}, ${objeto.apelidos[1]} ou ${objeto.apelidos[2]}`)
}
apresentacaoEApelidos(pessoaEApelidos)
    // b.) Agora, usando o operador spread, crie um novo objeto mantendo o valor da propriedade nome, mas com uma nova lista de três apelidos. Depois, chame a função feita no item anterior passando como argumento o novo objeto
const mesmaPessoaNovosApelidos = {...pessoaEApelidos, apelidos: ["Tavo", "Gugu", "Guto"] }
apresentacaoEApelidos(mesmaPessoaNovosApelidos)


// 2.Resolva os passos a seguir: 
/* a) Crie dois objetos diferentes com as seguintes propriedades: nome, idade e profissão. 

b) Escreva uma função que receba esses objetos e retorne um array com as seguintes informações:

1. O valor de `nome`
2. O numero de caracteres do valor `nome`
3. O valor de `idade`
4. O valor de `profissão`
5. O numero de caracteres do valor `profissão`
 */
const pessoa1 = {
    nome: "Gustavo",
    idade: 24,
    profissao: "Estudante"
}
const pessoa2 = {
    nome: "Lucas",
    idade: 20,
    profissao: "Estudante"
}

function dadosPessoais(objeto) {
    const compiladoDeInformacoes = [objeto.nome, objeto.nome.length, objeto.idade, objeto.profissao, objeto.profissao.length]
    return compiladoDeInformacoes
}
console.log(dadosPessoais(pessoa2))

// 3. Resolva os passos a seguir: 
/* a) Crie uma variável de escopo global que guarde um array vazio chamada carrinho
b) Crie três novos objetos que representem frutas de um sacolão. Eles devem ter as seguintes propriedades: nome (string) e disponibilidade (boolean - devem começar como true)
c) Crie uma função que receba um objeto fruta por parâmetro e coloque-a dentro do array de carrinho. Invoque essa função passando os três objetos criados. 
d) Imprima a variável carrinho e garanta que ela agora seja um array preenchido com três objetos. 
 */

const carrinho = []
const maca = {
    nome: "maçã",
    disponibilidade: true
}
const banana = {
    nome: "banana",
    disponibilidade: true
}
const uva = {
    nome: "uva",
    disponibilidade: true
}

function frutaNoCarrinho(fruta) {
    return carrinho.push(fruta)
}
frutaNoCarrinho(maca)
frutaNoCarrinho(banana)
frutaNoCarrinho(uva)
console.log(carrinho)

// ------------------------------------- DESAFIOS ------------------------------------------------------------
/* 1. Crie um função que pergunte ao usuário seu nome, sua idade e sua profissão e depois imprima no console um objeto com essas propriedades. 
Depois de imprimir o novo objeto, imprima também o tipo dele para garantir que é um objeto */
function dadosUsuario() {
    const nome = prompt("Qual seu nome?")
    const idade = Number(prompt("Qual sua idade?"))
    const profissao = prompt("Qual sua profissão?")
    const dadosGerais = {
        Nome: nome,
        Idade: idade,
        Profissao: profissao
    }
    console.log(dadosGerais)
}
dadosUsuario()