import express, {Request, Response} from 'express'

import {validationTicketBankers} from './validation/bankers/validationBoleto'
import {validationTicketConcessionaires} from './validation/concessionaires/validationTicket'

import {errorDigitLineFormat} from './errors'

const app = express()

app.get('/boletos/:digitLine', async (req: Request, res: Response) => {
    const { digitLine } = req.params

    const formatError = errorDigitLineFormat(digitLine)
    if (formatError)
        return res.status(400).json(formatError)
    
    if (digitLine.length == 47) {
        const resultValueBank = validationTicketBankers(digitLine)
        return res.json(resultValueBank)
    }

    if (digitLine.length == 48) {
        const resultValueConcessionaires = validationTicketConcessionaires(digitLine)
        res.json(resultValueConcessionaires)
    }

    return res.json({
        'StatusCode': 400,
        'ReasonError': `Incorrect digit line size: Must contain 47 digits or 48 digits`
    })
})


app.listen(8080, () => {
    console.log('Listening at http://localhost:8080/')
})