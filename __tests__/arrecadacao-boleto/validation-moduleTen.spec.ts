import { moduleTen } from '../../src/validation/arrecadacao/moduleTen'

describe('moduleTen test suite', () => {
    it('moduleTen test, it should return true', () => {
        expect(moduleTen([2, 0, 0, 0, 0, 0, 0, 2, 6, 3, 8], 1, 1)).toBe(true)
    })

    it('moduleTen test, it should return an error informing verification digit is incorret', () => {
        expect(moduleTen([1, 1, 0, 0, 0, 9, 2, 1, 2], 2, 1)).toEqual(
            'Invalid verification digit of field: 1'
        )
    })

    it('moduleTen test, it should return an error informing verification digit is incorret', () => {
        expect(moduleTen([1, 0, 0, 0, 0, 8, 2, 1, 2], 0)).toEqual(
            'Invalid general verification digit1'
        )
    })
})
