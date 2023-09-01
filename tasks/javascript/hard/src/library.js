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
        query = query.toLowerCase();
        return this.books.filter(book => {
            const titleMatch = book.title.toLowerCase().includes(query);
            const authorMatch = book.author.toLowerCase().includes(query);
            return titleMatch || authorMatch;
        });
    }


    filterBooks(criteria) {
        return this.books.filter(book => {
            let meetsCriteria = true;
            if (criteria.title) {
                meetsCriteria = meetsCriteria && (book.title === criteria.title);
            }
            if (criteria.author) {
                meetsCriteria = meetsCriteria && (book.author === criteria.author);
            }
            return meetsCriteria;
        });
    }
}

module.exports = Library;
