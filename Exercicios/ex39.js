function geraNumeroAleatorio(max,min){
    return Math.floor(Math.random () * (max - min + 1)) + min
}

function criaVetor(){
    let v  = []

    for(let i=0; i<100; i++){
        v.push(geraNumeroAleatorio(5,-2))
    }
    console.log("Vetor\n", v)

    let vSimplificado = v.filter(num => num >= 0)

    console.log("Vetor Simplificado",vSimplificado)
}

let vetor = criaVetor()