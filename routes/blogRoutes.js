const mongoose = require('mongoose');

const ToDo = mongoose.model('ToDos');

module.exports = (app) => {
  app.post('/api/blog/post/new', (req, res) => {
    console.log(req.body);
    res.send('yo mama');
  });

  app.get('/api/blog/editpost/:id');

  app.post('/api/blog/quotes', (req, res) => {
    // Insert into TodoList Collection
    const todoItem = new ToDo({
      itemId: 1,
      item: req.body.item,
      completed: false,
    });
    todoItem.save((err, result) => {
      if (err) {
        console.log(`---TodoItem save failed ${err}`);
      }
      console.log(`+++TodoItem saved successfully ${todoItem.item}`);
      res.send(req.body);
    });
  });
};
