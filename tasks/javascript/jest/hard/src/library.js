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
    // Convert query to a lowercase string for case-insensitive matching
    const lowerCaseQuery = String(query).toLowerCase();
    
    // Filter books where the title, author, or ID contains the query
    return this.books.filter(book => 
      String(book.title).toLowerCase().includes(lowerCaseQuery) ||
      String(book.author).toLowerCase().includes(lowerCaseQuery) ||
      String(book.id) === lowerCaseQuery
    );
  }

  filterBooks(criteria) {
    // Filter books that match every key-value pair in the criteria object
    return this.books.filter(book => {
      return Object.keys(criteria).every(key => book[key] === criteria[key]);
    });
  }
}

module.exports = Library;
