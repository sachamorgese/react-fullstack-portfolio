const mods = {
  admin: true,
  mod: true,
};

module.exports = (req, res, next) => {
  if (req.user && mods[req.user.role]) {
    return next();
  }
  return res.status(401).send({ error: 'You must be a mod to access this route!' });
};
