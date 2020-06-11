console.log('Welcome to tutorial 14');
/*
element selectors:
1. Single element selector
2. Multi element selector

*/

// 1. Single element selector

let element = document.getElementById('myfirst');
// element = element.className;
// element = element.childNodes;
// element = element.children;
element = element.parentNode;
// element = element.parentElement;
// element.style.color = 'red';
// element.innerText = 'Harry is a good boy';
// element.innerHTML = '<b>Harry is a good boy</b>';
// console.log(element.innerText);
console.log(element);


let sel = document.querySelector('#myfirst');
// sel = document.querySelector('.child');
// sel = document.querySelector('div');
// sel.style.color = 'green';
// console.log(sel);

// 2. Multi element selector

let elems = document.getElementsByClassName('childul');
// elems = document.getElementsByClassName('container');
// elems = document.getElementsByTagName('div');
// console.log(elems);

// for (let index = 0; index < elems.length; index++) {
//     const element = elems[index];
//     console.log(element);
//     element.style.color = 'blue';
// }

// Array.from(elems).forEach(element => {
//     console.log(element);
//     element.style.color = 'blue';
// });


// console.log(elems[0].getElementsByClassName('child'));