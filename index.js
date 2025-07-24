class malePerson {
  constructor(name, age) {
    this.name = name;
this.age = age;
hello: function () {
        console.log(`Hi, my name is ${this.name} and I am ${this.age} years old.`);
  }
}
}


class Student extends Person {
  constructor(name, age, grade) {
    super(name, age);
this.grade = grade;
about: function () {
         console.log(`${this.name} is ${this.age} in grade ${this.grade}.`);
  }
  }
}


class Teacher extends Person {
  constructor(name, age, subject, yearsOfExperience) {
    super(name, age);
    this.subject = subject;
this.yearsOfExperience = yearsOfExperience;
job: function () {
             console.log(`${this.name} is ${this.age} teaching ${this.subject} with ${this.yearsOfExperience} years of experience.`);
  }
  }
}


const person1 = new malePerson("Gloria", 40);
person1.hello();

const student1 = new Student("Amelia", 14, 9);
student1.hello();
student1.about();

const teacher1 = new Teacher("Sensei", 35, "History", 10);
teacher1.job();
