const express = require('express')

const BodyParser = require('body-parser')

require('colors')

const app = express()

app.use(BodyParser.json())
app.use(BodyParser.urlencoded({ extended: true }))

app.use('/', (req, res) => {
    res.send('Salam Men NIHATT Tayip oglu!')
})

const PORT = 8000
app.listen(PORT, () => console.log("Server is running: http://localhost:${PORT}".bold.blue))