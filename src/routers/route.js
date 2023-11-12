const express = require('express')
const apiController = require('../controllers/apiController')
const router = express.Router()

router.post('/test', apiController.Test)
router.post('/transform-data', apiController.TransformData)
router.post('/upload-file', apiController.UploadFile)
router.get('/list-files', apiController.ListFiles)

module.exports = router