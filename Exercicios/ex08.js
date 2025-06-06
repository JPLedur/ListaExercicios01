function pontosSaudaveis(){
    const prompt = require("prompt-sync")()

    let horasExercitadas = Number(prompt("Quantas horas você fez de exercício esse mês? "))

    if(Number.isNaN(horasExercitadas)){
        console.log("Valor inválido. Tente novamente!")
        return pontosSaudaveis()
    }

    if(horasExercitadas < 10){
        let valor = horasExercitadas * 2 * 0.05
        console.log(`Você vai receber R$${valor} por ${horasExercitadas * 2} pontos`)
    }
    else if(horasExercitadas >= 10 && horasExercitadas < 20){
        let valor = horasExercitadas * 5 * 0.05
        console.log(`Você vai receber R$${valor} por ${horasExercitadas * 5} pontos`)
    }
    else if(horasExercitadas >= 20){
        let valor = horasExercitadas * 10 * 0.05
        console.log(`Você vai receber R$${valor} por ${horasExercitadas * 10} pontos`)
    }
}
pontosSaudaveis()