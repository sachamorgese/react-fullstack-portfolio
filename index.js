const express = require('express');
const mongoose = require('mongoose');
const keys = require('./config/keys');
require('./services/passport');

console.log(keys.mongoURI);

mongoose.connect(
  keys.mongoURI,
  { useNewUrlParser: true },
  (error) => console.log(error),
);

const app = express();

require('./routes/authRoutes')(app);

app.get('/', (req, res) => res.send('Hello World!'));
app.get('/api/anal', (req, res) => {
  console.log('DAS PENES IST COMING!');
  res.send('Just like Jesus wanted!');
});

const PORT = process.env.PORT || 3005;
app.listen(PORT);
