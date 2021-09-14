export const goToLogin = (history) => {
    history.push("/login")
}

export const goToHome = (history) => {
    history.push("/")
}

export const goToCadastro = (history) => {
    history.push("/cadastro")
}

export const goToAdicionar = (history) => {
    history.push("/adicionar-post")
}

export const goToDetalhes = (history, id) => {
    history.push(`/detalhe/${id}`)
}