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
            return (
                book.title.toLowerCase().includes(query) ||
                book.author.toLowerCase().includes(query) ||
                book.id.toString().includes(query)
            );
        });
    }

    filterBooks(criteria) {
        return this.books.filter(book => {
            for (const key in criteria) {
                if (criteria.hasOwnProperty(key)) {
                    const filterValue = criteria[key].toLowerCase();
                    if (!book[key].toLowerCase().includes(filterValue)) {
                        return false;
                    }
                }
            }
            return true;
        });
    }
}

module.exports = Library;
