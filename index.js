// @flow
const express = require('express');
const mongoose = require('mongoose');
const cookies = require('cookie-session');
const passport = require('passport');
const keys = require('./config/keys'); // eslint-disable-line import/no-unresolved
require('./models/User');

mongoose.connect(
  keys.mongoURI,
  { useNewUrlParser: true },
  (error) => console.log(error),
);

require('./services/passport');

const app = express();

app.use(
  cookies({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey],
  }),
);

app.use(passport.initialize());
app.use(passport.session());

require('./routes/authRoutes')(app);

const PORT = process.env.PORT || 3005;
app.listen(PORT);
