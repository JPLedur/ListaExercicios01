function aleatorio(){
    const prompt = require('prompt-sync')()

    console.log("========== Menu Interativo ==========")
    console.log("1 - Numero aleatório entre 1 e 1000.")
    console.log("2 - Contar até 10 com delay.")
    console.log("3 - Converter de Celsius para Fahrenheit.")
    let escolha = Number(prompt("Digite o que voce quer: "))


    switch(escolha){    
        
        case 1: 
            const numero = Math.floor(Math.random() * 1000) + 1
            console.log(`Número Sorteado: ${numero}`)
            break

        case 2:
            console.log("Contando até 10 com delay...")
            for(let i=1; i<=10 ; i++){
                setTimeout(() =>{
                    console.log(i)
                    if(i === 10) console.log("Contagem Finalizada!")
                }, i * 10000)
            }
            break
        
        case 3:
            const temperatura = Number(prompt("Digite o valor da temperatura atual (em Celsius):"))
            if(Number.isNaN(temperatura)){
                console.error("Valor inválido. Digite novamente!")
                break
            }
            let f = (temperatura * 9/5) + 32
            console.log(`O valor de temperatura Fahrenheit é de ${f}°F `)
            break

        default:
            console.error("Opção inválida!")
    }
}

aleatorio()