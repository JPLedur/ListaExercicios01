function criaMatriz(){
    let matriz = [
        [1,2,3,4,5],
        [1,2,3,4,5],
        [1,2,3,4,5],
        [1,2,3,4,5],
        [1,2,3,4,5]
    ];

    let SL = new Array(5).fill(0)
    let SC = new Array(5).fill(0)

    SL = somaLinha(matriz,SL)
    SC = somaColuna(matriz,SC)

    console.log(`A soma das Linha é ${SL}`)
    console.log(`A soma das Coluna é ${SC}`)
}

function somaLinha(matriz,SL){
    
    for(let i=0; i<5; i++){
        for(let j=0;j<5;j++){
            SL[i] += matriz[i][j]
        }
    }

    return SL
}

function somaColuna(matriz,SC){
    
    for(let i=0; i<5; i++){
        for(let j=0;j<5;j++){
            SC[j] += matriz[i][j]
        }
    }

    return SC
}

criaMatriz()