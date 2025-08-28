function leMatriz(){
    let matriz = [
        [1 , 2 , 3 , 4 , 5 , 6],
        [1 , 2 , 3 , 4 , 5 , 6],
        [1 , 2 , 3 , 4 , 5 , 6],
        [1 , 2 , 3 , 4 , 5 , 6],
        [1 , 2 , 3 , 4 , 5 , 6],
        [1 , 2 , 3 , 4 , 5 , 6],
    ]
    
    let valorA = 2

    multiplicaMatriz(matriz,valorA)
}

function multiplicaMatriz(matrizB,valorA){
    let vetor = new Array(36);
    for(let i=0; i<6; i++){
        for(let j=0; j<6; j++){
            vetor[i * 6 + j] = matrizB[i][j] * valorA
        }
    }
    console.log(vetor)
}

leMatriz()
