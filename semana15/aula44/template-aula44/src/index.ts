import express, { Request, Response } from 'express'
import cors from 'cors'

type User = {
  id: number,
  name: string,
  email: string,
  type: string,
  age: number
}

// Mock simulando um array de usuários no Banco de Dados
let users: User[] = [
  {
      id: 1,
      name: "Alice",
      email: "alice@email.com",
      type: "ADMIN",
      age: 12
  },
  {
      id: 2,
      name: "Bob",
      email: "bob@email.com",
      type: "NORMAL",
      age: 36
  },
  {
      id: 3,
      name: "Coragem",
      email: "coragem@email.com",
      type: "NORMAL",
      age: 21
  },
  {
      id: 4,
      name: "Dory",
      email: "dory@email.com",
      type: "NORMAL",
      age: 17
  },
  {
      id: 5,
      name: "Elsa",
      email: "elsa@email.com",
      type: "ADMIN",
      age: 17
  },
  {
      id: 6,
      name: "Fred",
      email: "fred@email.com",
      type: "ADMIN",
      age: 60
  }
]

const app = express()
app.use(express.json())
app.use(cors())

// Para testar se o servidor está tratando os endpoints corretamente
app.get("/ping", (req: Request, res: Response) => {
  res.status(200).send("pong!")
})

app.listen(3003, () => {
  console.log('Server is running at port 3003')
})


// a) Método get b) A entidade é o "/users"

//exercicio 2
app.get("/users" ,(req:Request, res:Response) => { 
  let errorCode = 400
  try {
    const type: string = req.query.type as string
    const result: User[] = users.filter((user) => { 
      return user.type === type
    })

    if(result.length === 0) { 
      errorCode = 400
      throw new Error("Tipo não cadastrado")
    }

    if(type) { 
    res.status(200).send(result)
    }

    } catch (error: any) {
    res.status(errorCode).send(error.message)
  }

})


//exercicio 3
// a) Continua sendo o get, já que é só recebimento. 
app.get("/users" ,(req:Request, res:Response) => { 
  let errorCode = 400
  try {
    const name: string = req.query.type as string
    const result: User[] = users.filter((user) => { 
      return user.name === name
    })

    if(result.length === 0) { 
      errorCode = 400
      throw new Error("Nome não cadastrado")
    }

    if(name) { 
    res.status(200).send(result)
    }

    } catch (error: any) {
    res.status(errorCode).send(error.message)
  }

})
 

// exercicio 1
app.get("/users" ,(req:Request, res:Response) => {
  try {
    res.status(200).send(users)
     } catch (error) {
    res.status(400).send("Erro")
      }

})

