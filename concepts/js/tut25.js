console.log("This is tutorial 25.js");


// create a new element
let divElem = document.createElement('div');

//Add text to the created element
let val = localStorage.getItem('text');
let text;
if (val == null) {
    text = document.createTextNode("This is my elemet, click it to edit");

} else {
    text = document.createTextNode(val);
}
divElem.appendChild(text);

// give the element id,class and style

divElem.setAttribute('id', 'elem');
divElem.setAttribute('class', 'elem');
divElem.setAttribute('style', 'border:2px solid red; width:200px;margin:34px;padding:23px');

//Grab the main container

let container = document.querySelector('.container');
let first = document.getElementById('myfirst');


//insert the element before the element with id first
container.insertBefore(divElem, first);

console.log(divElem, container, first);

//Add the event listerner to the created element 
divElem.addEventListener('click', function() {
    let noTextAreas = document.getElementsByClassName('textArea').length;
    if (noTextAreas == 0) {
        let html = elem.innerHTML;
        divElem.innerHTML = `<textarea class="form-control textArea" id="textArea" rows="3">${html}</textarea>`
    }
    // listen the blur event on textArea
    let textArea = document.getElementById('textArea');
    textArea.addEventListener('blur', function() {
        elem.innerHTML = textArea.value;
        localStorage.setItem('text', textArea.value);

    })
})