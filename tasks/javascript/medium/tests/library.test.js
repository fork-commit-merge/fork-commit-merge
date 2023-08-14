// JavaScript - Medium

const Library = require("../src/library");

describe("Library", () => {
    let library;

    beforeEach(() => {
        library = new Library();
    });

    test("createBook", () => { //The expectation for the title is set to "Title 1" which matches what was created.
        const newBook = library.createBook("Title 1", "Author 1");
        expect(newBook.title).toBe("Title 1");
        expect(newBook.author).toBe("Author 1");
    });

    test("getBook", () => { //The expectation for the title is set to "Title 1" to match the book that was added.
        library.createBook("Title 1", "Author 1");
        const book = library.getBook(1);
        expect(book.title).toBe("Title 1");
        expect(book.author).toBe("Author 1");
    });

    test("updateBook", () => { //The expectation for the title is set to "Title 2" which matches the updated title.
        library.createBook("Title 1", "Author 1");
        const updatedBook = library.updateBook(1, "Title 2", "Author 2");
        expect(updatedBook.title).toBe("Title 2");
        expect(updatedBook.author).toBe("Author 2");
    });

    test("deleteBook", () => { //The ID for deletion is changed to 1 which should match the book that was added.
        library.createBook("Title 1", "Author 1");
        const remainingBooks = library.deleteBook(1);
        expect(remainingBooks.length).toBe(0);
    });

});
