"use strict";

var app = {
  title: "Indecision App",
  subtitle: "Put your life in the hands of computer",
  options: []
};

var onFormSubmit = function onFormSubmit(e) {
  e.preventDefault();

  var elements = e.target.elements;
  var option = elements.option;
  var value = option.value;

  console.log(elements);
  // "option" came from input name
  console.log(option);
  console.log(value);
  console.log(e.target.elements.option.value);

  if (option) {
    app.options.push(option);
    e.target.elements.option.value = "";
  }
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
  ),
  React.createElement(
    "p",
    null,
    app.options.length
  ),
  React.createElement(
    "form",
    { onSubmit: onFormSubmit },
    React.createElement("input", { type: "text", name: "option" }),
    React.createElement(
      "button",
      null,
      "Add Option"
    )
  )
);

var appRoot = document.getElementById("app");
ReactDOM.render(template, appRoot);
