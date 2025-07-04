function criaMatriz(){
    let matriz = []
    let valor = 0

    for(let i=0; i<15; i++){
        let linha = []
        for(let j=0; j<20; j++){
            valor = Math.floor(Math.random()*10) + 1
            linha.push(valor)
        }
        matriz.push(linha)
    }

    somaMatriz(matriz)
}

function somaMatriz(matriz){
    console.table(matriz)

    let soma = []
    for(let i=0; i<15; i++){
        let valor = 0
        for(let j=0; j<20; j++){
            valor += matriz[i][j]
        }
        soma.push(valor)
    }
    console.table(soma)
}

criaMatriz()