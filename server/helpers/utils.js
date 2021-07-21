var crypto = require('crypto')

exports.timestamp = function () {
  return Math.floor(Date.now() / 1000)
}

exports.createHash = function (ts, privkey, pubkey) {
  let preHash = ts + privkey + pubkey
  return crypto.createHash('md5').update(preHash).digest('hex')
}

exports.dataAdapter = function (listData) {
  return listData.data?.data?.results?.map(el => ({ name: el.name || 'None', img: el.thumbnail || 'https://via.placeholder.com/3000' })) ?? []
}
