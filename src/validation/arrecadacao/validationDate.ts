export function validatorDate(barCode: string) {
    const year = barCode.substring(19, 23)
    const mounth = barCode.substring(23, 25)
    const day = barCode.substring(25, 27)

    return `${year}-${mounth.padStart(2, '0')}-${day.padStart(2, '0')}`
  }

