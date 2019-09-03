import React from "react";
import ReactDOM from "react-dom";
import IndecisionApp from "./components/IndecisionApp";

// Moving the component code
// Setup import/export
// Move the imports to that new files (and setup an import here)

// Create the file, copy the copy, setup import/export

ReactDOM.render(<IndecisionApp />, document.getElementById("app"));

class OldSyntax {
  constructor() {
    this.name = "Mike";
    this.getGreeting = this.getGreeting.bind(this);
  }
  getGreeting() {
    return `Hi. My name is ${this.name}.`;
  }
}
const oldSyntax = new OldSyntax();
const getGreeting = oldSyntax.getGreeting;
console.log(oldSyntax);
console.log(getGreeting());

// -----------------------

class NewSyntax {
  name = "Jen";
  getGreeting = () => {
    return `Hi. My name is ${this.name}`;
  };
}
const newSyntax = new NewSyntax();
const newGreeting = newSyntax.getGreeting;
console.log(newSyntax);
console.log(newGreeting());
