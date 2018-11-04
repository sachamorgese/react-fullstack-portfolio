// @flow
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
const mongoose = require('mongoose');

const User = mongoose.model('User');

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id).then((user) => {
    done(null, user);
  });
});

const {
  client_id: GOOGLE_CLIENT_ID,
  client_secret: GOOGLE_CLIENT_SECRET,
} = require('../config/keys');

passport.use(
  new GoogleStrategy(
    {
      clientID: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
      callbackURL: '/auth/google/callback',
      proxy: true,
    },
    async (accessToken, refreshToken, profile, done) => {
      const existingUser = await User.findOne({ google: { id: profile.id } });
      if (existingUser) {
        return done(null, existingUser);
      }

      const user = await new User({ google: { id: profile.id } }).save();
      done(null, user);
    },
  ),
);
