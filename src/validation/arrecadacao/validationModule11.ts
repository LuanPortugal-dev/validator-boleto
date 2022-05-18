export function ArrecadacaoModule11 (value: string) {

    const code = value.split('').reverse()

    let multiplier = 2

    const summation = code.reduce((acc, current) => {
        const sum = Number(current) * multiplier
        multiplier = multiplier === 9 ? 2 : multiplier + 1
        return acc + sum
    }, 0)

    const rest = summation % 11

    if(rest === 0 || rest === 1) 
        return '0'

    else if(rest === 10)
        return '1'
    
    const DV = 11 - rest
    return DV.toString()
}

