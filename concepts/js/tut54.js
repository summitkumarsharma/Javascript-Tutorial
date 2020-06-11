console.log('This is tutorial 54 file');


// You have to create an alarm clock in javascript (Use your creativity)
// Allow user to set alarm for a certain time

let alarmsubmit = document.getElementById('alarmsubmit');
alarmsubmit.addEventListener('click', setAlarm);


function setAlarm(e) {
    e.preventDefault();
    const alarm = document.getElementById('alarm');
    alarmDate = new Date(alarm.value);
    console.log(`setting an alarm..... for ${alarmDate}`);
    now = new Date();
    let timeToAlarm = alarmDate - now;
    console.log(timeToAlarm);
    if (timeToAlarm >= 0) {
        setTimeout(() => {
            console.log('Ringing now.....')
            ringBell();
        }, timeToAlarm);
    }
}

function ringBell() {
    var audio = new Audio('https://interactive-examples.mdn.mozilla.net/media/examples/t-rex-roar.mp3');
    audio.play();
}