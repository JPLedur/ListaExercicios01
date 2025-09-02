function geraNumeroAleatorio(max,min){
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function criaGabarito(){
    let vetor = []

    for(let i=0; i<20; i++){
        vetor.push(geraNumeroAleatorio(2,1))
    }
    console.log("Gabarito:", vetor)
    return vetor
}

function criaRespostas(vetor){
    for(let i=0;i<50;i++){
        let numeroAluno = i + 1
        let acertos = 0
        let respostas = []

        for(let j=0; j<20; j++){
            respostas.push(geraNumeroAleatorio(2,1))
            if(respostas[j] === vetor[j]){
                acertos++
            }
        }
        console.log(`Cartão ${numeroAluno} → ${acertos} acertos`);
        if(acertos === 20){
            console.log("Parabens!! Você gabaritou a prova!!")
        }
    }
}

let gabarito = criaGabarito()
criaRespostas(gabarito)