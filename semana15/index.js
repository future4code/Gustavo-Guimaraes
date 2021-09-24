// ex 1 - a) conseguimos armazenar em uma variável com o process.argv

const nome = process.argv[2]
const idade = Number(process.argv[3])

const idadeMaisSete = idade + 7

console.log(`Olá, ${nome}! Você tem ${idade} anos. Em sete anos você terá ${idadeMaisSete}`)


/* const operacao = process.argv[2]
const numeros1 = Number(process.argv[3])
const numeros2 = Number(process.argv[4])

const result = () => {
    switch (operacao) {
        case "soma":
            console.log(numeros1 + numeros2)
            break;
        case "subt":
            console.log(numeros1 - numeros2)
            break;
        case "div":
            console.log(numeros1 / numeros2)
            break;
        case "mult":
            console.log(numeros1 * numeros2)
            break;
    }
}

result() */

/* const tarefas = require("./tarefas")

const novaTarefa = process.argv[2]

const novasTarefas = [...tarefas, novaTarefa]

console.log(`Tarefa adicionada com sucesso. Tarefas: ${novasTarefas}`) */