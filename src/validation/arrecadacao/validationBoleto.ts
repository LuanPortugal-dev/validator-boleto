import { validatorDate } from './validationDate'
import { convertBarCode } from './generatorBarCode'
import { validationDV } from './validationDV'

export function validationArrecadaoBoleto(value: string) {
    const validateDV = validationDV(value)

    if(!validateDV)
        return {
            'StatusCode': 400,
            'ReasonError': 'Invalid verification digits',
        }

    const resultBarCode = convertBarCode(value)
    const resultDate = validatorDate(value)
    //const resultAmount = validatorAmount(value)

    return {
        'barCode': resultBarCode,
        'amount': 'resultAmount',
        'expirationDate': resultDate
    }
}