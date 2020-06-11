console.log("This is CV Scannar Project");

// Data is an array of objects which contains information about the candidates

const data = [{
    name: 'Alex',
    age: 18,
    city: 'Kolkata',
    language: 'Python',
    framework: 'Django',
    image: 'https://randomuser.me/api/portraits/men/1.jpg'
}, {
    name: 'James',
    age: 28,
    city: 'Delhi',
    language: 'Javascript',
    framework: 'Angular',
    image: 'https://randomuser.me/api/portraits/men/2.jpg'
}, {
    name: 'Alive',
    age: 20,
    city: 'Mumbai',
    language: 'PHP',
    framework: 'Laravel',
    image: 'https://randomuser.me/api/portraits/men/3.jpg'
}, {
    name: 'Maria',
    age: 22,
    city: 'Bangalore',
    language: 'Android',
    framework: 'Android Studio',
    image: 'https://randomuser.me/api/portraits/women/4.jpg'
}, {
    name: 'John',
    age: 23,
    city: 'Chennai',
    language: 'JQuery',
    framework: 'JQuery',
    image: 'https://randomuser.me/api/portraits/men/5.jpg'
}]

// function CV Iterator

function cvIterator(profiles) {
    let nextIndex = 0;
    // we will return an Object
    return {
        next: function() {
            if (nextIndex < profiles.length) {
                // it will return below object
                return {
                    // it will return below object with only done.
                    value: profiles[nextIndex++],
                    done: false

                }
            } else {

                return {
                    done: true

                }
            }

        }

    }


}

const candidates = cvIterator(data);
// console.log(candidates.next().value);

$('.alert').hide();
// button listener

const next = document.getElementById('next');
next.addEventListener('click', nextCV);

nextCV();

function nextCV() {

    const currentCandidate = candidates.next().value;
    let image = document.getElementById('image');
    let profile = document.getElementById('profile')
    if (currentCandidate != undefined) {
        image.innerHTML = `<img src= "${currentCandidate.image}">`;
        profile.innerHTML = `<a href="#" class="list-group-item list-group-item-action list-group-item-danger">Name : ${currentCandidate.name}</a>
    <a href="#" class="list-group-item list-group-item-action list-group-item-danger">Age :${currentCandidate.age}
    </a><a href="#" class="list-group-item list-group-item-action list-group-item-danger">Lives in:${currentCandidate.city}</a>
    <a href="#" class="list-group-item list-group-item-action list-group-item-danger">Primarily works on : ${currentCandidate.language} Language</a> 
    <a href="#" class="list-group-item list-group-item-action list-group-item-danger"> Using Framework : ${currentCandidate.framework} </a>`;
    } else {
        // alert("End of Candidate Applications");
        $('.alert').show();
        // // if ($('.alert').hide()) {
        // //     setTimeout(() => {}, 2000);
        // // }
        $('#myAlert').on('closed.bs.alert', function() {
            // do something...
            window.location.reload();
        })

    }
}