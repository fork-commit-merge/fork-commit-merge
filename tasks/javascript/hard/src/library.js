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
        const result = []
        for(let book of this.books){
            if(book.title.includes(query) || book.author.includes(query)){
                result.push(book);
            }
        }
        return result;
    }

    filterBooks(criteria) {
        const res = [];
        for(let book of this.books){
            let match = true;
            for(let key in criteria){
                if(book[key] !== criteria[key]){
                    match = false;
                    break;
                }
            }
            if(match){
                res.push(book);
            }
        }
        return res;
    }
}

module.exports = Library;
