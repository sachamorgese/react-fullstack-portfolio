module.exports = (req, res, next) => {
  if (req.user && req.user.role === 'admin') {
    return next();
  }
  return res.status(401).send({ error: 'You must be an admin to access this route!' });
};
