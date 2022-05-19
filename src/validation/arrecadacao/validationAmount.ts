export function formatAmount(valor: string) {
    const amount = (Number(valor) / 100)
        .toFixed(2)
        .replace(/\./g, '|')
        .replace(/,/g, '')
        .replace(/(\d)(?=((\d{3})+)(?:\|))/g, '$1.')
        .replace(/\|/g, ',')

    return amount
}
