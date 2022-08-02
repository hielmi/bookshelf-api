const {
  addBookHandler,
  gettingAllBooks,
  gettingBookByIdHandler,
  updateBookByHandler,
  deleteBookByIdHandler,
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
    handler: updateBookByHandler,
  },
  {
    method: 'DELETE',
    path: '/books/{bookId}',
    handler: deleteBookByIdHandler,
  },
];

module.exports = routes;
