function recebeTam(){
    const prompt = require("prompt-sync")()

    let tamanho = Number(prompt("Digite o tamanho de sua matriz: "))

    if(Number.isNaN(tamanho) && !Number.isInteger(tamanho)){
        console.log("Número inválido! Digite um número inteiro!")
        recebeTam()
    }

    else{
        fabricaMatriz(tamanho)
    }
}

function fabricaMatriz(n){
    let matriz = []
    for(let i=0; i<n+1; i++){
        let linha = []
        for(let j=0; j<n+1; j++){
            if(i == j){
                linha.push(1)
            }
            else{
                linha.push(0)
            }
        }
        matriz.push(linha)
    }

    console.table(matriz)
}

recebeTam()