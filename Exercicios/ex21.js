function pesoIdeal(pessoas){
    for(i = 0; i <pessoas.gente.length; i++){
        let pessoa = pessoas.gente[i]
        let peso = 0
        if(pessoa.sexo == "masculino"){
            peso = ((72.7 * pessoa.altura) - 58).toFixed(2)
        }
        else if(pessoa.sexo == "feminino"){
            peso = ((62.1 * pessoa.altura) - 44.7).toFixed(2)
        }

        console.log(`${pessoa.nome} deve ter ${peso} quilos para peso ideal.`)
    }
}

const pessoas = {
    gente: [
        {nome:"Raquel", altura: 1.67, sexo: "feminino"},
        {nome:"João", altura: 1.83, sexo: "masculino"},
        {nome:"Milena", altura: 1.66, sexo: "feminino"},
    ]
};

pesoIdeal(pessoas)