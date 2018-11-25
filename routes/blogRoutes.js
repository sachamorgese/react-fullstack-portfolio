const mongoose = require('mongoose');

const Draft = mongoose.model('Draft');

module.exports = (app) => {
  app.post('/api/blog/draft/new', async (req, res) => {
    const { content } = req.body;
    const draftParams = { content };
    try {
      const draft = await new Draft(draftParams).save();
      res.send(draft);
    } catch (e) {
      res.send(e);
    }
  });

  app.patch('/api/blog/draft/:draftId/title/', async (req, res) => {
    try {
      const draft = await Draft.findByIdAndUpdate(
        req.params.draftId,
        {
          title: req.body.title,
        },
        (err, newDraft) => {
          if (!err) return newDraft;
          return err;
        },
      );
      res.send(draft);
    } catch (e) {
      res.send(e);
    }
  });

  app.patch('/api/blog/draft/:draftId/content/', async (req, res) => {
    try {
      const updated = Date.now();
      const draft = await Draft.findByIdAndUpdate(
        req.params.draftId,
        {
          content: req.body.content,
          updated,
        },
        (err, newDraft) => {
          if (!err) return newDraft;
          return err;
        },
      );
      res.send(draft);
    } catch (e) {
      res.send(e);
    }
  });

  app.get('/api/blog/draft/:id', async (req, res) => {
    const { id } = req.params;

    try {
      const draft = await Draft.findById(id).exec();
      res.send(draft);
    } catch (e) {
      res.send(e);
    }
  });

  app.get('/api/blog/drafts', async (req, res) => {
    try {
      const drafts = await Draft.find({}, 'title').exec();
      res.send(drafts);
    } catch (e) {
      res.send(e);
    }
  });
};
