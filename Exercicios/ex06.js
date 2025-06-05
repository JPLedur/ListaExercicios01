function acerteNumero(){
    const prompt = require("prompt-sync")()
    let maxTentativas = 20
    console.log("=== Jogo: Acerte o Número ===");
    console.log("Tente adivinhar o número sorteado de 1 a 100!");
    console.log(`Você tem ${maxTentativas} tentativas.\n`);

    const sorteio = Math.floor(Math.random() * 100) + 1
    for(let i=1; i<=maxTentativas; i++){
        let numero = Number(prompt("Digite seu palpite:  "))
        
        if(Number.isNaN(numero) || !Number.isInteger(numero)){
            console.log(" ❌ Digite um numero inteiro!!")
            console.log(`-1 Tentativa, você tem mais ${maxTentativas-i}`)
        }

        if(numero > sorteio){
            console.log(`🔻 Número é menor que ${numero}`)
            console.log(`-1 Tentativa, você tem mais ${maxTentativas-i}`)
        }
        else if(numero < sorteio){
            console.log(`🔺 Numero é maior que ${numero}`)
            console.log(`-1 Tentativa, você tem mais ${maxTentativas-i}`)
        }
        else{
            console.log("🎉  Parabéns, você acertou número!!")
            console.log(`Número de tentativas: ${i}`)
            break
        }
    }
}
acerteNumero()