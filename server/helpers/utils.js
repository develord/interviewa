var crypto = require('crypto')

exports.timestamp = function () {
  return Math.floor(Date.now() / 1000)
}

exports.createHash = function (ts, privkey, pubkey) {
  let preHash = ts + privkey + pubkey
  return crypto.createHash('md5').update(preHash).digest('hex')
}
