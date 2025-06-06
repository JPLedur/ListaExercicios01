function inverteVetor(){
    const prompt = require("prompt-sync")()
    let nomes = []

    for(let i = 6; i >= 0; i--){
        nomes[i] = prompt("Digite o nome de alguma pessoa: ")
    }
    console.log(nomes)
}
inverteVetor()