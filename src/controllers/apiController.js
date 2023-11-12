const fileService = require('../services/file/fileService')

async function Test(req, res) {
    res.send("test Ok")
}

async function TransformData(req, res) {
    await fileService.TransformData()
    res.send()
}

module.exports = {
    Test,
    TransformData
}