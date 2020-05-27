// @noflow
/* eslint-disable flowtype/require-parameter-type, flowtype/require-return-type */

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
      const { id, displayName: name, emails } = profile;
      const existingUser = await User.findOne({ google: { id: profile.id } });
      if (existingUser) {
        return done(null, existingUser);
      }

      const { value: email } = emails[0];
      const user = await new User({ name, email, google: { id } }).save();
      return done(null, user);
    },
  ),
);
