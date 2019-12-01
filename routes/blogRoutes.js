// REFACTOR BOTH BLOG AND DRAFT ROUTES TO REDUCE REPETITION
// @noflow
/* eslint-disable flowtype/require-parameter-type, flowtype/require-return-type */

const mongoose = require('mongoose');
const requireAdmin = require('../middleware/requireAdmin');

const Draft = mongoose.model('Draft');
const BlogPost = mongoose.model('BlogPost');

module.exports = (app) => {
  app.post('/api/blog/draft/new', requireAdmin, async (req, res) => {
    const { content, postId } = req.body;
    let draftParams = {};
    if (postId) {
      try {
        const blogPost = await BlogPost.findById(postId).exec();
        const { title, content: postContent, labels } = blogPost;
        draftParams = {
          title,
          content: postContent,
          labels,
          publishedPost: postId,
        };
      } catch (e) {
        res.send(e);
        return;
      }
    } else {
      draftParams = { content, title: '' };
    }
    try {
      const draft = await new Draft(draftParams).save();
      res.send(draft);
    } catch (e) {
      res.send(e);
    }
  });

  app.patch(
    '/api/blog/draft/:draftId/title/',
    requireAdmin,
    async (req, res) => {
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
    },
  );

  app.patch(
    '/api/blog/draft/:draftId/content/',
    requireAdmin,
    async (req, res) => {
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
    },
  );

  app.get('/api/blog/draft/:draftId', requireAdmin, async (req, res) => {
    const { draftId } = req.params;

    try {
      const draft = await Draft.findById(draftId).exec();
      res.send(draft);
    } catch (e) {
      res.send(e);
    }
  });

  app.delete('/api/blog/draft/:draftId', requireAdmin, async (req, res) => {
    const { draftId } = req.params;
    try {
      await Draft.findByIdAndDelete(draftId).exec();
      res.send(`Deleted`);
    } catch (e) {
      res.send(e);
    }
  });

  app.get('/api/blog/drafts', requireAdmin, async (req, res) => {
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

  async function createNewPost(draft, newContent) {
    const { content, title, labels } = draft;
    const draftParams = {
      content: newContent || content,
      title,
      labels,
    };
    return new BlogPost(draftParams).save();
  }

  async function updatePost(postId, draft, newContent) {
    const { content, title, labels } = draft;
    const updated = Date.now();
    const blogPost = await BlogPost.findByIdAndUpdate(
      postId,
      {
        content: newContent || content,
        updated,
        title,
        labels,
      },
      (err, newPost) => {
        if (!err) return newPost;
        throw new Error(err);
      },
    );
    if (blogPost) {
      return blogPost;
    }
    return createNewPost(draft, newContent);
  }

  app.post('/api/blog/post/new', requireAdmin, async (req, res) => {
    try {
      const { id, content: newContent } = req.body;
      const draft = await Draft.findById(id).exec();
      const { publishedPost } = draft;
      if (publishedPost) {
        try {
          const blogPost = await updatePost(publishedPost, draft, newContent);
          res.send(blogPost);
        } catch (err) {
          res.send(err);
        }
      } else {
        const newPost = await createNewPost(draft, newContent);
        res.send(newPost);
      }
      await Draft.findByIdAndDelete(id).exec();
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

  app.delete('/api/blog/post/:postId', requireAdmin, async (req, res) => {
    const { postId } = req.params;
    try {
      await BlogPost.findByIdAndDelete(postId).exec();
      res.send(`Deleted`);
    } catch (e) {
      res.send(e);
    }
  });
};
