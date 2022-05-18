import { errorDigitLineFormat, errorLengthFormat } from '../../src/errors'

interface IDIGIT_LINE_ERROR{
  StatusCode: number,
  ReasonError: string
}


const DIGIT_LINE: string = '21290001192110001210904475617405975870000002000'
const DIGIT_LINE_FAKE: string = '2129000119211000121090447561740597587000000200000'

const DIGIT_LINE_INVALID_ERROR: IDIGIT_LINE_ERROR = {
  'StatusCode': 400,
  'ReasonError':'Illegal format found in barcode'
}

const DIGIT_LINE_LENGHT_ERROR: IDIGIT_LINE_ERROR = {
  'StatusCode': 400,
  'ReasonError': 'Incorrect digit line size: Must contain 47 digits or 48 digits'
}

describe('Checking errors', () => {
  it('check errors sucess', () => {
    const digitsLine = errorDigitLineFormat(DIGIT_LINE)

    expect(digitsLine).not.toEqual(DIGIT_LINE_INVALID_ERROR)
  })

  it('Invalid check errors', () => {
    const digitsLine = errorDigitLineFormat(DIGIT_LINE_FAKE)

    expect(digitsLine).toEqual(DIGIT_LINE_INVALID_ERROR)
  })

  it('check errors sucess', () => {
    const digitsLine = errorLengthFormat(DIGIT_LINE)

    expect(digitsLine).not.toEqual(DIGIT_LINE_LENGHT_ERROR)
  })

  it('Invalid check errors', () => {
    const digitsLine = errorLengthFormat(DIGIT_LINE_FAKE)

    expect(digitsLine).toEqual(DIGIT_LINE_LENGHT_ERROR)
  })


})