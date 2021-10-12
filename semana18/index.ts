
//a Quando você inicia uma nova instância (atribuindo o "new {{nome da classe}}" a uma variável e passando os argumentos) o construtor é iniciado definindo os valores para a instancia.
//b Uma única vez;
//c Conseguimos apenas se tivermos getters como métodos da mesma.
class UserAccount {
    private cpf: string;
    private name: string;
    private age: number;
    private balance: number = 0;
    private transactions: Transaction[] = [];
  
    getCPF():string {
        return this.cpf
    }
    getName():string {
        return this.name
    }
    getAge():number {
        return this.age
    }
  
    constructor(
       cpf: string,
       name: string,
       age: number,
    ) {
       console.log("Chamando o construtor da classe UserAccount")
       this.cpf = cpf;
       this.name = name;
       this.age = age;
    }
  
  }
  
  const user = new UserAccount("11588400000", "Gus", 17)
  console.log(user)
  
  
  class Transaction{ 
    private description: string;
    private  value: number;
    private  date: string
  
    getDescription(): string {
        return this.description
    }
      getValue(): number {
        return this.value
    }
    getDate(): string {
        return this.date
    }
  
  
      constructor(description: string,  value: number, date: string) { 
          this.description = description,
          this.value = value,
          this.date = date,
  
      }
  }
    
  
  class Bank {
    private accounts: UserAccount[];
  
    getAccounts() {
        return this.accounts
    }
  
    setAccounts(newAccounts: UserAccount[]) { 
        return this.accounts = newAccounts
    }
  
    constructor(accounts: UserAccount[]) {
      this.accounts = accounts;
    }
  
  }