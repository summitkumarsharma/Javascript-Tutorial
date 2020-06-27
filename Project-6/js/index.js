console.log("This is Project-6");

// intialize params count
let addedParamsCount = 0;

// utility finction to get DOM Element from string

function getElementFromString(string) {
    let div = document.createElement('div');
    div.innerHTML = string;
    return div.firstElementChild;

}

// Hide the custom parametersBox initially
let parametersBox = document.getElementById('parametersBox');
parametersBox.style.display = 'none';

// if the user clicks on params radio then hide the custom parameters box

let paramsRadio = document.getElementById('paramsRadio');
paramsRadio.addEventListener('click', () => {
    document.getElementById('requestJsonBox').style.display = 'none';
    document.getElementById('parametersBox').style.display = 'block';

});

// if the user clicks on custon params radio then hide the request jsonbox

let jsonRadio = document.getElementById('jsonRadio');
jsonRadio.addEventListener('click', () => {
    document.getElementById('requestJsonBox').style.display = 'block';
    document.getElementById('parametersBox').style.display = 'none';

});


// if the user clicks on + button, add more parameters

let addParam = document.getElementById('addParam');
addParam.addEventListener('click', () => {
    let params = document.getElementById('params');
    let string = ` <div class="form-group row">
                        <label for="inputPassword" class="col-sm-2 col-form-label">Parameter${addedParamsCount+2}</label>
                        <div class="col-md-4">
                            <input type="text" class="form-control" id="parameterKey${addedParamsCount+2}" placeholder ="Enter Parameter${addedParamsCount+2} Key">
                        </div>
                        <div class="col-md-4">
                        <input type="text" class="form-control" id="parameterValue${addedParamsCount+2}"placeholder ="Enter Parameter${addedParamsCount+2}Value">
                        </div>
                        <button class="btn btn-sm btn-primary deleteParam">-</button>
                    </div>`;


    // convert the element string to DOM Node

    let paramElement = getElementFromString(string);
    params.appendChild(paramElement)
        // console.log(paramElement);
    addedParamsCount++;
    // Add an event Listener to remove the parameter on clicking - button

    let deleteParam = document.getElementsByClassName('deleteParam');
    for (item of deleteParam) {
        item.addEventListener('click', (e) => {
            e.target.parentElement.remove();

        })
    }
});


// if the user clicks on submit button

let submit = document.getElementById('submit');

submit.addEventListener('click', () => {

    // show the user please wait .... in the  response box
    document.getElementById('responsePrism').innerHTML = "Please wait....... fetching response......";

    // fetch all the  values the userentered
    let url = document.getElementById('url').value;
    let requestType = document.querySelector("input[name='requestType']:checked").value;
    let contentType = document.querySelector("input[name='contentType']:checked").value;



    // if the user clicks on params option instead of json then collect all the parameters
    if (contentType == 'prams') {
        data = {};
        for (i = 0; i < addedParamsCount; i++) {
            if (document.getElementById('parameterKey' + (i + 1)) != undefined) {
                let key = document.getElementById('parameterKey' + (i + 1)).value;
                let value = document.getElementById('parameterValue' + (i + 1)).value
                data[key] = value;
            }
        }
        data = JSON.stringify(data);
    } else {

        data = document.getElementById('requestJsonText').value;

    }

    // log all the values for debugging
    console.log("URL is", url);
    console.log("Request type  is", requestType);
    console.log("Content type is ", contentType);
    console.log("Data  is ", data);


    // if the request is get. then invoke the fetch api

    if (requestType == 'GET') {

        fetch(url, { method: 'GET' }).then(response => response.text()).then(text => { document.getElementById('responsePrism').innerHTML = text;
            Prism.highlightAll(); });
    } else {

        fetch(url, {
            method: 'POST',
            body: data,
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        }).then(response => response.text()).then(text => {
            document.getElementById('responsePrism').innerHTML = text;
            Prism.highlightAll();
        });
    }
});