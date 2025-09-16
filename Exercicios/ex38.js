const prompt = require("prompt-sync")(); // <-- IMPORTAÇÃO CERTA

function geraNumeroAleatorio(max, min) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function criaVetor() {
    let v = [];
    for (let i = 0; i < 6; i++) {
        v.push(geraNumeroAleatorio(6, 1));
    }
    return v;
}

function escolhaFuncao(v) {
    let opcao = parseInt(prompt(
        "Digite a operação que deseja realizar:\n" +
        "1- Soma dos elementos\n" +
        "2- Produto dos elementos\n" +
        "3- Média dos elementos\n" +
        "4- Ordene os elementos em ordem crescente\n" +
        "5- Mostre o vetor.\n"
    ));

    switch (opcao) {
        case 1:
            let soma = v.reduce((acc, val) => acc + val, 0);
            console.log("A soma dos elementos é:", soma);
            break;

        case 2:
            let produto = v.reduce((acc, val) => acc * val, 1);
            console.log("O produto dos elementos é:", produto);
            break;

        case 3:
            let media = v.reduce((acc, val) => acc + val, 0) / v.length;
            console.log("A média dos elementos é:", media);
            break;

        case 4:
            let ordenado = [...v].sort((a, b) => a - b);
            console.log("Vetor em ordem crescente:", ordenado);
            break;

        case 5:
            console.log("Vetor:", v);
            break;

        default:
            console.log("Opção inválida!");
    }
}

let vetor = criaVetor();
escolhaFuncao(vetor);
