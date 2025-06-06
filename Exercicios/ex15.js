function guardaPares(){
    const prompt = require("prompt-sync")()
    let vet = []

    for(let i = 0; i<10; i++){
        vet[i] = Number(prompt("Digite um numero: "))
        if(Number.isNaN(vet[i]) && !Number.isInteger(vet[i])){
            console.log("Digite outro nuúmero!")
            continue
        }
    }

    for(let i = 0; i < 10; i++){
        if(vet[i] % 2 == 0){
            console.log(`Numero: ${vet[i]} \n Posição: ${i+1}`)
        }
    }
}
guardaPares()