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
    // TODO: Implement search functionality
    const book_index = this.books.findIndex((book) => book.title == query);
    if (book_index != -1){
      return this.books[book_index]
    }
  }

  filterBooks(criteria) {
    // TODO: Implement filter functionality
    const keys = Object.keys(criteria);
    return this.books.filter((book) => {
      let key_len = keys.length;
      for (let i = 0 ; i < key_len ; i++){
        if((book[keys[i]] != criteria[keys[i]])){
          return false
        }
      }
      return true
      
    })
  
  }
}

module.exports = Library;
