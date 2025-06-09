/*
let numeros = new Set()

function geraVetorAleatorio(){

    let n = Math.floor(Math.random()*1000) + 1
    if(!numeros.has(n)){
        numeros.add(n)
    }
    
    if(numeros.size === 20){
        let vet = Array.from(numeros)
        ordenarValores(vet)
    }
    else{
        setTimeout(geraVetorAleatorio,100)
    }
}
*/

function geraVetorAleatorio(){
    let vet= []

    for (let i = 0 ; i < 20; i++){
        vet[i] = Math.floor(Math.random() * 1000) + 1
    }
    ordenarValores(vet)
}

function ordenarValores(vet){
    let aux
        for(let i = 0; i < vet.length; i++){
        for(j = 0; j < vet.length ; j++){
            if(vet[j] > vet[j+1]){
                aux = vet[j]
                vet[j] = vet[j+1]
                vet[j+1]= aux
            }
        }
    }
    
    console.table(vet)
}


geraVetorAleatorio()