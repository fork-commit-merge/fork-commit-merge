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
        const lowerQuery = String(query).toLowerCase();
        return this.books.filter(book => {
            return (
                book.title.toLowerCase().includes(lowerQuery) ||
                book.author.toLowerCase().includes(lowerQuery) ||
                String(book.id) === lowerQuery
            );
        });
    }

    filterBooks(criteria) {
        return this.books.filter(book => {
            return Object.keys(criteria).every(key => {
                if (key === 'id') {
                    return book.id === criteria.id;
                }
                return (
                    typeof book[key] === 'string' &&
                    book[key].toLowerCase() === criteria[key].toLowerCase()
                );
            });
        });
    }
}

module.exports = Library;
