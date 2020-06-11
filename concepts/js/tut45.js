console.log("This is tutorial 45.js Exercise 5 solution on word api")


// button with id myBtn 
let myBtn = document.getElementById('myBtn');

myBtn.addEventListener("click", getData);

// div with id content
let content = document.getElementById('content');


function getData() {
    console.log("started getData");
    let url = "exercise5.json";
    fetch(url).then((response) => {
        console.log("inside first then");
        return response.json();
    }).then((data) => {
        console.log("inside second then");
        console.log(data);
        let obj = data.results;
        console.log(obj);
        let str = ""
        obj.forEach(element => {
            console.log(element)
            str += `<li>one of the definition of example is - ${element["definition"]}</li>`;
        });
        content.innerHTML = str;
    })
}