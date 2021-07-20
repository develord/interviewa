const axios = require('axios')
const utils = require('../helpers/utils')
const { config } = require('../config')

exports.getCharacters = async (req, res, next) => {
  const { limit, offset } = req.query
  const ts = utils.timestamp()
  const hash = utils.createHash(ts, config.privateKey, config.publicKey)

  try {
    const response = await axios.get('http://gateway.marvel.com/v1/public/characters', { params: {
      ts: ts,
      apikey: config.publicKey,
      hash: hash,
      limit: limit || 20,
      offset: offset || 0
    } })
    return res.send(utils.dataAdapter(response))
  } catch (error) {
    next(error)
  }
}
