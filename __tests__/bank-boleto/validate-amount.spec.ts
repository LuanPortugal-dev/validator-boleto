import { validatorAmount } from '../../src/validation/bankers/validationAmount'

const DIGIT_LINE: string = '21290001192110001210904475617405975870000002000'
const DIGIT_LINE_AMOUNT: string = '20,00'

describe('Calculate amount', () => {
  it('should covert a valid bar code', () => {
    const amount: string = validatorAmount(DIGIT_LINE)

    expect(amount).toBe(DIGIT_LINE_AMOUNT)
  })

  it('Does not correspond to an incalculable value', () => {
    const amount: string = validatorAmount(DIGIT_LINE)
    const fakeAmount: string = DIGIT_LINE_AMOUNT + '1'

    expect(amount).not.toBe(fakeAmount)
  })

  it('1 ten centavos', () => {
    const digitLine: string = '21290001192110001210904475617405975870000000002'

    const amount: string = validatorAmount(digitLine)

    expect(amount).toBe('0,02')
  })

  it('2 ten centavos', () => {
    const digitLine: string = '21290001192110001210904475617405975870000000020'

    const amount: string = validatorAmount(digitLine)

    expect(amount).toBe('0,20')
  })
})