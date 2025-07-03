function criaMatriz(){
    let matriz = []
    for(let i=1 ; i<8 ; i++){
        let linha = []
        for(let j=1 ; j<8 ; j++){
            if(i == j){
                linha.push(1)
            }
            else{
                linha.push(0)
            }
        }
        matriz.push(linha)
    }
    for(let i=1; i<matriz.length; i++){
            console.log(matriz[i])
    }
    console.table(matriz)
}

criaMatriz()