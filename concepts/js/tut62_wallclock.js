console.log('This is Clock.js file');

function updateClock() {

    // get the current time
    let currentTime = new Date();
    // currentTime = currentTime.toLocaleDateString()
    var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

    // let month = currentTime.getMonth();
    // let day = currentTime.getDate();
    // let year = currentTime.getFullYear();

    let currentHours = currentTime.getHours();
    let currentMinutes = currentTime.getMinutes();
    let currentSeconds = currentTime.getSeconds();

    // pad 0 if hour,minute or second is less than 10
    currentHours = (currentHours < 10 ? "0" : "") + currentHours;
    currentMinutes = (currentMinutes < 10 ? "0" : "") + currentMinutes;
    currentSeconds = (currentSeconds < 10 ? "0" : "") + currentSeconds;

    // convert railway clock to AM/PM Claock
    // currentHours = (currentHours > 12) ? currentHours - 12 : currentHours;
    // currentHours = (currentHours == 0) ? 12 : currentHours;

    // choose AM/PM as per time of day
    let timeofDay = (currentHours < 12) ? "AM" : "PM"

    // prepare the timeString from hour, minute and seconds
    let currentTimeString = currentHours + ":" + currentMinutes + ":" + currentSeconds + " " + timeofDay + " on " + currentTime.toLocaleDateString('en-US', options);

    // insert the timestring in the DOM
    document.getElementById('clock').innerHTML = currentTimeString;

}