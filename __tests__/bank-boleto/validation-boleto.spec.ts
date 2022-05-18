import { validationBankBoleto } from '../../src/validation/bankers/validationBoleto'
import { errorDigitLineFormat } from '../../src/errors'

interface IDIGIT_LINE {
  barCode: string,
  amount: string,
  expirationDate: string
}

interface IDIGIT_LINE_ERROR{
    StatusCode: number,
    ReasonError: string
}

//'10499712012251770123545678901518889930000050000'
//'10499712012251770123545678901518389930000500000'
//'10499712012251770123545678901617389960000240000'
const DIGIT_LINE: string = '21290001192110001210904475617405975870000002000'

const DIGIT_LINE_RESULT: IDIGIT_LINE = {
    'barCode': "21299758700000020000001121100012100447561740",
    'amount': "20,00",
    'expirationDate': "2018-07-16"
}

const DIGIT_LINE_INVALID_ERROR: IDIGIT_LINE_ERROR = {
    'StatusCode': 400,
    'ReasonError':'Illegal format found in barcode'
}

const DIGIT_LINE_DV_ERROR: IDIGIT_LINE_ERROR = {
    'StatusCode': 400,
    'ReasonError': 'Invalid verification digits',
}

describe('Validating bank boleto', () => {
  it('should validating a valid bank boleto', () => {
    const barCode = validationBankBoleto(DIGIT_LINE)

    expect(barCode).toEqual(DIGIT_LINE_RESULT)
  })

  it('should not validating a invalid bank boleto', () => {

    expect(errorDigitLineFormat('212900011921100012109044756174059758700000020bb'))
    .toEqual(DIGIT_LINE_INVALID_ERROR)

    expect(errorDigitLineFormat('D1290001192110001210904475617405975870000002000'))
    .toEqual(DIGIT_LINE_INVALID_ERROR)

    expect(errorDigitLineFormat('212.0001192110001210904475617405.9758700.000200A'))
    .toEqual(DIGIT_LINE_INVALID_ERROR)

    expect(errorDigitLineFormat('2120001192110001210904-47561740597587000002001.'))
    .toEqual(DIGIT_LINE_INVALID_ERROR)

    expect(errorDigitLineFormat('2129000119211000121090/447561740597587000000200 '))
    .toEqual(DIGIT_LINE_INVALID_ERROR)

  })

  it('should not validating a invalid DV', () => {

    expect(validationBankBoleto('31290001192110001210904475617405975870000002000'))
    .toEqual(DIGIT_LINE_DV_ERROR)
  })
})