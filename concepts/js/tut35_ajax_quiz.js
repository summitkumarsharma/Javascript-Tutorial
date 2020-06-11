console.log("This ia Ajax tutorial quiz....");

let fetchBtnfruit = document.getElementById('fetchBtnfruit');
fetchBtnfruit.addEventListener("click", fetchfruitHandler);


function fetchfruitHandler() {

    console.log("you have clicked the fetchBtnfruit Button");

    // instantiate the xhr object
    const xhr = new XMLHttpRequest();

    // open the object


    xhr.open('GET', 'quiz.json', true);


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
            for (let key in obj.fruits) {
                str += `<li>${obj.fruits[key]}</li>`;
            }
            let fruitlist = document.getElementById('fruitlist');
            fruitlist.innerHTML = str;

        } else {
            console.error("some error occurred");
        }
    }

    // send the request

    xhr.send();


    console.log("we are done fetching fruits");

}






let popBtnvegetables = document.getElementById('popBtnvegetables');
popBtnvegetables.addEventListener("click", fetchVegHandler);

function fetchVegHandler() {

    console.log("you have clicked the fetchVegHandler Button");

    // instantiate the xhr object
    const xhr = new XMLHttpRequest();

    // open the object


    xhr.open('GET', 'quiz.json', true);


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
            for (let key in obj.vegetables) {
                str += `<li>${obj.vegetables[key]}</li>`;
            }
            let veglist = document.getElementById('veglist');
            veglist.innerHTML = str;

        } else {
            console.error("some error occurred");
        }
    }

    // send the request

    xhr.send();


    console.log("we are done fetching vegetables");

}