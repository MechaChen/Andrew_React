"use strict";

// create app object title/subtitle
// user title/subtitle in the template
// render template
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
  name: "Benson Chen",
  age: 25,
  location: "Taichung"
};
var templateTwo = React.createElement(
  "div",
  null,
  React.createElement(
    "h1",
    null,
    user.name
  ),
  React.createElement(
    "p",
    null,
    "Age: ",
    user.age
  ),
  React.createElement(
    "p",
    null,
    "Location: ",
    user.location
  )
);

ReactDOM.render(template, appRoot);
