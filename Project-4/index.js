console.log("This is Project-4 form validation using Regular Expressions");


let username = document.getElementById('username');
let email = document.getElementById('email');
let phone = document.getElementById('phone');

// console.log(username, email, phone);

let validUsername = false;
let validEmail = false;
let validPhone = false;

let success = document.getElementById('success');
let failure = document.getElementById('failure');

$('#failure').hide();
$('#success').hide();

username.addEventListener('blur', () => {
    console.log("username is blurred");
    // validate username
    let regx = /^[a-zA-Z]([0-9a-zA-Z]){2,10}$/
    let str = username.value;
    console.log(regx, str);
    if (regx.test(str)) {
        console.log("Your username is valid ");
        username.classList.remove('is-invalid');
        validUsername = true;
    } else {
        console.log("Your username is not valid ");
        username.classList.add('is-invalid');
        validUsername = false;
    }
});


email.addEventListener('blur', () => {
    console.log("email is blurred");
    // vaidate email
    let regx = /^([_\-\.0-9a-zA-Z]+)\@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/
    let str = email.value;
    console.log(regx, str);
    if (regx.test(str)) {
        console.log("Your email is valid ");
        email.classList.remove('is-invalid');
        validEmail = true;
    } else {
        console.log("Your email is not valid ");
        email.classList.add('is-invalid');
        validEmail = false;
    }
});
phone.addEventListener('blur', () => {
    console.log("phone is blurred");
    // validate phone
    let regx = /^([0-9]){10}$/
    let str = phone.value;
    console.log(regx, str);
    if (regx.test(str)) {
        console.log("Your phone is valid ");
        phone.classList.remove('is-invalid');
        validPhone = true;
    } else {
        console.log("Your phone is not valid ");
        phone.classList.add('is-invalid');
        validPhone = false;
    }
});


let submit = document.getElementById('submit');
submit.addEventListener('click', (e) => {
    e.preventDefault();

    console.log("you have clicked on submit form button");

    if (validUsername && validEmail && validPhone) {
        console.log('username,email and phone is valid, we are submitting  the form');
        // success.classList.add('show');
        // failure.classList.remove('show');
        $('#success').show();
        // $('#failure').hide();
        // let travelForm = document.getElementById('travelForm');
        // travelForm.reset();
    } else {
        console.log('one out of username,email and phone is not valid, please correct the errors and then submit the form')
            // failure.classList.add('show');
            // success.classList.remove('show');
        $('#failure').show();
        // $('#success').hide();
    }
})