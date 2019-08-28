"use strict";

var app = {
  title: "Indecision App",
  subtitle: "Put your life in the hands of computer",
  options: []
};

var onFormSubmit = function onFormSubmit(e) {
  e.preventDefault();

  var option = e.target.elements.option.value;

  if (option) {
    app.options.push(option);
    render();
    e.target.elements.option.value = "";
  }
};

var onRemoveAll = function onRemoveAll() {
  app.options = [];
  render();
};

var appRoot = document.getElementById("app");

var number = [55, 101, 1000];

var render = function render() {
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
    app.options.length > 0 ? React.createElement(
      "p",
      null,
      React.createElement(
        "b",
        null,
        "Here are your options"
      )
    ) : React.createElement(
      "p",
      null,
      "No options"
    ),
    React.createElement(
      "button",
      { onClick: onRemoveAll },
      "Remove All"
    ),
    number.map(function (number) {
      return React.createElement(
        "p",
        null,
        "Number : ",
        number
      );
    }),
    React.createElement(
      "ol",
      null,
      React.createElement(
        "li",
        null,
        "Item One"
      ),
      React.createElement(
        "li",
        null,
        "Item Two"
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

  ReactDOM.render(template, appRoot);
};

render();
