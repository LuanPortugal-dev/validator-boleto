import { validateField } from './validationFields'

export const validateFourFields = (digitableLine: string) => {
    const fields = [
        digitableLine.slice(0, 11),
        digitableLine.slice(12, 23),
        digitableLine.slice(24, 35),
        digitableLine.slice(36, 47),
    ]

    const fieldsDV = [
        digitableLine.slice(11, 12),
        digitableLine.slice(23, 24),
        digitableLine.slice(35, 36),
        digitableLine.slice(47, 48),
    ]

    const currencyCode = Number(digitableLine[2])

    const module = 11

    fields.forEach((number, index) => {
        validateField(String(number), fieldsDV[index], 1, module, currencyCode)
    })

}
