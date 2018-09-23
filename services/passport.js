const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
const mongoose = require('mongoose');

const User = mongoose.model('users');

const {
  client_id: GOOGLE_CLIENT_ID,
  client_secret: GOOGLE_CLIENT_SECRET,
  redirect_uris: [googleCallbackURL],
} = require('../config/keys');

passport.use(
  new GoogleStrategy(
    {
      clientID: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
      callbackURL: googleCallbackURL,
    },
    (accessToken, refreshToken, profile, done) => {
      new User({ google: { id: profile.id } }).save();
    },
  ),
);
