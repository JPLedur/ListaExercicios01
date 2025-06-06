function progressaoAritmetica(){
    const prompt = require("prompt-sync")()

    let primeiroTermo = Number(prompt("Qual é o primeiro termo que quer apresentar? "))
    let PA = Number(prompt("Digite o valor da progressão aritmética: "))

    let somaTotal = 0
    for( let i = 0; i < 10; i++){
        console.log(primeiroTermo)
        primeiroTermo += PA
        somaTotal += primeiroTermo
    }
    console.log(`A soma total é ${somaTotal}`)
}
progressaoAritmetica()