const { nanoid } = require('nanoid');
const books = require('./books');
const ValidationData = require('./validation');

const addBookHandler = (request, h) => {
  try {
    const {
      name, year, author, summary, publisher, pageCount,
      readPage, reading,
    } = request.payload;
    const id = nanoid(16);
    const insertedAt = new Date().toISOString();
    const updatedAt = insertedAt;
    const finished = false;
    const newBooks = {
      id,
      name,
      year,
      author,
      summary,
      publisher,
      pageCount,
      readPage,
      finished,
      reading,
      insertedAt,
      updatedAt,
    };
    books.push(newBooks);

    const isSuccess = books.filter((book) => book.id === id);

    if (isSuccess) {
      const response = h.response({
        status: 'success',
        message: 'Catatan berhasil ditambahkan',
        data: {
          noteId: id,
        },
      });
      response.code(201);
      return response;
    }
    throw new ValidationData('Buku gagal ditambahkan', 500, 'error');
  } catch (err) {
    console.log(err.name);
    const response = h.response({
      // status: err.status,
      message: err.message,
    });
    response.code(err.responseCode);
    return response;
  }
};

module.exports = addBookHandler;
