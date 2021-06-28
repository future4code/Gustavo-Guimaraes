// EXERCÍCIO 01
function inverteArray(array) {
    const arrayInvertido = []
    for (let i = array.length - 1; i >= 0; i--) {
        arrayInvertido.push(array[i])
    }
    return arrayInvertido
}

// EXERCÍCIO 02
function retornaNumerosParesElevadosADois(array) {
    const arrayDeParesElevadosADois = []
    for (let i = 0; i < array.length; i++) {
        if ((array[i] % 2) === 0) {
            arrayDeParesElevadosADois.push(array[i] * array[i])
        }
    }
    return arrayDeParesElevadosADois
}

// EXERCÍCIO 03
function retornaNumerosPares(array) {
    const arrayDeNumerosPares = []
    for (let i = 0; i < array.length; i++) {
        if ((array[i] % 2) === 0) {
            arrayDeNumerosPares.push(array[i])
        }
    }
    return arrayDeNumerosPares
}

// EXERCÍCIO 04
function retornaMaiorNumero(array) {
    let maiorNumero = 0
    for (let i = 0; i < array.length; i++) {
        if (array[i] > maiorNumero) {
            maiorNumero = array[i]
        }
    }
    return maiorNumero
}

// EXERCÍCIO 05
function retornaQuantidadeElementos(array) {
    return array.length
}

// EXERCÍCIO 06
function retornaExpressoesBooleanas() {
    const booleano1 = true
    const booleano2 = false
    const booleano3 = !booleano2
    const booleano4 = !booleano3
    const respostas = [false, false, true, true, true]
    return respostas
}

// EXERCÍCIO 07
function retornaNNumerosPares(n) {
    const arrayDeNNumerosPares = []
    for (let i = 0; i <= n - 1; i++) {
        arrayDeNNumerosPares.push(2 * i)
    }
    return arrayDeNNumerosPares
}
// EXERCÍCIO 08
function checaTriangulo(a, b, c) {
    // return 'Escaleno'
    // return 'Equilátero'
    // return 'Isósceles'
    const equilatero = ((a === b) && (b === c) && (c === a))
    const escaleno = ((a !== b) && (b !== c) && (c !== a))
    if (equilatero) {
        return "Equilátero"
    } else if (escaleno) {
        return "Escaleno"
    } else {
        return "Isósceles"
    }
}

// EXERCÍCIO 09
function comparaDoisNumeros(num1, num2) {
    // Formato do objeto a ser retornado:
    // {
    //   maiorNumero: X,
    //   maiorDivisivelPorMenor: Y,
    //   diferenca: Z
    // }
    if (num1 > num2) {
        const resultado1 = {
            maiorNumero: num1,
            maiorDivisivelPorMenor: (num1 % num2) === 0,
            diferenca: num1 - num2
        }
        return resultado1
    } else if (num2 > num1) {
        const resultado2 = {
            maiorNumero: num2,
            maiorDivisivelPorMenor: (num2 % num1) === 0,
            diferenca: num2 - num1
        }
        return resultado2
    } else {
        const resultado3 = {
            maiorNumero: num1,
            maiorDivisivelPorMenor: true,
            diferenca: 0
        }
        return resultado3
    }


}

// EXERCÍCIO 10
function segundoMaiorEMenor(array) {

}

// EXERCÍCIO 11
function ordenaArray(array) {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
            if (array[j] > array[j + 1]) {
                let temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
            }
        }
    }
    return array;
}

// EXERCÍCIO 12
function filmeFavorito() {
    const filmeFavorito1 = {
        nome: "O Diabo Veste Prada",
        ano: 2006,
        diretor: "David Frankel",
        atores: ["Meryl Streep", "Anne Hathaway", "Emily Blunt", "Stanley Tucci"]
    }
    return filmeFavorito1
}

// EXERCÍCIO 13
function imprimeChamada() {
    const filmeFavorito1 = {
        nome: "O Diabo Veste Prada",
        ano: 2006,
        diretor: "David Frankel",
        atores: ["Meryl Streep", " Anne Hathaway", " Emily Blunt", " Stanley Tucci"]
    }
    return `Venha assistir ao filme ${filmeFavorito1.nome}, de ${filmeFavorito1.ano}, dirigido por ${filmeFavorito1.diretor} e estrelado por ${filmeFavorito1.atores}.`
}
console.log(imprimeChamada())

// EXERCÍCIO 14
function criaRetangulo(lado1, lado2) {

}

// EXERCÍCIO 15
function anonimizaPessoa(pessoa) {

}

// EXERCÍCIO 16A
function maioresDe18(arrayDePessoas) {

}

// EXERCÍCIO 16B
function menoresDe18(arrayDePessoas) {

}

// EXERCÍCIO 17A
function multiplicaArrayPor2(array) {

}

// EXERCÍCIO 17B
function multiplicaArrayPor2S(array) {

}

// EXERCÍCIO 17C
function verificaParidade(array) {

}

// EXERCÍCIO 18A
function retornaPessoasAutorizadas(pessoas) {

}

// EXERCÍCIO 18B
function retornaPessoasNaoAutorizadas(pessoas) {

}

// EXERCÍCIO 19A
function ordenaPorNome(consultasNome) {

}

// EXERCÍCIO 19B
function ordenaPorData(consultasData) {

}

// EXERCÍCIO 20
function calculaSaldo(contas) {

}