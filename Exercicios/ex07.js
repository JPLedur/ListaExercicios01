function aluguelCarros(){
    const prompt = require("prompt-sync")()

    console.log("===== MENU INTERATIVO =====")
    console.log("1 - Carro Popular")
    console.log("2 - Carro de Luxo")
    
    let tipoCarro = Number(prompt("Qual tipo de carro você quer alugar? "))

    if(tipoCarro !== 1 && tipoCarro !== 2){
        console.log("Valor inválido. Tente novamente!!")
        aluguelCarros()
    }

    let dias = Number(prompt("Por quantos dias você quer alugar? "))

    if(Number.isNaN(dias)){
        console.log("Valor inválido. Tente novamente!!")
        aluguelCarros()
    }
    
    let kmRodados = Number(prompt("Quantos km vai rodar? "))

    if(Number.isNaN(kmRodados)){
        console.log("Valor inválido. Tente novamente!!")
        aluguelCarros()
    }

    if(tipoCarro === 1){
        let valor = kmRodados <= 200 ? (kmRodados * 0.2) + dias * 90 : (kmRodados * 0.1) + dias * 90 
        console.log(`Você vai pagar R$${valor} por ${dias} dias alugados e por andar ${kmRodados} km`)
    }
    
    else{
        let valor = kmRodados <= 200 ? (kmRodados * 0.3) + dias * 150 : (kmRodados * 0.25) + dias * 150 
        console.log(`Você vai pagar R$${valor} por ${dias} dias alugados e por andar ${kmRodados} km`)
    }
}

aluguelCarros()