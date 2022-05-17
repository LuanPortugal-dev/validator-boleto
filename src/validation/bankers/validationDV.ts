function roundTen(num: number): number {
  return Math.ceil(num / 10) * 10
}

function blockStrToNum(block: string): number[] {
  return block.split('').map((digit) => Number(digit))
}

export function validationDV(value: string): boolean {
                //212900011 9         2110001210 9         0447561740 5       9 75870000002000
  const blocks = [value.slice(0, 10), value.slice(10, 21), value.slice(21, 32)]

  const DVdigits = blocks.map((block) => block.slice(-1))
  const blockDigits = blocks.map((block) => block.slice(0, block.length - 1))

  let result: boolean = true
  let index: number = -1
  
  for (const [i, block] of blockDigits.entries()) {
    const numberBlock = blockStrToNum(block).map( digit => {
      index++
      if (index % 2) {
        return digit
      } else {
        const digitResult = digit * 2
        if (digitResult >= 10) {
          const primary = Number(String(digitResult)[0])
          const secondary = Number(String(digitResult)[1])
          return primary + secondary
        } else {
          return digitResult
        }
      }
    } )

    const blockSum: number = numberBlock.reduce((acc: number, curr: number): number => acc + curr)

    const rest: number = blockSum % 10

    const around: number = roundTen(blockSum)

    const compareDV: number = (around - rest) % 10

    if( compareDV !== Number(DVdigits[i]) )
      result = false
  }
  
  return result
}
