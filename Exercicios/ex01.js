function reducaoVida(){
    const prompt = require("prompt-sync")()
    let numeroCigarros = Number(prompt("Quantos cigarros você fuma por dia? "))
    let anosFumados = Number(prompt("A quantos anos você fuma? "))

    let tempoPerdido = (numeroCigarros * 60 * anosFumados * 364) / 86400

    console.log(`Você perderá ${tempoPerdido} dias.`)
}
reducaoVida()