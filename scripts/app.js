"use strict";

var template = React.createElement(
  React.Fragment,
  null,
  React.createElement(
    "h1",
    { id: "someid" },
    "Indecision App"
  ),
  React.createElement(
    "p",
    null,
    "This is some info"
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

// Create a templateTwo var JSX expression
// div
//  h1 -> Your Name
//   p -> Age: Your Age
//   p -> Location
var template2 = React.createElement(
  "div",
  null,
  React.createElement(
    "h1",
    null,
    "Benson Chen"
  ),
  React.createElement(
    "p",
    null,
    "Age: 25"
  ),
  React.createElement(
    "p",
    null,
    "Taichung"
  )
);

ReactDOM.render(template2, appRoot);
