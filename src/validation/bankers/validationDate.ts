export function validatorDate(digitLine: string) {
    const expiration = Number(digitLine.slice(33, 37))
    
    const date: Date = new Date('10/07/1997')

    date.setTime(date.getTime() + (expiration * 24 * 60 * 60 * 1000))

    const resultDate = date.getFullYear() + '-' +("0" + (date.getMonth() + 1)).slice(-2) + '-' +
        ("0" + (date.getDate() + 1)).slice(-2)

    return resultDate
}