function totalSalarioSexo(){
    const prompt = require("prompt-sync")()
    let salarioHomens = 0
    let salarioMulheres = 0
    let cond

    do{
        let sexo = prompt("Digite o seu sexo: ").toUpperCase()
        
        if(sexo != 'M' && sexo != 'F'){
            console.error("Valor inválido. Tente novamente!")
            continue 
        }
        let salario = Number(prompt("Digite o valor que você recebe: "))

        if(Number.isNaN(salario)){
            console.error("Valor inválido. Tente novamente!")
            continue
        }
        if( sexo === 'M'){
            salarioHomens += salario
        }
        else{
            salarioMulheres += salario
        }

        console.log("S - Sim")
        console.log("N - Não")
        cond = prompt("Você deseja continuar? ").toUpperCase()
    } while(cond == 'S')

    if(cond == "N"){
        console.log("Programa Finalizado!")
        console.log(`Salário dos Homens: ${salarioHomens}`)
        console.log(`Salário das Mulheres: ${salarioMulheres}`)   
    }
}
totalSalarioSexo()