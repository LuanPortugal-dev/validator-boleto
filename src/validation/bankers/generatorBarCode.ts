export function generatorBarCode(digitLine: string){
    const barcode = digitLine.replace(
        /^(\d{4})(\d{5})\d{1}(\d{10})\d{1}(\d{10})\d{1}(\d{15})$/, 
        '$1$5$2$3$4'
    )

    return barcode
}
