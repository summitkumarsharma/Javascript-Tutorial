console.log("Calculator Program ");

let screen = document.getElementById('screen');

let buttons = document.querySelectorAll('button');

let screenVal = '';
for (const item of buttons) {
    item.addEventListener('click', (e) => {
        buttonText = e.target.innerText;
        console.log("The button text is ", buttonText);
        if (buttonText == 'X') {
            buttonText = '*';
            screenVal += buttonText;
            screen.value = screenVal;
        } else if (buttonText == 'C') {
            screenVal = "";
            screen.value = screenVal;

        } else if (buttonText == '=') {
            screen.value = eval(screenVal);

        } else {
            screenVal += buttonText;
            screen.value = screenVal;
        }

    })

}