const checkEven = (n: number) => {
    return n % 2 == 0
}

export const moduleTen = (
    array: number[],
    vd: number,
    fieldNumber?: number
) => {
    const reducedValue = array.reduce(
        (prev: number, current: number, index: number) => {
            const isIndexEven = checkEven(index)
            let result = isIndexEven? current * 2 : current * 1

            if (result > 9) {
                const resultArr = result.toString().split('')
                result = Number(resultArr[0]) + Number(resultArr[1])
            }

            return prev + result
        },
        0
    )

    const modulus = reducedValue % 10

    let dac = 10 - modulus
    dac = dac === 10? 0 : dac

    if (!fieldNumber && dac !== Number(vd)) {
        return 'Invalid general verification digit1'
    }
    if (dac === Number(vd)) {
        return true
    } else {
        return `Invalid verification digit of field: ${fieldNumber}`
    }
}
