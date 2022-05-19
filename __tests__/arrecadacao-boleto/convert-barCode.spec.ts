import { convertBarCode } from '../../src/validation/arrecadacao/convertBarCode'

const DIGIT_LINE: string = '836500000036727200531075836158801115100959807692'
const BAR_CODE: string = '83650000003727200531078361588011110095980769'

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