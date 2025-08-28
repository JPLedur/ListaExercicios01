function criaMatriz(){
    let matriz = [
        [1,2,3,4,5,6,7,8,9,10],
        [1,2,3,4,5,6,7,8,9,10],
        [1,2,3,4,5,6,7,8,9,10],
        [1,2,3,4,5,6,7,8,9,10],
        [1,2,3,4,5,6,7,8,9,10],
        [1,2,3,4,5,6,7,8,9,10],
        [1,2,3,4,5,6,7,8,9,10],
        [1,2,3,4,5,6,7,8,9,10],
        [1,2,3,4,5,6,7,8,9,10],
        [1,2,3,4,5,6,7,8,9,10]
    ]
    
    let somaAcima = 0
    let somaAbaixo = 0

    somaAcima = calculaSomaAcima(matriz,somaAcima)
    somaAbaixo = calculaSomaAbaixo(matriz,somaAbaixo)

    console.table(matriz)

    console.log(`A Soma Acima da Diagonal Principal foi de ${somaAcima}`)
    console.log(`A Soma Abaixo da Diagonal Principal foi de ${somaAbaixo}`)

}

function calculaSomaAcima(matriz,somaAcima){    
    for(let i=0; i<9; i++){
        for(let j=1; j<10;j++){
                if(i !== j && j > i){
                somaAcima += matriz[i][j]
            }
        }
    }
    return somaAcima
}

function calculaSomaAbaixo(matriz,somaAbaixo){
    for(let i=0; i<10; i++){
        for(j=0;j<10;j++){
            if(i !== j && j < i){
                somaAbaixo += matriz[i][j]
            }
        }
    }
    return somaAbaixo
}

criaMatriz()