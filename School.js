class Student {
  constructor(studentId, firstName, lastName, gradeLevel) {
    this.studentId = studentId;
    this.firstName = firstName;
    this.lastName = lastName;
    this.gradeLevel = gradeLevel;
  }

  getFullName() {
    return this.firstName + " " + this.lastName;
  }
}

class Classroom {
  constructor(students, courseName, period, roomNumber, teacher) {
    this.students = students;
    this.courseName = courseName;
    this.period = period;
    this.roomNumber = roomNumber;
    this.teacher = teacher;
  }

  getClassIdentity() {
    return (
      this.courseName +
      " room " +
      this.roomNumber +
      " during period " +
      this.period +
      " managed by " +
      this.teacher
    );
  }

  getNumberOfStudents() {
    return this.students.length;
  }
}

function printSchoolSchedule(classrooms) {
  for (let i = 0; i < classrooms.length; i++) {
    let classroom = classrooms[i];
    console.log(classroom.getClassIdentity());
    let studentString = "";
    for (let j = 0; j < classroom.students.length - 1; j++) {
      let student = classroom.students[j];
      studentString += student.getFullName() + ",";
    }
    studentString +=
      classroom.students[classroom.getNumberOfStudents() - 1].getFullName();
    console.log("Student list: " + studentString);
  }
}

let classroom1 = new Classroom(
  [
    new Student("AC-343424", "Vincent", "Lynch", 10),
    new Student("AC-343434", "Violet", "Marshall", 10),
    new Student("AC-343428", "Aubree", "Lambert", 10),
    new Student("AC-343454", "Danny", "Robertson", 10),
  ],
  "Algebra II",
  2,
  23,
  "Emily Theodore"
);
let classroom2 = new Classroom(
  [
    new Student("AC-340014", "Kent", "Carter", 11),
    new Student("AC-340024", "Isaiah", "Chambers", 11),
    new Student("AC-340018", "Leta", "Ferguson", 11),
  ],
  "English",
  5,
  104,
  "Daniel Pherb"
);

let classroom3 = new Classroom(
  [
    new Student("AC-330010", "Glenda", "Soto", 12),
    new Student("AC-330035", "Johnny", "Robertson", 12),
    new Student("AC-330020", "Ava", "Hansen", 12),
    new Student("AC-340084", "Nathaniel", "Romero", 11),
  ],
  "Biology",
  5,
  36,
  "Maki Watanabe"
);

let school = [classroom1, classroom2, classroom3];
printSchoolSchedule(school);
