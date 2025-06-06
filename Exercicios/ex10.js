function valoresMexidos(){
    const prompt = require("prompt-sync")()

    let somaTotal = 0
    let menorValor
    let media = 0
    let qtdValoresPares = 0
    let contador = 0
    let continuar

    do {
        let numero = Number(prompt("Digite um valor: "))

        if(Number.isNaN(numero)){
            console.log("Valor inválido. Tente novamente!")
            continue
        }
        contador++
        somaTotal += numero
        media = somaTotal / contador
        
        if(numero % 2 == 0){
            qtdValoresPares++
        }
        
        if(menorValor === undefined || numero < menorValor){
            menorValor = numero
        }

        console.log("S - Sim")
        console.log("N - Não")
        continuar = prompt("Você deseja continuar? ").toUpperCase()
        
    }while(continuar == "S")

    if(continuar == "N"){
        console.log("Programa Finalizado!")
        console.log(`Soma Total: ${somaTotal}`)
        console.log(`O menor valor é: ${menorValor}`)   
        console.log(`A media é: ${media}`)   
        console.log(`A quantidade de valores pares é: ${qtdValoresPares}`)   
    }
}
valoresMexidos()