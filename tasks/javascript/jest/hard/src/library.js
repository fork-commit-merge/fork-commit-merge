// JavaScript - Hard

class Library {
  constructor() {
    this.books = [];
  }

  createBook(title, author) {
    const book = {
      title,
      author,
      id: this.books.length + 1,
    };
    this.books.push(book);
    return book;
  }

  getBook(id) {
    return this.books.find((book) => book.id === id);
  }

  updateBook(id, title, author) {
    const bookIndex = this.books.findIndex((book) => book.id === id);
    if (bookIndex !== -1) {
      this.books[bookIndex] = { id, title, author };
    }
    return this.books[bookIndex];
  }

  deleteBook(id) {
    const bookIndex = this.books.findIndex((book) => book.id === id);
    if (bookIndex !== -1) {
      this.books.splice(bookIndex, 1);
    }
    return this.books;
  }

  searchBooks(query) {
    if (query === undefined || query === null) return []; // if no query is provided

    return this.books.filter((book) => {
      const bookQuery = query.toString().toLowerCase(); // standardize the query

      return (
        book.id.toString() === bookQuery ||
        book.title.toLowerCase().includes(bookQuery) ||
        book.author.toLowerCase().includes(bookQuery)
      ); // return any matches
    });
  }


  filterBooks(criteria) {
    if (criteria === undefined || criteria === null) return []; // if no criteria

    return this.books.filter((book) => {
      if (criteria.id && book.id !== criteria.id) {
        return false; // if does not match the criteria id return false
      }

      if (
        criteria.title &&
        !book.title.toLowerCase().includes(criteria.title.toLowerCase())
      ) {
        return false; // if does not include the title
      }

      if (
        criteria.author &&
        !book.author.toLowerCase().includes(criteria.author.toLowerCase())
      ) {
        return false; // if the author does not match
      }

      return true; // otherwise true
    });
  }
}

module.exports = Library;
