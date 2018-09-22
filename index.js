const express = require('express');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
const {
  web: {
    client_id: GOOGLE_CLIENT_ID,
    client_secret: GOOGLE_CLIENT_SECRET,
    redirect_uris: [googleCallbackURL],
  },
} = require('./config/client_id');

passport.use(
  new GoogleStrategy(
    {
      clientID: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
      callbackURL: googleCallbackURL,
    },
    (accessToken, refreshToken, profile, done) =>
      console.log(accessToken, profile),
  ),
);

const app = express();

app.get(
  '/auth/google',
  passport.authenticate('google', {
    scope: ['profile', 'email'],
  }),
);

app.get('/auth/oauth2callback', passport.authenticate('google'));

app.get('/auth/logout', (req, res) => {
  req.logout();
  res.send(req.user);
});

app.get('/', (req, res) => res.send('Hello World!'));
app.get('/api/anal', (req, res) => {
  console.log('DAS PENES IST COMING!');
  res.send('Just like Jesus wanted!');
});

const PORT = process.env.PORT || 3005;
app.listen(PORT);
