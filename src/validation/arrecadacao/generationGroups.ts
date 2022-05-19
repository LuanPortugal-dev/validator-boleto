export function getConcessionariaGroups(value: string) {
    
  const matches = value.match(
        /^(?<campo1>\d{11})[^\d]?(?<dv1>\d{1})[^\d]?(?<campo2>\d{11})[^\d]?(?<dv2>\d{1})[^\d]?(?<campo3>\d{11})[^\d]?(?<dv3>\d{1})[^\d]?(?<campo4>\d{11})[^\d]?(?<dv4>\d{1})$/m
    )
  
    const fields = matches?.groups

    let codes = []
    if (fields) {
        let field_keys = Object.keys(fields)
        for (let i = 0; i < field_keys.length; i = i + 2) {
            const match_group: any = {}
            match_group['num'] = fields[field_keys[i]]
            codes.push(match_group)
        }
    }

    const code_groups: any = {
        codes,
    }

    if (matches) {
        code_groups['value'] = String(
            code_groups.codes[0].num + code_groups.codes[1].num
        ).replace(/^\d{4}(?<valor>\d{11}).*/, '$1')
    }
    return code_groups
}
