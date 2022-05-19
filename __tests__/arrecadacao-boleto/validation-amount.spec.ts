import { formatAmount } from '../../src/validation/arrecadacao/validationAmount'
import { getConcessionariaGroups } from '../../src/validation/arrecadacao/generationGroups'

const DIGIT_LINE: string = '836500000036727200531075836158801115100959807692'
const DIGIT_LINE_AMOUNT: string = '372,72'

describe('Calculate amount', () => {
    it('should covert a valid bar code', () => {
        const amount = getConcessionariaGroups(DIGIT_LINE)
        const resultFormatAmount: string = formatAmount(amount.value)

        expect(resultFormatAmount).toBe(DIGIT_LINE_AMOUNT)
    })

    it('Does not correspond to an incalculable value', () => {
        const amount = getConcessionariaGroups(DIGIT_LINE)
        const resultFormatAmount: string = formatAmount(amount.value)
        const fakeAmount: string = resultFormatAmount + '1'

        expect(resultFormatAmount).not.toBe(fakeAmount)
    })

})
