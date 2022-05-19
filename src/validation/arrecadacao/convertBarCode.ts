export function convertBarCode(digitableLine: string) {
    const barcode =
        digitableLine.slice(0, 11) +
        digitableLine.slice(12, 23) +
        digitableLine.slice(24, 35) +
        digitableLine.slice(36, 47)

    return barcode
}
