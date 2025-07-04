function criaMatriz(){
    const matriz = []
    const c = []
    let valor = 0
    for(let i=0; i<6; i++){
        let linha =[]
        let negativos = 0
        for(let j=0; j<8; j++){
            valor = Math.floor(Math.random() * 32) - 10
            linha.push(valor)
            if(valor < 0){
                negativos++
                c.push(valor)
            }
        }
        c.push(negativos)
        matriz.push(linha)
    }
    console.table(matriz)
    console.table(c)
}

criaMatriz()