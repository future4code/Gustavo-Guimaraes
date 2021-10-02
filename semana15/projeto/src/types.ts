export type Extrato = { 
    valor: number,
    data: Date,
    descricao: string
}

export type User = {  
    nome: string,
    cpf: string, 
    nascimento: Date;
    saldo: number
    extrato: Extrato[]
    
}
