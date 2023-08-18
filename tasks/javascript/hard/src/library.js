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
		return this.books.filter(
			(book) =>
				book.id === query ||
				book.title === query ||
				book.author === query ||
				book.title.includes(query) ||
				book.author.includes(query)
		);
	}

	filterBooks(criteria) {
		return this.books.filter(
			(books) =>
				books.title === criteria.title ||
				books.author === criteria.author
		);
	}
}

module.exports = Library;
