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
  }
}
const oldSyntax = new OldSyntax();
console.log(oldSyntax);

// -----------------------

class NewSyntax {
  name = "Jen";
}
const newSyntax = new NewSyntax();
console.log(newSyntax);
