const fileService = require('../services/file/fileService')

async function Test(req, res) {
    res.send("test Ok")
}

async function TransformData(req, res) {
    await fileService.TransformData()
    res.send()
}

async function UploadFile(req, res) {
    const response = await fileService.UploadFile()
    res.send(response)
}

async function ListFiles(req, res) {
    const response = await fileService.ListFiles()
    res.send(response.data)
}

module.exports = {
    Test,
    TransformData,
    UploadFile,
    ListFiles
}