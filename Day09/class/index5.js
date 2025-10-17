class Student {
  #id;
  #name;
  constructor(id, name) {
    this.#id = id;
    this.#name = name;
  }
  studying() {
    console.log("열공중~!");
  }
}

class Colleger extends Student {
  #major;
  #courses;
  constructor(id, name, major) {
    super(id, name);
    this.#major = major;
    this.#courses = [];
  }
  register(course) {
    this.#courses.push(course);
  }
}
class HighSchoolStudent extends Student {
  #grade;
  #classroom;
  constructor(id, name, grade, classroom) {
    super(id, name);
    this.#grade = grade;
    this.#classroom = classroom;
  }
}

class Nerd extends HighSchoolStudent {
  #goodlooking;
  constructor(id, name, grade, classroom, goodlooking) {
    super(id, name, grade, classroom);
    this.#goodlooking = goodlooking;
  }
}
const a = new Nerd(1, "신여진", 1, 2, 1);
a.studying();
