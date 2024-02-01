class Hero{
    //Cria contrutor para a classe
    constructor(nome, idade, tipo){
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo
    }

    // A função atacar verifica qual o tipo tem o herói e retorna uma mensagem.
    atacar(){
        const ataques = ['magia','espada','artes marciais','shiriken']

        if (this.tipo == 'mago'){
            return `o ${this.tipo} atacou usando ${ataques[0]}`
        }else if(this.tipo == 'guerreiro'){
            return `o ${this.tipo} atacou usando ${ataques[1]}`
        }else if(this.tipo == 'monge'){
            return `o ${this.tipo} atacou usando ${ataques[2]}`
        }else if(this.tipo == 'ninja'){
            return `o ${this.tipo} atacou usando ${ataques[3]}`
        }
    }

    defender(){
        const defesas = ['magia','escudo','chave de braço','se esquivando']

        if (this.tipo == 'mago'){
            return `o ${this.tipo} defendeu usando ${defesas[0]}`
        }else if(this.tipo == 'guerreiro'){
            return `o ${this.tipo} defendeu usando ${defesas[1]}`
        }else if(this.tipo == 'monge'){
            return `o ${this.tipo} defendeu usando ${defesas[2]}`
        }else if(this.tipo == 'ninja'){
            return `o ${this.tipo} defendeu usando ${defesas[3]}`
        }
    }
}
//----------------------------------------------------------------------------------

//-------------------------------------------------------------------------------------
//Cria instâncias para testar os objetos
const h1 = new Hero('Darvin', 42, 'mago')
const h2 = new Hero('Tesla', 42, 'guerreiro')
const h3 = new Hero('Turin', 42, 'monge')
const h4 = new Hero('Edson', 42, 'ninja')

//Testa os objetos retornando no console a mensagem de saída.
//Testa ataques
console.log(h1.atacar())
console.log(h2.atacar())
console.log(h3.atacar())
console.log(h4.atacar())
console.log('')

//Testa defesas
console.log(h1.defender())
console.log(h2.defender())
console.log(h3.defender())
console.log(h4.defender())
//-----------------------------------------------------------------------------------------