/* @noflow */

const express = require('express');
const mongoose = require('mongoose');
const cookies = require('cookie-session');
const passport = require('passport');
const keys = require('./config/keys');
require('./models');

mongoose.connect(
  keys.mongoURI,
  { useNewUrlParser: true, useUnifiedTopology: true },
  // eslint-disable-next-line flowtype/require-parameter-type,flowtype/require-return-type
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

if (process.env.NODE_ENV === 'production') {
  // Express will serve up production assets
  // like our main.js file, or main.css file!
  app.use(express.static('client/build'));

  // Express will serve up the index.html file
  // if it doesn't recognize the route
  // eslint-disable-next-line global-require
  const path = require('path');
  // eslint-disable-next-line flowtype/require-parameter-type,flowtype/require-return-type
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

const PORT = process.env.PORT || 3005;
app.listen(PORT);
