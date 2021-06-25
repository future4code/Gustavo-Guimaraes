/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */
console.log("Boas vindas ao jogo de Blackjack!")

// Lógica user
const cartasUsuario1 = comprarCarta((carta) => {
    return {
        valor: carta.valor,
        texto: carta.texto
    }
})
const cartasUsuario2 = comprarCarta((carta) => {
    return {
        valor: carta.valor,
        texto: carta.texto
    }
})
const cartasTextoUsuarioFinal = cartasUsuario1.texto + cartasUsuario2.texto
const cartasValorUsuarioFinal = Number(cartasUsuario2.valor) + Number(cartasUsuario1.valor)

// Lógica comp 
const cartasComputador1 = comprarCarta((carta) => {
    return {
        valor: carta.valor,
        texto: carta.texto
    }
})
const cartasComputador2 = comprarCarta((carta) => {
    return {
        valor: carta.valor,
        texto: carta.texto
    }
})
const cartasTextoComputadorFinal = cartasComputador1.texto + cartasComputador2.texto
const cartasValorComputadorFinal = Number(cartasComputador2.valor) + Number(cartasComputador1.valor)

// Lógica resultados
const resultadoFinal = () => {
    if (cartasValorUsuarioFinal === cartasValorComputadorFinal) {
        console.log("Empate!")
    } else if (cartasValorUsuarioFinal > cartasValorComputadorFinal) {
        console.log("O Usuário ganhou!")
    } else if (cartasValorUsuarioFinal < cartasValorComputadorFinal) {
        console.log("O Computador ganhou!")
    }
}

// Programa final
if (confirm("Quer iniciar uma nova rodada? ")) {
    console.log(`Usuário - Cartas: ${cartasTextoUsuarioFinal} - ${cartasValorUsuarioFinal}`)
    console.log(`Computador - Cartas: ${cartasTextoComputadorFinal} - ${cartasValorComputadorFinal}`)
    console.log(resultadoFinal())
} else {
    console.log("O jogo acabou.")
}