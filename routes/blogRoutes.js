const mongoose = require('mongoose');

const Draft = mongoose.model('Draft');

module.exports = (app) => {
  app.post('/api/blog/draft/new', async (req, res) => {
    console.log('here');
    try {
      console.log('here 2');
      const draft = await new Draft().save();
      res.send(draft);
    } catch (e) {
      res.send('error occurred');
    }
  });

  app.post('/api/blog/draft/:draftId/title/', (req, res) => {
    console.log(req.body);
    res.send('yo mama');
  });

  app.post('/api/blog/draft/:draftId/update/', (req, res) => {
    console.log(req.body);
    res.send('yo mama');
  });

  app.get('/api/blog/draft/:id', async (req, res) => {
    const { id } = req.params;
    const draft = await Draft.findById(id).exec();
    res.send(draft);
  });
};
