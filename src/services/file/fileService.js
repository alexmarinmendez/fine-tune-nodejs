var xlsx = require('xlsx')
const fs = require('fs')
const OpenAI = require('openai')
require('dotenv').config()
const openai = new OpenAI({ apiKey: process.env.OPENAI_APIKEY })

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

async function UploadFile() {
    const response = await openai.files.create({ file: fs.createReadStream('src/shared/data-set.jsonl'), purpose: 'fine-tune' });
    return response
}

async function ListFiles() {
    return await openai.files.list()
}

async function RetrieveFile(fileId) {
    return await openai.files.retrieve(fileId)
}

module.exports = {
    TransformData,
    UploadFile,
    ListFiles,
    RetrieveFile
}