let dados = {
    quantidade: 23,
    base: "Marinha",
    soldados: ["João","Ramon","Hércules"],
    armas: ["Fuzil","AK47","Desert Eagle"]
}

function validaArray(obj){

    let resultado = {}

    for(let chave in obj){
        if(Array.isArray(obj[chave])){
            resultado[chave] = obj[chave]
        }
    }
    return resultado
}

let apenasArrays = validaArray(dados)
console.log(apenasArrays)