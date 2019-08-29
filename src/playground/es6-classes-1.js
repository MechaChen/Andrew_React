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

const me = new Person("Benson Chen", 25);
console.log(me.getGreeting(), me.getDescription());

const other = new Person();
console.log(other.getGreeting(), other.getDescription());
