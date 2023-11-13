const OpenAI = require('openai')
require('dotenv').config()
const openai = new OpenAI({ apiKey: process.env.OPENAI_APIKEY })

async function CreateFineTune(fileId) {
    try {
        const response = await openai.fineTuning.jobs.create({ training_file: fileId, model: 'davinci-002' })
        return response
    } catch(err) {
        return { status: 400, data: err }
    }
}

async function ListFineTunes() {
    try {
        return await openai.fineTuning.jobs.list();
    } catch(err) {
        return { status: 400, data: err }
    }
}

module.exports = {
    CreateFineTune,
    ListFineTunes
}