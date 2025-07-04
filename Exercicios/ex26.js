function criaMatriz(){
    let matrizA = []
    let matrizB = []
    let n = 2
    
    for(let i=0; i<3; i++){
        let linhaA = []
        for(let j=0; j<n; j++){
            let valorA = Math.floor(Math.random() * 10)
            linhaA.push(valorA)
        }
        matrizA.push(linhaA)
    }

    for(let i=0; i<n; i++){
        let linhaB = []
        for(let j=0; j<5; j++){
            let valorB = Math.floor(Math.random() * 10)
            linhaB.push(valorB)
        }
        matrizB.push(linhaB)
    }

    produtoMatriz(matrizA,matrizB)
}

function produtoMatriz(matrizA,matrizB){
    console.table(matrizA)
    console.table(matrizB)
    let matrizC = []

    for(let i=0; i<3; i++){
        let linha = []
        for(let j=0; j<5; j++){
            let soma = 0
            for(let k=0; k<2; k++){
                soma += matrizA[i][k] * matrizB[k][j]
            }
            linha.push(soma)  
        }
        matrizC.push(linha)
    }
    console.table(matrizC)
}

criaMatriz()