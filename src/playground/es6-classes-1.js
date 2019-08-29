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

// Traveler -> Person
// Add support for homeLocation
// Override getGreeting
// 1. Hi. I am Andrew Mead. I'm visiting from Philadelphia.
// 2. Hi. I am Andrew Mead.

class Traveler extends Person {
  constructor(name, age, homeLocation) {
    super(name, age);
    this.homeLocation = homeLocation;
  }
  getGreeting() {
    let greeting = super.getGreeting();

    if (this.homeLocation) {
      greeting += ` I'm visiting from ${this.homeLocation}`;
    }

    return greeting;
  }
}

const me = new Traveler("Benson Chen", 25, "Taichung");
console.log(me);
console.log(me.getGreeting());

const other = new Traveler();
console.log(other);
console.log(other.getGreeting());
