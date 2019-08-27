"use strict";

// if statement
// ternary operator
var app = {
  title: "Indecision App",
  subtitle: "Put your life in the hands of computer"
};
var template = React.createElement(
  React.Fragment,
  null,
  React.createElement(
    "h1",
    { id: "someid" },
    app.title
  ),
  React.createElement(
    "p",
    null,
    app.subtitle
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
  // name: "Benson Chen",
  age: 25,
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

var templateTwo = React.createElement(
  "div",
  null,
  React.createElement(
    "h1",
    null,
    user.name ? user.name : "Anonymous"
  ),
  React.createElement(
    "p",
    null,
    "Age: ",
    user.age
  ),
  getLocation(user.location)
);

ReactDOM.render(templateTwo, appRoot);
