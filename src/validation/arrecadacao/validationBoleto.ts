import { getConcessionariaGroups } from './generationGroups'
import { formatAmount } from './validationAmount'
import { convertBarCode } from './convertBarCode'

export function validationArrecadaoBoleto(value: string) {
    const resultGroups= getConcessionariaGroups(value)

    const resultBarCode = convertBarCode(value)
    const amount = formatAmount(resultGroups.value)

    return {
        'barCode': resultBarCode,
        'amount': amount,
    }
}