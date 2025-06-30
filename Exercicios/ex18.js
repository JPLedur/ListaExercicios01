function registro(){
    const prompt = require("prompt-sync")()
    let funcionario = {
        nome: arguments, 
        salario: arguments, 
        cargo: arguments
    };

    funcionario.nome = prompt("Digite o seu nome: ")
    funcionario.salario = parseInt(prompt("Digite quanto você ganha por mês: "))
    funcionario.cargo = prompt("Digite o seu cargo: ")

    console.log(`O funcionário ${funcionario.nome} ganha R$${funcionario.salario} por mês e ocupa o cargo de ${funcionario.cargo}`)
}

registro()
