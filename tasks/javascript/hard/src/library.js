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
        
        const bookMatches = this.books.filter(book=>Object.keys(book).some(key=>{
            if(String(book[key]).includes(query))return true
            else return false
        }))
        return bookMatches;
    }

    filterBooks(criteria) {
        // TODO: Implement filter functionality
        const bookFilter = this.books.filter(book=>{
            if(Object.keys(criteria).every(key=>String(book[key])===String(criteria[key])))return true
            else return false
        }
            )
        return bookFilter;


    }
}

module.exports = Library;
