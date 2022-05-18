import express, {Request, Response} from 'express'

import { validationBankBoleto } from './validation/bankers/validationBoleto'
import { validationArrecadaoBoleto } from './validation/arrecadacao/validationBoleto'

import { errorDigitLineFormat, errorLengthFormat } from './errors'

const app = express()

app.get('/boleto/:digitLine', async (req: Request, res: Response) => {
    const { digitLine } = req.params

    const formatErrorLength = errorLengthFormat(digitLine)
    if (formatErrorLength)
        return res.status(400).json(formatErrorLength) 

    const formatErrorDigitLine = errorDigitLineFormat(digitLine)
    if (formatErrorDigitLine)
        return res.status(400).json(formatErrorDigitLine)
    

    if (digitLine.length == 47) {
        const resultValueBank = validationBankBoleto(digitLine)
        return res.json(resultValueBank)
    }

    if (digitLine.length == 48) {
        const resultValueConcessionaires = validationArrecadaoBoleto(digitLine)
        return res.json(resultValueConcessionaires)
    }


    return res.json({
        'StatusCode': 400,
        'ReasonError': `Incorrect digit line size: Must contain 47 digits or 48 digits`
    })
})


app.listen(8080, () => {
    console.log('Listening at http://localhost:8080/')
})