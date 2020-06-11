console.log("This is Tutorial 42.js");

// button with id myBtn
let myBtn = document.getElementById('myBtn');

// div with id content
let content = document.getElementById('content');

// function getData() {
//     console.log("started getData");
//     let url = "test.txt";
//     fetch(url).then((response) => {
//         console.log("inside first then");
//         return response.text();
//     }).then((data) => {
//         console.log("inside second then");
//         console.log(data);
//     })
// }

// function getData() {
//     console.log("started getData");
//     let url = "https://api.github.com/users";
//     fetch(url).then((response) => {
//         console.log("inside first then");
//         return response.json();
//     }).then((data) => {
//         console.log("inside second then");
//         console.log(data);
//     })
// }

// console.log("Before running getData");
// getData();
// console.log("After running getData");

function postData() {
    console.log("started postData"); //JSON.stringify(data)
    let url = "http://dummy.restapiexample.com/api/v1/create";
    let data = '{"name":"test1234","salary":"123","age":"23"}';
    params = {
        method: 'post',
        headers: { 'content-type': 'application/json' },
        body: data

    }
    fetch(url, params).then((response) => {
        console.log("inside first then");
        return response.json();
    }).then((data) => {
        console.log("inside second then");
        console.log(data);
    })
}
console.log("Before running postData");
postData();
console.log("After running postData");