    searchBooks(query) {
        const queryRegex = new RegExp(query, "i");
        return this.books.filter((book) => 
            queryRegex.test(book.title) || queryRegex.test(book.author)
        );
    }

    filterBooks(criteria) {
        return this.books.filter((book) => 
            Object.keys(criteria).every((key) => book[key] === criteria[key])
        );
    }

