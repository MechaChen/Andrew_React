// Car
// make: the brand of the vehicle
// model: the name of a car product
// vin
// getDescription

class Person {
  // must be ES6 function type
  constructor(name = "Anonymous") {
    this.name = name;
  }
  getGreeting() {
    return `Hi. I am ${this.name}!`;
  }
}

const me = new Person("Benson Chen");
console.log(me.getGreeting());

const other = new Person();
console.log(other.getGreeting());
