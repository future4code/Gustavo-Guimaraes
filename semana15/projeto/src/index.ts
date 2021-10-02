import express, {Express, Request, Response} from 'express'
import cors from 'cors'
import { AddressInfo } from "net";
import { User } from './types';
import { usuarios } from './data';

const app: Express = express();

app.use(express.json());
app.use(cors());







app.post("/users", (req:Request, res:Response) => { 
    let errorCode = 400;

    try {

        const {nome, cpf, nascimentoAsString} = req.body

        const [dia, mes, ano] = nascimentoAsString.split("/")

        const nascimento: Date = new Date(`${ano}-${mes}-${dia}` )

        const age:number = ((Date.now() - nascimento.getTime())/ 1000 / 60 / 60/ 24 / 365)

        const newUser: User = {
            nome: nome,
            cpf: cpf, 
            nascimento: nascimento,
            saldo: 0,
            extrato: []
        }    

        const usuarioExistente = usuarios.find((usuario) => { 
            return usuario.cpf === newUser.cpf
        } )
        
        if (usuarioExistente) { 
            errorCode = 406
            throw new Error("Usuário já cadastrado")
        }
       
       if(age < 18 ) { 
           res.statusCode = 406
           throw new Error("Idade precisa ser maior que 18 anos.")
       }

        usuarios.push(newUser)

        res.status(201).send("Usuário cadastrado com sucesso")
        
    } catch (error: any) {
       res.status(errorCode).send(error.message)
    }

})

app.get("/users", (req:Request, res:Response) => { 
    try {
        if(!usuarios.length) {
            res.statusCode = 404
            throw new Error("Nenhuma conta encontrada")
        }

        res.status(200).send(usuarios)

    } catch (error: any) {
        res.send(error.message)
    }

})



const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
       const address = server.address() as AddressInfo;
       console.log(`Server is running in http://localhost: ${address.port}`);
    } else {
       console.error(`Failure upon starting server.`);
    }
});