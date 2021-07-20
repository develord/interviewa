exports.notFoundHandler = (req, res) => {
    res.status(404).json({
      status: 'fail',
      message: `Can't find ${req.originalUrl} on this server!`
    })
}