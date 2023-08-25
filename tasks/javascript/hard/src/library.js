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
       return this.books.filter((book) => {
        const title = book.title;
        const author = book.author;
        return title.includes(query)||author.includes(query);
       })

    }

    filterBooks(criteria) {
        // TODO: Implement filter functionality
        return this.books.filter((book) =>
        Object.entries(criteria).every(([key, value]) =>
            book[key] === value
        )
      );
    }

}

module.exports = Library;
