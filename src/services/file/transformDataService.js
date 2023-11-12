var xlsx = require('xlsx')
const fs = require('fs')

async function TransformData() {
    var workbook = xlsx.readFile('src/shared/data-set.xlsx')
    var shet_name_list = workbook.SheetNames
    var xlData = xlsx.utils.sheet_to_json(workbook.Sheets[shet_name_list[0]])
    for (const item of xlData) {
        var object = `{"prompt": "${item.Question} ->", "completion": "${item.Answer} END"}`
        await fs.appendFileSync("src/shared/data-set.jsonl", object, 'utf-8', function() {})
        await fs.appendFileSync("src/shared/data-set.jsonl", '\r\n', 'utf-8', function() {})
    }
}

module.exports = {
    TransformData
}