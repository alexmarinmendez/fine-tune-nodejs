const express = require('express')
const apiRoute = require('./routers/route')

const app = express()
const PORT = process.env.PORT || 3000

app.use(express.json())
app.use('/api', apiRoute)

app.listen(PORT, () => console.log(`Listening on port ${PORT}`))