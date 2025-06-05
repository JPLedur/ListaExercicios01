function viagem(){
    const prompt = require("prompt-sync")()
    let distancia = Number(prompt("Qual é a distância que você vai percorrer (Em quilometros)? "))

    if(Number.isNaN(distancia)){
        console.log("Valor inválido. Tente novamente!")
        return viagem()
    }

    let preco = distancia <= 200 ? distancia * 0.5 : distancia * 0.45
    console.log(`O valor a se pagar vai ser R$${preco}`)
}

viagem()