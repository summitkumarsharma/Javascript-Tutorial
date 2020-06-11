console.log("This is Ajax Tutorial in one video");


let fetchBtn = document.getElementById('fetchBtn');
fetchBtn.addEventListener("click", buttonClickHandler);

function buttonClickHandler() {

    console.log("you have clicked the fetchbtn");

    // instantiate the xhr object
    const xhr = new XMLHttpRequest();

    // open the object

    // xhr.open('GET', 'test.txt', true);

    // xhr.open('GET', 'https://jsonplaceholder.typicode.com/todos/1', true);

    xhr.open('POST', 'http://dummy.restapiexample.com/api/v1/create', true);
    xhr.getResponseHeader('content-type', 'application/json');

    // what to do on progress- optional
    xhr.onprogress = function() {
        console.log("On progress");
    }

    // ready state change

    xhr.onreadystatechange = function() {
        console.log("The ready state is", xhr.readyState);
    }

    // what to do when response is ready
    xhr.onload = function() {
        if (this.status === 200) {
            console.log(this.responseText);

        } else {
            console.error("some error occurred");
        }
    }

    // send the request
    params = `{"name": "test13", "salary": "1231", "age": "231"}`;
    // xhr.send();
    xhr.send(params);

    console.log("we are done");

}



let popBtn = document.getElementById('popBtn');
popBtn.addEventListener("click", popkHandler);


function popkHandler() {

    console.log("you have clicked the popHandler Button");

    // instantiate the xhr object
    const xhr = new XMLHttpRequest();

    // open the object


    xhr.open('GET', 'http://dummy.restapiexample.com/api/v1/employees', true);


    // what to do on progress- optional
    xhr.onprogress = function() {
        console.log("On progress");
    }

    // ready state change

    xhr.onreadystatechange = function() {
        console.log("The ready state is", xhr.readyState);
    }

    // what to do when response is ready
    xhr.onload = function() {
        if (this.status === 200) {
            let obj = JSON.parse(this.responseText);
            console.log(obj);
            let str = "";
            for (key in obj) {
                str += `<li>${obj[key].employee_name}</li>`;
            }
            let list = document.getElementById('list');
            list.innerHTML = str;

        } else {
            console.error("some error occurred");
        }
    }

    // send the request

    xhr.send();


    console.log("we are done fetching employees");

}