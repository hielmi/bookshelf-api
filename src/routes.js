const addBookHandler = require('./handler');

const routes = [
  {
    method: 'POST',
    path: '/',
    handler: addBookHandler,
  },

];

module.exports = routes;
