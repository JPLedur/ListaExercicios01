function classificaIdade(){
    const prompt= require("prompt-sync")()
    let idade = Number(prompt("Digite sua idade: "))

    if(Number.isNaN(idade) || !Number.isInteger(idade)){
        console.error("Valor inválidade. Tente novamente.")
        return classificaIdade
    }

    if(idade < 12){
        console.log("Criança")
    }
    else if(idade >= 12 && idade < 18){
        console.log("Adolescente")
    }
    else if(idade >= 18 && idade < 65){
        console.log("Adulto")
    }
    else if(idade >= 65){
        console.log("Idoso")
    }
}

classificaIdade()