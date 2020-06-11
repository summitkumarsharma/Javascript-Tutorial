console.log("This is tut39b.js");

// implimenting callback using promisesconsole.log("This is Tutorial 37.js");

// pretend that this response is coming from server
const students = [{ name: "Ram", subject: "Javascript" },
    { name: "shyam", subject: "Pyhton" }
];

function enrollStudents(student) {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            students.push(student);
            // console.log(student);
            let error = false;
            console.log("student has been enrolled");
            if (!error) {
                resolve();
            } else { reject(); }
        }, 1000);
    });
}

function getStudents() {
    setTimeout(function() {
        let str = "";
        students.forEach(function(student) {
            str += `<li>${student.name}</li>`;
        })
        let studentsid = document.getElementById('studentsid')
        studentsid.innerHTML = str;
        console.log("student have been fetched");
    }, 3000);

}
let newStudent = { name: "Sunny", subject: "Ruby on rails" };
// enrollStudents(newStudent, getStudents);
// getStudents();{ name: "Sunny", subject: "Ruby on rails" };
enrollStudents(newStudent).then(function() {
    getStudents();
}).catch(function() {
    console.log("some error occured");
});
// getStudents();


// function inside then is = resolve()
// and function inside catch is =reject()