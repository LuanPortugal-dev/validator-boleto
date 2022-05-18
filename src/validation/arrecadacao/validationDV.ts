import {ArrecadacaoModule11} from './validationModule11'

export function validationDV (barCode: string): boolean {
    const coinCode = Number(barCode[2])
    const DV = barCode[3]
    console.log(DV)
    const block = barCode.substring(0, 3) + barCode.substring(4)
    let moduleResult: string

    switch (coinCode) {
      case 6:
      case 7:
        moduleResult = ArrecadacaoModule11(block)
        break

      case 8:
      case 9:
        moduleResult = ArrecadacaoModule11(block)
        break

      default:
        return false
    }

    return moduleResult === DV
  }

