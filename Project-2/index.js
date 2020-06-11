console.log("This is Library website Project using Javascript Prototype");

//Create a book constructor
function Book(name, author, type) {
    this.name = name;
    this.author = author;
    this.type = type;
}

// Display constructor

function Display() {


}

// Add Methods to display constructor

Display.prototype.add = function(book) {
    console.log("Adding to UI");
    localStorage.setItem("Book", JSON.stringify(book));
    // let book = JSON.parse(localStorage.getItem('Book'));
    let tableRowData = document.getElementById("tableRowData");
    let uiString = `<tr>
                <th scope="row ">${cnt}</th>
                <td>${book.name}</td>
                <td>${book.author}</td>
                <td>${book.type}</td>
            </tr>`;
    tableRowData.innerHTML += uiString;
}
Display.prototype.clear = function() {
    let libraryForm = document.getElementById("libraryForm");
    libraryForm.reset();
}
Display.prototype.validate = function(book) {
    if (book.name.length < 2 || book.author.length < 2) {
        return false;
    } else { return true }
}
Display.prototype.show = function(type, showMessage) {
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
        display.clear();
        display.show('success', 'we have added the book successfuly');

    } else {
        display.show('warning', 'sorry book canot be added');
    }
}