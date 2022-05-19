export function validatorAmount(value: any){
    const valor = parseFloat(value.substring(value.length - 10, value.length)).toString() 
    if (valor.length == 2) { 
        var valor_final = "0," + valor

    }else if (valor.length == 1) { 
        var valor_final = "0,0" + valor

    } else { 
        var valor_final = valor.substring(0, valor.length -2) + "," + valor.substring(valor.length -2, valor.length)
    }

    return valor_final
}
