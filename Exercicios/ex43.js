let dadosMoveis = {
    compartilhamento:3,
    usoGeral: ["Paula", "Ana","Jorge"]
}

let dadosRoteaveis = {
    aberto: 26,
    usado:4,
    usoGeral: ["João", "Milena","Linda","Agnes","Priscilla"]
}

function combinaObjetos(obj1,obj2){
    return Object.assign({}, obj1, obj2);
}

let objCombinado = combinaObjetos(dadosMoveis,dadosRoteaveis)

console.log(objCombinado)