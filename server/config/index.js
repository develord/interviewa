/** Environement Configuration */
const dotenv = require('dotenv')
const path = '.env' // we have only one mode

dotenv.config({ path })
const config = {
  privateKey: process.env.PRIVATE_KEY,
  publicKey: process.env.PUBLIC_KEY,
  port: process.env.SERVER_PORT
}

module.exports = {
  config
}
