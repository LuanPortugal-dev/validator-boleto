import { getConcessionariaGroups } from './generationGroups'
import { formatAmount } from './validationAmount'
import { convertBarCode } from './convertBarCode'
import { validateFourFields } from './validation4Fields'

export function validationArrecadaoBoleto(value: string) {
    const resultGroups= getConcessionariaGroups(value)
    const resultValidationDv = validateFourFields(value)

    const resultBarCode = convertBarCode(value)
    const amount = formatAmount(resultGroups.value)

    return {
        'barCode': resultBarCode,
        'amount': amount,
    }
}