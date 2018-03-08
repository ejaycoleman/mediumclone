//const noteRoutes = require('./note_routes');
const posts = require('./post_routes');

module.exports = function(app, db) {
  //noteRoutes(app, db);
  posts(app, db);

  // Other route groups could go here, in the future
};
