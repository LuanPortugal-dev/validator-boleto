import { validationDV } from '../../src/validation/bankers/validationDV'

const DIGIT_LINE: string = '21290001192110001210904475617405975870000002000'
const DIGIT_LINE_FAKE: string = '21290001162110001210504475617405975870000002000'

describe('Checking check digits', () => {
  it('check digits sucess', () => {
    const digits: boolean = validationDV(DIGIT_LINE)

    expect(digits).toBe(true)
  })

  it('Invalid check digits', () => {
    const digits: boolean = validationDV(DIGIT_LINE_FAKE)
    const fakedigits: boolean = false

    expect(digits).toBe(fakedigits)
  })
})