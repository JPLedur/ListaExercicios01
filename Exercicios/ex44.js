let objeto = {
    nome: "Tiago",
    sobrenome: "Sgarabotto",
    idade: 17,
    hobbies: "Jogar bola",
    casas: 3,
    carro: 6,
    mãe: "Viva"
}

function contaStringsNoObjeto(obj){

    let contador = 0

    for(let chave in obj){
        if(typeof obj[chave] === "string"){
            contador++
        }
    }
    return contador
}

let quantidadeStrings = contaStringsNoObjeto(objeto)

console.log(quantidadeStrings)