function fibonacci(){
    let vet = []

    let anterior = 0
    let atual = 1
    let prox = 0

    for(let i = 0; i < 15; i++){
        vet[i] = anterior
        
        prox = atual + anterior
        anterior = atual
        atual = prox
    }
    console.log(vet)
}
fibonacci()
