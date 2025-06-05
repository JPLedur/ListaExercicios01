function imc(){
    const prompt = require("prompt-sync")()

    let altura = Number(prompt("Digite o valor da sua altura (170 cm): "))
    if(Number.isNaN(altura)){
        console.error("Valor inválido. Tente novamente!")
        return imc()
    }

    let peso = Number(prompt("Digite o valor do seu peso (80 kg): "))
    if(Number.isNaN(peso)){
        console.error("Valor inválido. Tente novamente!")
        return imc()
    }
    altura = altura * 0.01
    let indice = peso / (altura * altura)

    if(indice < 18.5){
        console.log("Você está abaixo do peso!")
    }

    else if(indice >= 18.5 && indice <= 24.9){
        console.log("Você está saudável!")
    }

    else if(indice >= 25 && indice <= 29.9){
        console.log("Você está com sobrepeso (Obesidade Grau 1) !")
    }

    else if(indice >= 30 && indice <= 39.9){
        console.log("Você está com obesidade (Obesidade Grau 2) !")
    }

    else if(indice >= 40){
        console.log("Você está com obesidade grave (Obesidade Grau 3) !")
    }
}

imc()