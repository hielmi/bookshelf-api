const { nanoid } = require('nanoid');
const books = require('./books');

const addBookHandler = (req, h) => {
  try {
    const {
      name, year, author, summary, publisher, pageCount,
      readPage, reading,
    } = req.payload;
    if (!name) {
      const response = h.response({
        status: 'fail',
        message: 'Gagal menambahkan buku. Mohon isi nama buku',
      }).code(400);
      return response;
    } if (readPage > pageCount) {
      const response = h.response({
        status: 'fail',
        message: 'Gagal menambahkan buku. readPage tidak boleh lebih besar dari pageCount',
      }).code(400);
      return response;
    }
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
    const response = h.response({
      status: 'success',
      message: 'Buku berhasil ditambahkan',
      data: {
        bookId: id,
      },
    });
    response.code(201);
    return response;
  } catch (err) {
    const response = h.response({
      status: 'error',
      message: 'Buku gagal ditambahkan',
    });
    response.code(500);
    return response;
  }
};

const gettingAllBooks = (req, h) => {
  const response = h.response({
    status: 'success',
    data: { books },
  });
  response.code(200);
  return response;
};

const gettingBookByIdHandler = (req, h) => {
  const { bookId } = req.params;

  const book = books.filter((b) => b.id === bookId)[0];

  if (book !== undefined) {
    const response = h.response({
      status: 'success',
      data: { book },
    });

    response.code(200);
    return response;
  }

  const response = h.response({
    status: 'fail',
    message: 'Buku tidak ditemukan',
  });

  response.code(404);
  return response;
};
const updateBookHandler = (req, h) => {
  try {
    const { bookId } = req.params;
    const {
      name, year, author, summary, publisher, pageCount, readPage, reading,
    } = req.payload;
    const updatedAt = new Date().toISOString();
    if (!name) {
      throw new Error('Gagal memperbarui buku. Mohon isi nama buku');
    }
    if (readPage > pageCount) {
      throw new Error('Gagal memperbarui buku. readPage tidak boleh lebih besar dari pageCount');
    }
    const index = books.findIndex((book) => book.id === bookId);
    if (index !== -1) {
      books[index] = {
        ...books[index],
        name,
        year,
        author,
        updatedAt,
        summary,
        pageCount,
        readPage,
        publisher,
        reading,
      };
      const response = h.response({
        status: 'success',
        message: 'Buku berhasil diperbarui',
      });

      response.code(200);
      return response;
    }
    const response = h.response({
      status: 'fail',
      message: 'Gagal memperbarui buku. Id tidak ditemukan',
    });

    response.code(404);
    return response;
  } catch (err) {
    console.log(err.name);
    const response = h.response({
      status: 'fail',
      message: err.message,
    });

    response.code(400);
    return response;
  }
};

module.exports = {
  addBookHandler, gettingAllBooks, gettingBookByIdHandler, updateBookHandler,
};
