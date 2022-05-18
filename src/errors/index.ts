export function errorDigitLineFormat(value: string) {
    if ( !value.match( (/^[0-9]{47}$/) ) )
        return {
            'StatusCode': 400,
            'ReasonError':'Illegal format found in barcode'
        }
    
}

export function errorLengthFormat(value: string) {
    if ( value.length > 48 || value.length < 47)
        return {
            'StatusCode': 400,
            'ReasonError': 'Incorrect digit line size: Must contain 47 digits or 48 digits'
        }
    
}
