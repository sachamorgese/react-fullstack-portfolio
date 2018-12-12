const mongoose = require('mongoose');

const Draft = mongoose.model('Draft');
const BlogPost = mongoose.model('BlogPost');

module.exports = (app) => {
  app.post('/api/blog/draft/new', async (req, res) => {
    const { content } = req.body;
    const draftParams = { content, title: '' };
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

  app.get('/api/blog/draft/:draftId', async (req, res) => {
    const { draftId } = req.params;

    try {
      const draft = await Draft.findById(draftId).exec();
      res.send(draft);
    } catch (e) {
      res.send(e);
    }
  });

  app.delete('/api/blog/draft/:draftId', async (req, res) => {
    const { draftId } = req.params;
    try {
      await Draft.findByIdAndDelete(draftId).exec();
      res.send(`Deleted`);
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

  app.get('/api/blog/posts', async (req, res) => {
    try {
      const posts = await BlogPost.find({}, 'title').exec();
      res.send(posts);
    } catch (e) {
      res.send(e);
    }
  });

  app.post('/api/blog/post/new', async (req, res) => {
    try {
      const { id, content: newContent } = req.body;
      const draft = await Draft.findById(id).exec();
      const { content: oldContent, title, labels } = draft;
      const draftParams = {
        content: newContent || oldContent,
        title,
        labels,
      };
      const blogPost = await new BlogPost(draftParams).save();
      await Draft.findByIdAndDelete(id).exec();
      res.send(blogPost);
    } catch (e) {
      res.send(e);
    }
  });

  app.get('/api/blog/post/:postId', async (req, res) => {
    const { postId } = req.params;
    try {
      const blogPost = await BlogPost.findById(postId).exec();
      res.send(blogPost);
    } catch (e) {
      res.send(e);
    }
  });
};
