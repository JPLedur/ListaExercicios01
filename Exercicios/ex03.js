function classicarNota(){
    const prompt = require('prompt-sync')()
    let nota = Number(prompt("Digite sua nota: "))

    if(Number.isNaN(nota)){
        console.error("Valor inválido. Digite novamente!")
        return classicarNota()
    }

    if(nota >= 7 ){
        console.log("Aprovado!")
    }
    if(nota < 7 && nota >= 3){
        console.log("Recuperação!")
    }
    if(nota < 3){
        console.log("Reprovado!")
    }
}

classicarNota()