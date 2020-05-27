/* @noflow */
/* eslint-disable flowtype/require-parameter-type */

module.exports = (app) => {
  app.get('/api/user/current_user', (req, res) => {
    res.send(req.user);
  });
};
