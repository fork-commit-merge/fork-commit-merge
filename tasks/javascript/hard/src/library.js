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
        return this.books.filter((book) =>
            book.title.includes(query) || book.author.includes(query)
        )
    }

    filterBooks(criteria) {
        // TODO: Implement filter functionality
        let results = [];
        const keys = Object.keys(criteria);
        if (keys.length === 1) {
            if (keys[0] === "title") {
                results = this.books.filter((book) => book.title === criteria.title);
            } else {
                results = this.books.filter((book) => book.author === criteria.author);
            }
        } else {
            results = this.books.filter((book) =>
                book.title === criteria.title && book.author === criteria.author
            );
        }
        return results;
    }
}

module.exports = Library;
