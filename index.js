NAME: ENYI GLORIA

class malePerson {
  constructor(name, age) {
    this.name = name;
this.age = age;
introduce: function () {
        console.log(`Hi, my name is ${this.name} and I am ${this.age} years old.`);
  }
}
}


class Student extends Person {
  constructor(name, age, grade) {
    super(name, age);
this.grade = grade;
study: function () {
         console.log(`${this.name} is ${this.age} in grade ${this.grade}.`);
  }
  }
}


class Teacher extends Person {
  constructor(name, age, subject, yearsOfExperience) {
    super(name, age);
    this.subject = subject;
this.yearsOfExperience = yearsOfExperience;
teach: function () {
             console.log(`${this.name} is ${this.age} teaching ${this.subject} with ${this.yearsOfExperience} years of experience.`);
  }
  }
}


const person1 = new malePerson("Alex", 40);
person1.introduce();

const student1 = new Student("Lily", 14, 9);
student1.introduce();
student1.study();

const teacher1 = new Teacher("Mr. Smith", 35, "Science", 10);
teacher1.teach();
