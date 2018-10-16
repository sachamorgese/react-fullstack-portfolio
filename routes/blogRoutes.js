module.exports = (app) => {
  app.post('/api/blog/post/new', (req, res) => {
    console.log(req.body);
    res.send('yo mama');
  });

  app.get('/api/blog/editpost/:id');
};
