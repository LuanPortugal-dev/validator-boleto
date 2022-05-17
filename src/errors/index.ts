export function errorDigitLineFormat(value: string) {
    if ( !value.match( (/([0-9])/g) ) )
        return {
            'StatusCode': 400,
            'ReasonError':'Illegal format found in barcode'
        }
}
