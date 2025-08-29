function criaVetores(){
    let valor = 0
    let vetorPar = Array()
    let vetorImpar = Array()

    for(let i=0;i<30;i++){
        valor = Math.floor(Math.random() * 100) + 1;
        
        if(valor % 2 == 0 ){
            vetorPar.push(valor)
            if(vetorPar.length === 5){
                console.log("Vetor de Pares Cheio: ", vetorPar)
                vetorPar = []
                }
            }
        else{
            vetorImpar.push(valor)
            if(vetorImpar.length === 5){
                console.log("Vetor Impar Cheio: ",vetorImpar)
                vetorImpar = []
            }
        }

    }
    if(vetorImpar > 0) console.log("Valores Impares restantes: ",vetorImpar)
    if(vetorPar> 0) console.log("Valores Pares Restantes: ",vetorPar)

}

criaVetores()