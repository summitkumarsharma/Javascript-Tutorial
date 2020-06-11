console.log("This is Tutorial 37.js");

// pretend that this response is coming from server
const students = [{ name: "Ram", subject: "Javascript" },
    { name: "shyam", subject: "Pyhton" }
];

function enrollStudents(student, callback) {
    setTimeout(function() {
        students.push(student);
        console.log(student);
        console.log("student has been enrolled");
        callback();
    }, 3000);
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
    }, 1000);

}
let newStudent = { name: "Sunny", subject: "Ruby on rails" };
enrollStudents(newStudent, getStudents);
// getStudents();