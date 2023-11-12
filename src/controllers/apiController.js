const transformDataService = require('../services/file/transformDataService')

async function Test(req, res) {
    res.send("test Ok")
}

async function TransformData(req, res) {
    await transformDataService.TransformData()
    res.send()
}

module.exports = {
    Test,
    TransformData
}