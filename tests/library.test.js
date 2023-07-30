// MEDIUM ISSUE

const Library = require("../src/library");

describe("Library", () => {
    let library;

    beforeEach(() => {
        library = new Library();
    });

    test("createBook", () => {
        const newBook = library.createBook("Title 1", "Author 1");
        expect(newBook.title).toBe("Title 1");

        const anotherNewBook = library.createBook("Title 2", "Author 2");
        expect(anotherNewBook.title).toBe("Title 2");
        expect(anotherNewBook.author).toBe("Author 2");
    });

    test("getBook", () => {
        library.createBook("Title 1", "Author 1");
        console.log(library.books[0].id); //Check the id (logic used : array.length()+1)
        library.createBook("Title 2", "Author 2");
        const book1 = library.getBook(1); // length + 1 in the books array, 0 indexing is converted to 1 index.
        const book2 = library.getBook(2); // length + 1 in the books array, 0 indexing is converted to 1 index.
        expect(book1.title).toBe("Title 1");
        expect(book2.title).toBe("Title 2");
    });

    test("updateBook", () => {
        library.createBook("Title 1", "Author 1");
        const updatedBook = library.updateBook(1, "Title 3", "Author 3"); // as the id is 1 meaning the object in the 0th index is returned, so it will update Title 1 to Title 2.
        expect(updatedBook.title).toBe("Title 3");
        

        library.createBook("Title 2, Author 2");
        const nextUpdate = library.updateBook(2, "Title 4", "Author 4");
        expect(nextUpdate.title).toBe("Title 4");
    });

    test("deleteBook", () => {
        library.createBook("Title 1", "Author 1");
        const remainingBooks = library.deleteBook(1);  // id 2 passed is incorrect as in 1 based indexing the current length is 1 and the id of the object at 0th index is 1. So the id set to delete must be 1
        expect(remainingBooks.length).toBe(0);
    });
});
