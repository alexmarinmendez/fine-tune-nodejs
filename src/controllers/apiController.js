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

async function RetrieveFile(req, res) {
    var fileId = req.query["fileId"]
    const response = await fileService.RetrieveFile(fileId)
    if (response == "fileId not found") {
        return res.status(404).send('fileId not found')
    }
    res.send(response)
}

module.exports = {
    Test,
    TransformData,
    UploadFile,
    ListFiles,
    RetrieveFile
}