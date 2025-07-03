function mediaPop(pessoas){
    let mediaSalario = 0
    let mediaFilhos = 0
    let salarioPequeno = 0
    for(i=0; i<pessoas.dados.length;i++){
        let dado = pessoas.dados[i]

        mediaFilhos += dado.filhos
        mediaSalario += dado.salario
        
        if(dado.salario <= 350){
            salarioPequeno++
        }
    }
    console.log(`A media da População é de ${mediaFilhos/pessoas.dados.length} filhos por pessoa.`)
    console.log(`A media da População é de R$${mediaSalario/pessoas.dados.length} filhos por pessoa.`)
    console.log(`A porcentagem de pessoas que ganha até R$350 é de ${(salarioPequeno/pessoas.dados.length)*100}%.`)
}

const pessoas = {
    dados: [
        {filhos: 0, salario: 2000},
        {filhos: 1, salario: 540},
        {filhos: 0, salario: 20},
        {filhos: 4, salario: 520},
        {filhos: 0, salario: 1700},
        {filhos: 3, salario: 200},
        {filhos: 2, salario: 50},
        {filhos: 1, salario: 300},
    ]
}

mediaPop(pessoas)