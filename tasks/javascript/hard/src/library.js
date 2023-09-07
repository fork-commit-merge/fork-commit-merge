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
        if(!query) return [];
        return this.books.filter( book =>
            book.title.toLowerCase().includes(query.toLowerCase()) ||
            book.author.toLowerCase().includes(query.toLowerCase()) 
            );

    }

    filterBooks(criteria) {
        // TODO: Implement filter functionality
        let filteredBooks = [...this.books];
        
        if (criteria.title) {
            filteredBooks = filteredBooks.filter(book => 
                book.title.toLowerCase().includes(criteria.title.toLowerCase())
            );
        }
        
        if (criteria.author) {
            filteredBooks = filteredBooks.filter(book => 
                book.author.toLowerCase().includes(criteria.author.toLowerCase())
            );
        }

        return filteredBooks;
    }
  
}

module.exports = Library;
