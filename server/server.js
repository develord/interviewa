const express = require('express')
const app = express()
const { config } = require('./config')
const { getCharacters } = require('./controllers/marvel')

app.get('/api/getCharacters', getCharacters)

app.listen(config.port, function () {
  // eslint-disable-next-line no-console
  console.log(`server listening on port ${config.port}`)
})
