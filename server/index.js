const express = require('express')
const consola = require('consola')
const app = express()
const { config } = require('./config')
const { getCharacters } = require('./controllers/marvel')
const { notFoundHandler } = require('./controllers/notFoundHandler')
const { errorHandler } = require('./middleware')


app.get('/api/getCharacters', getCharacters)
app.all('*', notFoundHandler)
app.use(errorHandler)

app.listen(config.port, function () {
  // eslint-disable-next-line no-console
  consola.ready({
    message: `🚀 Server listening on ${config.port}`,
    badge: true
  })
})
