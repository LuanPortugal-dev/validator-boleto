import { convertBarCode } from '../../src/validation/bankers/convertBarCode'

const DIGIT_LINE: string = '21290001192110001210904475617405975870000002000'
const BAR_CODE: string = '21299758700000020000001121100012100447561740'

describe('Convert to bar code', () => {
  it('should covert a valid bar code', () => {
    const barCode: string = convertBarCode(DIGIT_LINE)

    expect(barCode).toBe(BAR_CODE)
  })

  it('should not match a invalid bar code', () => {
    const barCode: string = convertBarCode(DIGIT_LINE)
    const fakeBarCode: string = BAR_CODE + '1'

    expect(barCode).not.toBe(fakeBarCode)
  })
})