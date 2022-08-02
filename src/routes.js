const {
  addBookHandler, gettingAllBooks, gettingBookByIdHandler, updateBookHandler,
} = require('./handler');

const routes = [
  {
    method: 'POST',
    path: '/books',
    handler: addBookHandler,
  },
  {
    method: 'GET',
    path: '/books',
    handler: gettingAllBooks,
  },
  {
    method: 'GET',
    path: '/books/{bookId}',
    handler: gettingBookByIdHandler,
  },
  {
    method: 'PUT',
    path: '/books/{bookId}',
    handler: updateBookHandler,
  },
];

module.exports = routes;
