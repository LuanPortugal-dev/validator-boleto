import { validatorDate } from './validationDate'
import { validatorAmount } from './validationAmount'
import { convertBarCode } from './generatorBarCode'
import { validationDV } from './validationDV'

export function validationBankBoleto(digitLine: string) {
    const validateDV = validationDV(digitLine)

    if(!validateDV)
        return {
            'StatusCode': 400,
            'ReasonError': 'Invalid verification digits',
        }

    const resultBarCode = convertBarCode(digitLine)
    const resultDate = validatorDate(digitLine)
    const resultAmount = validatorAmount(digitLine)
   
    return {
        'barCode': resultBarCode,
        'amount': resultAmount,
        'expirationDate': resultDate
    }
}