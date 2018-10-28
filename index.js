// @flow
const express = require('express');
const mongoose = require('mongoose');
const cookies = require('cookie-session');
const passport = require('passport');
const graphqlHTTP = require('express-graphql');
const keys = require('./config/keys'); // eslint-disable-line import/no-unresolved
const { todoSchema: schema } = require('./graphql/todo');
require('./models');

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
app.use(express.json());
app.use(
  '/graphql',
  graphqlHTTP((req) => ({
    schema,
    // ,graphiql:true
  })),
);

require('./routes/authRoutes')(app);
require('./routes/blogRoutes')(app);

const PORT = process.env.PORT || 3005;
app.listen(PORT);
