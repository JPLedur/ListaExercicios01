function geraNumeroAleatorio(max,min){
    return Math.floor(Math.random () * (max - min + 1)) + min
}

function criaAposta(){
    let aposta = []

    for(let i=0; i<5; i++){
        aposta.push(geraNumeroAleatorio(60,1))
    }
    return aposta
}

function criaLoteria(){
    let cartoes = []

    for(let i=0; i<100; i++){
        cartoes.push(criaAposta())
    }

    let resultado = criaAposta()
    return {cartoes,resultado}
}

function existeGanhador(cartoes,resultado){
    for(let i=0; i<cartoes.length; i++ ){
        let acertos = cartoes[i].filter(num => resultado.includes(num)).length
            if(acertos === 5){
                console.log("Cartão vencedor:",cartoes[i])
                console.log("Parabens, você ganhou!!!")
                return
            }
    }
    console.log("Nenhum vencedor!")
}

let {cartoes, resultado} = criaLoteria()

console.log("Resultado oficial:", resultado);
console.log("Todas as apostas:", cartoes);

existeGanhador(cartoes,resultado)