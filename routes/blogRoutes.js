const mongoose = require('mongoose');

module.exports = (app) => {
  app.post('/api/blog/draft/new', (req, res) => {
    console.log(req.body);
    res.send('yo mama');
  });

  app.post('/api/blog/draft/title/', (req, res) => {
    console.log(req.body);
    res.send('yo mama');
  });

  app.post('/api/blog/draft/:draftId', (req, res) => {
    console.log(req.body);
    res.send('yo mama');
  });

  app.get('/api/blog/editpost/:id');
};
