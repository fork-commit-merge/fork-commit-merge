// JavaScript - Hard

class Library {
  constructor() {
    this.books = [];
    this.totalBooks = 0;
  }

  createBook(title, author) {
    const book = {
      title,
      author,
      id: this.books.length + 1,
    };
    this.books.push(book);
    this.totalBooks++;
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
    query = query.trim().toLowerCase();
    const result = this.books.filter((book) => {
      // case-insensitive and trim spaces
      const title = book.title.trim().toLowerCase();
      const author = book.author.trim().toLowerCase();
      return title.includes(query) || author.includes(query);
    });
    return result;
  }

  filterBooks(criteria) {
    const result = this.books.filter((book) => {
      // case-insensitive and trim spaces
      const title = book.title.trim().toLowerCase();
      const author = book.author.trim().toLowerCase();
      return (
        title == criteria?.title?.trim()?.toLowerCase() ||
        author == criteria?.author?.trim()?.toLowerCase()
      );
    });
    return result;
  }
}

module.exports = Library;