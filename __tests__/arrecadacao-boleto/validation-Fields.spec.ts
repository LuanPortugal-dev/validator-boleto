import { validateField } from '../../src/validation/arrecadacao/validationFields'

describe('validateField test suite', () => {
    it('digitable line of 48 characters', () => {

        expect(validateField('212900011', '2', 1, 10)).toBeTruthy()
    })

    it('digitable line of 48 characters', () => {

        expect(validateField('212900011', '2', 1, 11)).toBeTruthy()
    })
})
