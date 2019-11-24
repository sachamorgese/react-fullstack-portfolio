// @flow
const express = require('express');
const mongoose = require('mongoose');
const cookies = require('cookie-session');
const passport = require('passport');
const keys = require('./config/keys'); // eslint-disable-line import/no-unresolved
require('./models');

mongoose.connect(
  keys.mongoURI,
  { useNewUrlParser: true, useUnifiedTopology: true },
  // eslint-disable-next-line no-console
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
app.use(express.json());

require('./routes/authRoutes')(app);
require('./routes/blogRoutes')(app);
require('./routes/userRoutes')(app);

const PORT = process.env.PORT || 3005;
app.listen(PORT);
