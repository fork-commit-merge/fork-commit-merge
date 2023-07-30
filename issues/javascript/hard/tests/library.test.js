// JavaScript - Hard

const Library = require("../src/library");

describe("Library", () => {
    let library;

    beforeEach(() => {
        library = new Library();
    });

    test("searchBooks", () => {
        library.createBook("Title 1", "Author 1");
        library.createBook("Title 2", "Author 2");

        let results = library.searchBooks("Title 1");
        expect(results.length).toBe(1);
        expect(results[0].title).toBe("Title 1");

        results = library.searchBooks("Author 2");
        expect(results.length).toBe(1);
        expect(results[0].author).toBe("Author 2");

        results = library.searchBooks("Title");
        expect(results.length).toBe(2);
    });

    test("filterBooks", () => {
        library.createBook("Title 1", "Author 1");
        library.createBook("Title 2", "Author 2");

        let results = library.filterBooks({ title: "Title 1" });
        expect(results.length).toBe(1);
        expect(results[0].title).toBe("Title 1");

        results = library.filterBooks({ author: "Author 2" });
        expect(results.length).toBe(1);
        expect(results[0].author).toBe("Author 2");

        results = library.filterBooks({ title: "Title 1", author: "Author 1" });
        expect(results.length).toBe(1);
        expect(results[0].title).toBe("Title 1");
        expect(results[0].author).toBe("Author 1");
    });
});
