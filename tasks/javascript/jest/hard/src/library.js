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
    return this.books.find(book => book.id === id);
  }

  updateBook(id, title, author) {
    const bookIndex = this.books.findIndex(book => book.id === id);
    if (bookIndex !== -1) {
      this.books[bookIndex] = { id, title, author };
    }
    return this.books[bookIndex];
  }

  deleteBook(id) {
    const bookIndex = this.books.findIndex(book => book.id === id);
    if (bookIndex !== -1) {
      this.books.splice(bookIndex, 1);
    }
    return this.books;
  }

  searchBooks(query) {
    return this.books.filter(book => {
      const authorMatch = new RegExp(query, 'i').test(book.author);
      const titleMatch = new RegExp(query, 'i').test(book.title);

      return authorMatch || titleMatch;
    });
  }

  filterBooks(criteria) {
    const chosenCriteria = criteria.title || criteria.author;

    if (chosenCriteria) return this.searchBooks(chosenCriteria);

    return [];
  }
}

module.exports = Library;
