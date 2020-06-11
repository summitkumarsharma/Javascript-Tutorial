console.log("This Is ES6 version of Project2");

// creating book class
class Book {
    constructor(name, author, type) {
        this.name = name;
        this.author = author;
        this.type = type;
    }

}
// creating display class
class Display {

    // function to add book to the local storage
    add(book) {
        // console.log("Adding to UI");
        console.log("Adding to localStorage");
        console.log(book);
        let books = localStorage.getItem("books");
        let booksObj;
        if (books == null) {
            booksObj = [];
        } else {
            booksObj = JSON.parse(books);
        }
        let myBooksObj = {
            name: book.name,
            author: book.author,
            type: book.type
        }
        booksObj.push(myBooksObj);
        localStorage.setItem("books", JSON.stringify(booksObj));
        console.log(booksObj);
    }

    // function to display book in the user interface

    get() {
        console.log("Adding to UI");
        let books = localStorage.getItem("books");
        let booksObj;
        if (books == null) {
            booksObj = [];
        } else {
            booksObj = JSON.parse(books);
        }
        let uiString = "";
        booksObj.forEach(function(element, index) {
            uiString += `<tr>
                            <th scope="row ">${index +1}</th>
                            <td>${element.name}</td>
                            <td>${element.author}</td>
                            <td>${element.type}</td>
                            <td> <button id="${index}"onclick="deletebook(this.id)" class="btn btn-sm btn-primary">Delete book</button></td>
                           
                        </tr>`;
        });
        let tableRowData = document.getElementById("tableRowData");
        if (booksObj.length != 0) {
            tableRowData.innerHTML = uiString;
        } else {
            tableRowData.innerHTML = `Nothing to show! Click on the "Add Book" button above to add your books to library.`;
        }
    }

    // function to clear book in the user interface
    clear() {
        let libraryForm = document.getElementById("libraryForm");
        libraryForm.reset();
    }

    // function to validate book in the user interface
    validate(book) {
        if (book.name.length < 2 || book.author.length < 2) {
            return false;
        } else { return true }
    }

    // function to show message in the user interface
    show(type, showMessage) {
        let message = document.getElementById('message');
        message.innerHTML = `<div class="alert alert-${type} alert-dismissible fade show" role="alert">
        <strong>${type}!</strong> ${showMessage}
        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>`;
        setTimeout(() => {
            message.innerHTML = '';
        }, 2000);

    }
}

// Add submit event listener to the libraryForm

let libraryForm = document.getElementById("libraryForm");
libraryForm.addEventListener("submit", libraryFormSubmitHandler);
let cnt = 0;

function libraryFormSubmitHandler(e) {
    console.log("we have submitted library form");
    e.preventDefault();
    cnt++;
    console.log("Number of count=" + cnt);
    let name = document.getElementById("bookName").value;
    let author = document.getElementById("authorName").value;

    let fiction = document.getElementById("fiction");
    let programming = document.getElementById("progamming");
    let cooking = document.getElementById("cooking");
    let type;
    if (fiction.checked) {
        type = fiction.value;
    } else if (programming.checked) {
        type = programming.value;
    } else if (cooking.checked) {
        type = cooking.value;
    }
    let book = new Book(name, author, type);
    console.log(book);
    let display = new Display();
    if (display.validate(book)) {
        display.add(book);
        display.get();
        display.clear();
        display.show('success', 'we have added the book successfuly');

    } else {
        display.show('warning', 'sorry book canot be added');
    }
}

// code to call get book list when the index page loads
let display = new Display();
display.get();


// Function to delete a book
function deletebook(index) {
    console.log("I am deleting book at index = ", index);

    let books = localStorage.getItem("books");
    if (books == null) {
        booksObj = [];
    } else {
        booksObj = JSON.parse(books);
    }

    booksObj.splice(index, 1);
    localStorage.setItem("books", JSON.stringify(booksObj));
    let display = new Display();
    display.get();
}