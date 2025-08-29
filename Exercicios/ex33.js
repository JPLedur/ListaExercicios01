function criaMatriz(){
    let matriz = [
        [1,2,3],
        [1,2,3],
        [1,2,3]
    ];

    let matrizDiagonalPrincipal = Array.from({length:3}, () => Array(3))
    let diagonalSecundaria = 0

    diagonalSecundaria = calculaMediaDiagonal(matriz)
    matrizDiagonalPrincipal = tansformaDiagonalPrincipal(matriz,matrizDiagonalPrincipal,diagonalSecundaria)

    console.table(matriz)
    console.table(matrizDiagonalPrincipal)
}

function calculaMediaDiagonal(matriz){
    let valoresDiagonalSecundaria = new Array(3).fill(0)
    let n = 3
    let soma = 0 
    for(let i=0;i<3;i++){
        for(let j=0;j<3;j++){
            if(i + j == n - 1){
                valoresDiagonalSecundaria[i] = matriz[i][j]
            }
        }
    }

    for(let i=0;i<3;i++){
        soma += valoresDiagonalSecundaria[i]
    }

    return (soma/3)
}

function tansformaDiagonalPrincipal(matriz,matrizDiagonalPrincipal,diagonalSecundaria){
    for(let i=0;i<3;i++){
        for(let j=0;j<3;j++){
            if(i==j){
                matrizDiagonalPrincipal[i][j] = (matriz[i][j] * diagonalSecundaria)
            }
            else{
                matrizDiagonalPrincipal[i][j] = matriz[i][j]
            }
        }
    }
    return matrizDiagonalPrincipal
}

criaMatriz()