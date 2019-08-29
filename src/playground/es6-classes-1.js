// Setup constructor to take name and age (default to 0)
// getDescription - Andrew Mead is 26 year(s) old.

class Person {
  // must be ES6 function type
  constructor(name = "Anonymous", age = 0) {
    this.name = name;
    this.age = age;
  }
  getGreeting() {
    return `Hi. I am ${this.name}!`;
  }
  getDescription() {
    return `${this.name} is ${this.age} year(s) old.`;
  }
}

class Student extends Person {
  constructor(name, age, major) {
    super(name, age); // call the Parent Constrcutor function
    this.major = major;
  }
  hasMajor() {
    return !!this.major; // use "!!" to change a string to a boolean
  }
  getDescription() {
    // use super object to get Parent Method
    let description = super.getDescription();

    if (this.hasMajor()) {
      return (description += ` Their major is ${this.major}.`);
    }

    return description;
  }
}

const me = new Student("Benson Chen", 25, "Mechanical Engineer");
console.log(me);
console.log(me.hasMajor());
console.log(me.getDescription());

const other = new Student();
console.log(other);
console.log(other.hasMajor());
console.log(other.getDescription());
