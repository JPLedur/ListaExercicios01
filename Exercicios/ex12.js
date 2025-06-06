function fibonacci(){
    let anterior = 0
    let atual = 1
    let prox = 0

    for(let i = 0; i < 10; i++){
        console.log(atual)
        prox = anterior + atual
        anterior = atual
        atual = prox  
    }
}
fibonacci()