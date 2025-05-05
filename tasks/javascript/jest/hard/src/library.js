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
        if (typeof query === 'string') {
            return this.books.filter((book) =>
                book.title.toLowerCase().includes(query.toLowerCase()) ||
                book.author.toLowerCase().includes(query.toLowerCase())
            );
        }
    
        return this.books.filter((book) =>
            Object.entries(query).every(([key, value]) => {
                const field = book[key];
                if (typeof field === 'string' && typeof value === 'string') {
                    return field.toLowerCase() === value.toLowerCase();
                }
                return field === value;
            })
        );
    }    

    filterBooks(criteria) {
        return this.books.filter((book) =>
            Object.entries(criteria).every(([key, value]) => {
                const field = book[key];
                if (typeof field === 'string' && typeof value === 'string') {
                    return field.toLowerCase().includes(value.toLowerCase());
                }
                return field === value;
            })
        );
    }
}

module.exports = Library;
