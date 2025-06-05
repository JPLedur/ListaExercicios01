function imparPar(){
const prompt = require("prompt-sync")()
let numero = Number(prompt("Digite um número inteiro: "))

    if(Number.isNaN(numero) || !Number.isInteger(numero)){
        console.error("Valor inválido. Por favor, digite um número inteiro")
        return imparPar()
    }

    if(numero % 2 == 0){
        console.log("O número é par")
    }

    else {
         console.log("O número é impar")
    }
}

imparPar()

