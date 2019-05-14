const routes = require('next-routes')();

routes
  .add('/projects/new', '/projects/new')
  .add('/projects/:address', '/projects/detail');

module.exports = routes;
