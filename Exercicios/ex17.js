function lePessoas(){
    const prompt = require("prompt-sync")()
    const nomes = []
    const idades = []
    let quantidade = parseInt(prompt("Quantas pessoas você quer cadastrar? "))

    for(let i = 0; i < quantidade; i++){
        let nome = prompt(`Digite o nome da ${i + 1} pessoa. `)
        let idade = parseInt(prompt(`Digite a idade de ${nome}. `))

        nomes.push(nome)
        idades.push(idade)
    }

    for(let i = 0; i<quantidade;i++){
        if(idades[i] < 18){
            console.log(nomes[i])
            console.log(idades[i])
        }
    }
}

lePessoas()



//const p =[
//    {nome: "João",idade: 24},
//    {nome: "Paula",idade: 57},
//    {nome: "José",idade: 17},
//    {nome: "Paulo",idade: 62},
//    {nome: "Livia",idade: 2},
//    {nome: "André",idade: 12},
//    {nome: "Jesus",idade: 2000},
//    {nome: "Lais",idade: 27},
//    {nome: "Jacob",idade: 6},
//]