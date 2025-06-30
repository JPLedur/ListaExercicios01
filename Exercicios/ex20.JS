function geraFuncionarios(){
    const empresa = {
        funcionarios: []
    };

    for (let i = 1; i <= 80; i++) {
        empresa.funcionarios.push({
        nome: `Funcionário ${i}`,
        matricula: Math.floor(Math.random() * (500 - 50) + 50),
        salario: Math.floor(Math.random() * ((6000 - 1000) / 10 + 1)) * 10 + 1000
        });
    }

//console.log(empresa)
calculaSalario(empresa)
console.log(empresa)
}

function calculaSalario(empresa){
    
    for(let i = 0; i < empresa.funcionarios.length ; i++){
        let funcionario = empresa.funcionarios[i]
        let desconto = (funcionario.salario * 0.12).toFixed(2)
        let liquido = (funcionario.salario - desconto).toFixed(2)

        funcionario.inss = desconto
        funcionario.liquido = liquido
        
        console.log(funcionario)
    }
}

geraFuncionarios()