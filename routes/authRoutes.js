const passport = require('passport');

module.exports = (app) => {
  // Can generalize in the future to redirect to the correct login route
  app.get('/auth/google', (req, res) => {
    const returnTo = req.headers.referer
      .split('/')
      .slice(3)
      .join('/');
    req.session.returnTo = `/${returnTo}`;
    res.redirect('/auth/google/login');
  });

  app.get(
    '/auth/google/login',
    passport.authenticate('google', {
      scope: ['profile', 'email'],
    }),
  );

  app.get(
    '/auth/google/callback',
    passport.authenticate('google'),
    (req, res) => {
      res.redirect(req.session.returnTo || '/');
      delete req.session.returnTo;
    },
  );

  app.get('/auth/logout', (req, res) => {
    req.logout();
    res.redirect('/');
  });

  app.get('/auth/current_user', (req, res) => {
    res.send(req.user);
  });
};
