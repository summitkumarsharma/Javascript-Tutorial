console.log('this is tut 16');
// let element = document.createElement('li'); //first of all create an element which we have to create
// let element = document.createElement('div'); //first of all create an element which we have to create
// let text = document.createTextNode('I am a text node'); // then create the text node
// let text = document.createTextNode('this is a dummy div created by me'); // then create the text node
// element.appendChild(text); // then add the text node to the element

// Add a class name to the li element
// element.className = 'childul';
// element.id = 'createdLi';
// element.setAttribute('title', 'mytitle');
// element.innerText = '<b>Hello this is created by sumit</b>';
// element.innerHTML = '<b>Hello this is created by sumit</b>';

// let ul = document.querySelector('ul.this');
// let ul = document.querySelector('div.no');
// ul.appendChild(element); //finally add the element to the place where we have to insert that element
// console.log(ul);
// console.log(element);

// let elem2 = document.createElement('h3');
// elem2.id = 'elem2';
// elem2.className = 'elem2';
// let tnode = document.createTextNode('This is a created node for elem2');
// elem2.appendChild(tnode);
// ul.appendChild(elem2);
// console.log(elem2);

// element.replaceWith(elem2);
// let myul = document.getElementById('myul');
// myul.replaceChild(element, document.getElementById('fui'));
// myul.removeChild(document.getElementById('lui'));
// let pr = elem2.hasAttribute('href');
// elem2.removeAttribute('id');
// elem2.setAttribute('title', 'myelem2title');
// console.log(elem2, pr);

// quick quiz
// create a heading element with text as "Go to CodeWithHarry" and create an a tag outside it with href = "https://www.codewithharry.com"

function insertAfter(referenceNode, newNode) {
    referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
}
let elem3 = document.createElement('h4');
elem3.id = 'elem2';
elem3.className = 'elem2';
let tnode1 = document.createTextNode('Go to CodeWithHarry');
elem3.appendChild(tnode1);
let el = document.querySelector('.no');
el.insertAfter(elem3); //finally add the element to the place where we have to insert that element

console.log(el);
let tag = document.createElement('p');
let tnode2 = document.createTextNode('href = "https://www.codewithharry.com"');
tag.appendChild(tnode2);
el = document.querySelector('#no');
insertAfter(el, tag);