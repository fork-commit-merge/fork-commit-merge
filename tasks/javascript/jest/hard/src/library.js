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
        return this.books.filter((book) => {
            const value = query.toString().toLowerCase();
            return (
                book.title?.toLowerCase().includes(value) ||
                book.author?.toLowerCase().includes(value) ||
                book.id?.toString() === value
      );
    });
    }

    filterBooks(criteria) {
        return this.books.filter((book) => {
            return Object.entries(criteria).every(([key, value]) => {
                const propValue = book[key];
                if (typeof propValue === "string" && typeof value === "string") {
                    return propValue.toLowerCase().includes(value.toLowerCase());
                }
                return propValue === value;
      });
    });
    }
}

module.exports = Library;
