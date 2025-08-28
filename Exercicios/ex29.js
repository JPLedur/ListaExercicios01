function criaMatriz(){
    let matriz = [
        [3,2,3,4,5],
        [1,2,3,4,5],
        [1,2,8,4,5],
        [1,2,3,6,5],
        [1,2,3,4,1]
    ]

    let somaTotal = 0, somaLinha = 0, somaColuna = 0, somaDiagonalPrincipal = 0

    somaTotal = calculaSomaTotal(matriz, somaTotal)
    somaColuna = calculaSomaColuna(matriz, somaColuna)
    somaLinha = calculaSomaLinha(matriz, somaLinha)
    somaDiagonalPrincipal = calculaSomaDiagonal(matriz, somaDiagonalPrincipal)

    console.log(`Soma Total: ${somaTotal}`)
    console.log(`Soma Linha: ${somaLinha}`)
    console.log(`Soma Coluna: ${somaColuna}`)
    console.log(`Soma Diagonal Principal: ${somaDiagonalPrincipal}`)

}

function calculaSomaTotal(matriz,somaTotal){
    for(let i=0;i<5;i++){
        for(let j=0; j<5;j++){
            somaTotal += matriz[i][j]
        }
    }
    return somaTotal
}


function calculaSomaColuna(matriz,somaColuna){
    for(let i=0;i<5;i++){
        somaColuna += matriz[i][1]
    }
    return somaColuna
}


function calculaSomaLinha(matriz,somaLinha){
    for(let i=0;i<5;i++){
        somaLinha += matriz[3][i]
    }
    return somaLinha
}


function calculaSomaDiagonal(matriz,somaDiagonalPrincipal){
    for(let i=0;i<5;i++){
        for(let j=0; j<5;j++){
            if(i == j){
                somaDiagonalPrincipal += matriz[i][j]
            }
        }
    }
    return somaDiagonalPrincipal
}

criaMatriz()