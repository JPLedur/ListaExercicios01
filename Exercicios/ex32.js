function criaMatriz(){
    let matriz = [
        [1,2,3,4,5,6,7,8,9,10,11,12,13],
        [1,2,3,4,5,6,7,8,9,10,11,12,13],
        [1,2,3,4,5,6,7,8,9,10,11,12,13],
        [1,2,3,4,5,6,7,8,9,10,11,12,13],
        [1,2,3,4,5,6,7,8,9,10,11,12,13],
        [1,2,3,4,5,6,7,8,9,10,11,12,13],
        [1,2,3,4,5,6,7,8,9,10,11,12,13],
        [1,2,3,4,5,6,7,8,9,10,11,12,13],
        [1,2,3,4,5,6,7,8,9,10,11,12,13],
        [1,2,3,4,5,6,7,8,9,10,11,12,13],
        [1,2,3,4,5,6,7,8,9,10,11,12,13],
        [1,2,3,4,5,6,7,8,9,10,11,12,13],
    ]

    // cria matriz 12x13 cheia de zeros
    let retorno = Array.from({ length: 12 }, () => Array(13).fill(0))

    retorno = retornoMatriz(matriz, retorno)

    console.table(matriz)
    console.table(retorno)
}

function retornoMatriz(matriz,retorno){
    let linhas = matriz.length
    let colunas = matriz[0].length

    let maiorValorLinha = matriz.map(linha => Math.max(...linha))


    for(let i=0; i<linhas; i++){
        for(let j=0; j<colunas; j++){
            retorno[i][j] = (matriz[i][j] / maiorValorLinha[i]).toFixed(2)
        }
    }

    return retorno
}

criaMatriz()