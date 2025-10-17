// class 대학생
// 학번, 이름, 전공, 듣는수업

class Student {
  #id;
  #name;
  #major;
  #courses;
  constructor(id, name, major) {
    this.#id = id;
    this.#name = name;
    this.#major = major;
    this.#courses = [];
  }
  register(course) {
    this.#courses.push(course);
  }
}

class Course {
  name;
  professor;
  time;
  constructor(name, professor, time) {
    this.name = name;
    this.professor = professor;
    this.time = time;
  }
}

const a = new Student(1, "전정우", "간호학과");
a.register(new Course("간호학개론", "신여진", 2));
