/* let minhaString: string = 9 */
// Ocorre um erro pelo valor atribuído não ser do tipo declarado

/* let meuNumero: number | string  = 8 */

enum CoresArcoIris {
    VIOLETA = "violeta",
    ANIL = "anil",
    AZUL = "azul",
    VERDE = "verde",
    AMARELO = "amarelo",
    LARANJA = "laranja",
    VERMELH0 = "vermelho",
  }

type person = { 
    nome: string,
    idade: number,
    corFavorita: CoresArcoIris
}



const eu: person = {
    nome: "gus",
    idade: 24,
    corFavorita: CoresArcoIris.AZUL,
}

const NaoEu: person = {
    nome: "Sug",
    idade: 42,
    corFavorita: CoresArcoIris.VERDE,
}