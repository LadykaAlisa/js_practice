
const Library = {
    books: [],
    addBook: function(bookName, bookAuthor, bookYear, bookId) {
        const newBook = {
            name: bookName,
            author: bookAuthor,
            year: bookYear,
            id: bookId
        };
        this.books.push(newBook);
    },
    printBookInfo: function(bookId) {
        const book = this.books.find(book => book.id === bookId);
        if (book) {
            console.log(`Ім'я: ${book.name}, Автор: ${book.author}, Рік: ${book.year}`);
        } else {
            console.log(`Книга з id ${bookId} не знайдена.`);
        }
    },
    printAllBooks: function() {
        console.log("Інформація про всі книги в бібліотеці:");
        this.books.forEach(book => {
            console.log(`Ім'я: ${book.name}, Автор: ${book.author}, Рік: ${book.year}, ID: ${book.id}`);
        });
    }
};


Library.addBook("Harry Potter", "J.K. Rowling", 1997, 1);
Library.addBook("To Kill a Mockingbird", "Harper Lee", 1960, 2);
Library.addBook("The Great Gatsby", "F. Scott Fitzgerald", 1925, 3);


Library.printAllBooks();

Library.printBookInfo(2);





