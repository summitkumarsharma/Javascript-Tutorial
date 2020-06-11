// create a class library and implement the following:
// constructor must take the book list as an argument
// getBookList()
// issueBook(bookname, user)
// returnBook(bookname)


console.log("This is tut36.js");

class Library {
    constructor(bookList) {
        this.bookList = bookList;
        this.issuedBooks = {};
    }

    getBookList() {
        this.bookList.forEach(element => {
            console.log(element);
        });
    }

    issueBook(bookname, user) {
        if (this.issuedBooks[bookname] == undefined) {
            this.issuedBooks[bookname] = user;
        } else {
            console.log("This book is already issued!");
        }
    }

    returnBook(bookname) {
        delete this.issuedBooks[bookname];
    }
}




let book = new library("abc", "xyz");
console.log(book.getBookList("abc"));