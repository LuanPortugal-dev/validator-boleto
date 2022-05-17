export function validatorAmount(value: any){
    const valor = parseFloat(value.substring(value.length - 10, value.length)).toString() // uso parseFloat parar retirar os zeros e toString para converter novamente em string
    if (valor.length == 2) { // verifica se linha tem apenas 2 caracteres
        var valor_final = "0," + valor; // coloca o zero na frente

    }else if (valor.length == 1) { // verifica se linha tem apenas 1 caractere
        var valor_final = "0,0" + valor; // coloca o 0,0 na frente

    } else { 
    // qualquer outro valor ganha a mesma formatação
        var valor_final = valor.substring(0, valor.length -2) + "," + valor.substring(valor.length -2, valor.length);
    }

    return valor_final
}