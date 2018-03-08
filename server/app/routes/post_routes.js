var ObjectID = require('mongodb').ObjectID;

module.exports = function(app, db) {

  // return using ID
  app.get('/posts/:id', (req, res) => {
    const id = req.params.id;
    const details = { '_id': new ObjectID(id) };
    db.collection('posts').findOne(details, (err, item) => {
      if (err) {
        res.send({'error':'An error has occurred'});
      } else {
        res.send(item);
      }
    });
  });

  app.post('/posts', (req, res) => {
    const note = { title: req.body.title, content: req.body.content, authorID: req.body.authorid };
    db.collection('posts').insert(note, (err, result) => {
      if (err) {
        res.send({ 'error': 'An error has occurred' });
      } else {
        res.send(result.ops[0]);
      }
    });
  });
};
