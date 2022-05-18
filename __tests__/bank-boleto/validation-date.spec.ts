import { validatorDate } from '../../src/validation/bankers/validationDate'


const DIGIT_LINE: string = '21290001192110001210904475617405975870000002000'

const RESULT_DATE = "2018-07-16"

const RESULT_DATE_FAKE: string = "2018-07-18"

describe('Convert and validation Date', () => {
  it('must validate the date within the digit line', () => {
    const date: string = validatorDate(DIGIT_LINE)

    expect(date).toBe(RESULT_DATE)
  })

  it('This invalid date', () => {
    const date: string = validatorDate(DIGIT_LINE)

    expect(date).not.toBe(RESULT_DATE_FAKE)
  })
})