module.exports = (req, res, next) => {
  const authToken = req.headers.authorization

  if (process.env.NODE_ENV === 'production') {
    if (authToken !== process.env.BACKEND_AUTHORIZATION) {
      return res.status(401).send('Not authorized')
    }
  }

  return next()
}
