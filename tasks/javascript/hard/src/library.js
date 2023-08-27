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


//   searchBooks(query) {
//     // TODO: Implement search functionality
    
//   }

  searchBooks(query) {
    // TODO: Implement search functionality
    return this.books.filter(book => book.title.includes(query) || book.author.includes(query));
  }

  filterBooks(criteria) {
    // TODO: Implement filter functionality
    return this.books.filter(book => {
      let match = true;
      for (const key in criteria) {
          if (book[key] !== criteria[key]) {
              match = false;
              break;
          }
      }
      return match;
  });
  }
}

module.exports = Library;
