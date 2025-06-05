function jokenpo(){
    const prompt = require("prompt-sync")()

    console.log("========= MENU INTERATIVO =========")
    console.log("Escolha uma das armas: ")
    console.log("1 - Pedra")
    console.log("2 - Papel")
    console.log("3 - Tesoura")
    let bot = Math.floor(Math.random() * 3) + 1
    console.log(`O bot escolheu ${bot}`)
    let arma = Number(prompt("Escolha sua arma (1 ou 2 ou 3): "))
    
    if(arma === 1 && bot === 3 || arma === 2 && bot === 1 || arma === 3 && bot === 2){
        console.log("Você ganhou parabéns!!!!")
    }
    else if(arma === bot){
        console.log("Você empatou com o bot!!")
    }
    else{
        console.log("Você perdeu para o bot! HAHAHAHAHAHAH")
    }
}

jokenpo()