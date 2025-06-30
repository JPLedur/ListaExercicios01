function validaHorario(horario){
    let valor = true
    let partes = horario.split(":")
    let horas = parseInt(partes[0])
    let minutossegundos = partes[1].split(".")
    let minutos = parseInt(minutossegundos[0])
    let segundos = parseInt(minutossegundos[1])

    if(horas >= 0 && horas <= 23){
        if(minutos >= 0 && minutos <= 59){
            if(segundos >= 0 && segundos <= 59){
                console.log(`${horas}.${minutos}.${segundos}`);
                console.log(valor)
            }
        }
    }
    else{
        console.log(`${horas}.${minutos}.${segundos}`);
        console.log(!valor)
    }
}

validaHorario("24:54.66")
validaHorario("66:17.42")
validaHorario("54:94.77")
validaHorario("33:32.12")
validaHorario("11:24.12")