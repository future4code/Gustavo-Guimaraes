function contaOcorrencias(arrayDeNumeros, numeroEscolhido) {
    let aparicoes = 0
    for (let i = 0; i < arrayDeNumeros.lenght; i++) {
        if (arrayDeNumero[i] === numeroEscolhido) {
            aparicoes += 1
            return `O número ${numeroEscolhido} aparece ${aparicoes}`
        } else {
            return "Número não encontrado"
        }
    }
}
/*     const fraseDeAparicao = `O número ${numeroEscolhido} aparece ${aparicoes}`
    return fraseDeAparicao
} else {
    const fraseDeNaoaparicao = "Número não encontrado"
    return fraseDeNaoaparicao
} */


console.log(contaOcorrencias([1, 4, 8, 2, 5, 4, 2, 4, 7, 5], 4))