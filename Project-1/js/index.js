console.log("welcome to Notes App");
showNotes();

// if a user adds a note, then store it into local storage
let addBtn = document.getElementById('addBtn');

addBtn.addEventListener("click", function(e) {

    let addnodeTitle = document.getElementById('addnodeTitle')
    let addTxt = document.getElementById("addTxt");
    let notes = localStorage.getItem("notes");

    if (notes == null) {
        notesObj = [];
    } else {
        notesObj = JSON.parse(notes);
    }
    let myObj = {
        title: addnodeTitle.value,
        text: addTxt.value
    }
    notesObj.push(myObj);
    // notesObj.push(addnodeTitle.value, addTxt.value);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    // localStorage.setItem(notesObj[addnodeTitle.value], JSON.stringify(notesObj[addTxt.value]));
    addnodeTitle.value = "";
    addTxt.value = "";
    console.log(notesObj);
    showNotes();
});



// function to show notes from local storage

function showNotes() {
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    } else {
        notesObj = JSON.parse(notes);
    }
    let html = "";
    notesObj.forEach(function(element, index) {
        html += ` 
        <div class="noteCard my-2 mx-2 card" style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title">Title:-${element.title}</h5>
                <p class="card-text">Description:- ${element.text}</p>
                <button id="${index}" onclick="deleteNote(this.id)"class="btn btn-primary">Delete Note</button>
            </div>
        </div>`;
    });
    let noteElem = document.getElementById('notes');
    if (notesObj.length != 0) {
        noteElem.innerHTML = html;
    } else {
        noteElem.innerHTML = `Nothing to show!... click on "Add a Note" to add your notes...`;
    }

}


// function to delete a node from the local storage

function deleteNote(index) {
    console.log("I am deleting the note", index);
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    } else {
        notesObj = JSON.parse(notes);
    }
    notesObj.splice(index, 1);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    showNotes();

}

// Function to search the Note

let search = document.getElementById('searchTxt');
search.addEventListener("input", function() {
    let inputVal = search.value;
    console.log("Input search event is fired", inputVal);
    let notesCards = document.getElementsByClassName('noteCard');
    Array.from(notesCards).forEach(function(element) {
        let cardTxt = element.getElementsByTagName("p")[0].innerText;
        console.log(cardTxt);
        if (cardTxt.includes(inputVal)) {
            element.style.display = "block";
        } else { element.style.display = "none"; }
    });

});