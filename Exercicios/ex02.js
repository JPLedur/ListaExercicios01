function multarCarro(){
    const prompt = require("prompt-sync")()

    let velocidadeCarro = Number(prompt("Qual a velocidade do seu carro? "))

    if(Number.isNaN(velocidadeCarro)){
        console.error("Valor inválido. Tente novamente!")
        return velocidadeCarro()
    }

    if(velocidadeCarro > 80){
        let valorMulta = (velocidadeCarro - 80) * 5

        console.log(`O usuário foi multado em R$${valorMulta} por estar a ${velocidadeCarro}km/h`)
    }
    else{
        console.log("Parabéns você esta numa velocidade aceitável!")
    }
}

multarCarro()