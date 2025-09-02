function geraNumeroAleatorio(max,min){
    return Math.floor(Math.random() * (max - min + 1)+ min)
}

function criaGabarito(){
    let vetor = []

    for(let i=0; i<13; i++){
        vetor.push(geraNumeroAleatorio(1,4))
    }

    console.log("Gabarito Oficial: ", vetor)
    return vetor
}

function criaApostadores(vetor){
    for(let i=0;i<100;i++){
        let acertos = 0
        let numeroCartao = 1000 + i
        let respostas = []
        for(let j=0; j<13; j++){
            respostas.push(geraNumeroAleatorio(1,4))
            if(respostas[j] == vetor[j]){
                acertos++
            }
        }
        console.log(`Cartão ${numeroCartao} → ${acertos} acertos`);
        if(acertos === 13){
            console.log("Parabens!! Você acertou todas os números!!")
        }
    }
}

let gabarito = criaGabarito()
criaApostadores(gabarito)