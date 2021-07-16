const axios = require('axios')
const utils = require('../helpers/utils')
const { config } = require('../config')

exports.getCharacters = async (req, res) => {
  const { limit, offset } = req.query
  const ts = utils.timestamp()
  const hash = utils.createHash(ts, config.privateKey, config.publicKey)

  await axios.get('http://gateway.marvel.com/v1/public/characters', { params: {
    ts: ts,
    apikey: config.publicKey,
    hash: hash,
    limit: limit || 20,
    offset: offset || 0
  } }).then(function (response) {
    return res.send(response.data.data.results.map(el => ({ name: el.name, img: el.thumbnail })))
  }).catch(function (error) {
    // eslint-disable-next-line no-console
    console.error(error)
    return res.status(error.response.status).send(error.message)
  })
}
