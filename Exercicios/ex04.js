function possivelTriangulo(){
    const prompt = require("prompt-sync")()

    let r1 = Number(prompt("Digite o tamanho da primeira reta: "))
    
    if(Number.isNaN(r1)){
        console.log("Valor inválido. Tente novamente!")
        possivelTriangulo()
    }

    let r2 = Number(prompt("Digite o tamanho da segunda reta: "))
    
    if(Number.isNaN(r2)){
        console.log("Valor inválido. Tente novamente!")
        possivelTriangulo()
    }

    let r3 = Number(prompt("Digite o tamanho da terceira reta: "))

    if(Number.isNaN(r3)){
        console.log("Valor inválido. Tente novamente!")
        possivelTriangulo()
    }

    if(r1 < r2 + r3 && r2 < r1 + r3 && r3 < r1 + r2){
        console.log("É possível formar um triângulo com esses valores!")
    }
    else{
        console.log("Impossível formar um triângulo!")
    }
}

possivelTriangulo()