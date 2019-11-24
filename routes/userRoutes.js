const mongoose = require('mongoose');

module.exports = (app) => {
  app.get('/api/user/current_user', (req, res) => {
    res.send(req.user);
  });
};
