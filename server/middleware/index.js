const consola = require('consola')

exports.errorHandler = (err, req, res) => {
    if (err) {
      consola.error(new Error(err.message))
      res.status(err.response?.status ?? 500).send({
          status: 'fail',
          message: `Error server!`
      })
    }
}