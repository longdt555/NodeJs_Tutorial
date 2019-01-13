// load module node-persist
var storage = require('node-persist');

//init function
//load data on disk
storage.initSync({
  dir: "students" //config storage data dir.

});

// get all students
function getAllStudents() {
  //get all students record from local storage
  var students = storage.getItemSync('students');
  //return empty array if no student record
  if (typeof students === "undefined") {
    return [];
  }
  // otherwise, the list student will be return
  return students;
}


// get detail student
function getStudent(studentId) {
  //get all students
  var students = getAllStudents();
  //variable storage student found
  var matchedStudent = null;
  // loop to find record
  for (var i = 0; i < students.length; i++) {
    if (students[i].id === studentId) {
      matchedStudent = students[i];
      break;
    }
  }
  return matchedStudent;
}


// add new student
function addStudent(id, fullname) {
  var students = getAllStudents();

  students.push({
    id: id,
    fullname: fullname
  });
  student.setItemSync("students", students);
}

// delete a student record
function removeStudent(studentId) {
  var students = getAllStudents();

  for (var i = 0; i < students.length; i++) {
    if (students[i].id === studentId) {
      students[i].splice(i, 1);
    }
  }
  storage.setItemSync("students", students);
}

// edit a student record
function editStuent(studentId, studentName) {
  var students = getAllStudents();
  for (var i = 0; i < students.length; i++) {
    if (students[i].id === studentId) {
      students[i].fullname = studentName;
    }
  }
  storage.setItemSync("students", students);
}

// show list students
function showStudents() {
  var students = getAllStudents();
  students.forEach(function(student) {
    console.log('Student: ' + student.fullname + ' (' + student.id + ')');
  });
}
