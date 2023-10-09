//Desafio 3 - Classes de um jogo

class jogoDeHeroi{
    constructor(nome, idade, tipo){
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
        
        if (this.tipo == "mago"){ 
            this.modoDeAtaque = "magia";
        }else if(this.tipo == "guerreiro"){
           this.modoDeAtaque = "espada";
        }else if(this.tipo == "monge"){
           this.modoDeAtaque = "artes marciais";
        }else if(this.tipo == "ninja"){
           this.modoDeAtaque = "shuriken";
        }  
    }  

    escrever(){
        console.log(`O ${this.tipo} atacou usando ${this.modoDeAtaque}`)
    }
      
}

let Jujutsu = new jogoDeHeroi("Jujutsu","25","mago");
Jujutsu.escrever();

let Arisa = new jogoDeHeroi("Arisa","18","guerreiro");
Arisa.escrever();

let Dito = new jogoDeHeroi("Dito","30","monge");
Dito.escrever();