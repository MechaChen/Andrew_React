"use strict";

var app = {
  title: "Indecision App",
  subtitle: "Put your life in the hands of computer",
  options: ["One", "Two"]
};
var template = React.createElement(
  React.Fragment,
  null,
  React.createElement(
    "h1",
    { id: "someid" },
    app.title
  ),
  app.subtitle && React.createElement(
    "p",
    null,
    app.subtitle
  ),
  React.createElement(
    "p",
    null,
    app.options.length > 0 ? "Here are your options" : "No options"
  ),
  React.createElement(
    "ol",
    null,
    React.createElement(
      "li",
      null,
      "Item one"
    ),
    React.createElement(
      "li",
      null,
      "Item two"
    ),
    React.createElement(
      "li",
      null,
      "Item three"
    )
  )
);
var appRoot = document.getElementById("app");

var user = {
  name: "Benson Chen",
  age: 17,
  location: "Taichung"
};

function getLocation(location) {
  if (location) {
    return React.createElement(
      "p",
      null,
      "Location: ",
      location
    );
  }
}

var count = 0;
var addOne = function addOne() {
  return console.log("addOne");
};
// Challenge
// Make button "-1" -setup minusOne function and register - log 'minusOne'
// Make reset button 'reset' - setup reset function - log 'reset'
var minusOne = function minusOne() {
  return console.log("minusOne");
};
var reset = function reset() {
  return console.log("reset");
};

var templateTwo = React.createElement(
  "div",
  null,
  React.createElement(
    "h1",
    null,
    "Count: ",
    count
  ),
  React.createElement(
    "button",
    { onClick: addOne },
    "+1"
  ),
  React.createElement(
    "button",
    { onClick: minusOne },
    "-1"
  ),
  React.createElement(
    "button",
    { onClick: reset },
    "reset"
  )
);

ReactDOM.render(templateTwo, appRoot);
