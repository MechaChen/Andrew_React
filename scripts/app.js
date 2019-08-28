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

var appRoot = document.getElementById("app");

// Create render function that render the new jsx
// Call it rightaway
// Call it after options array added to

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
      ),
      app.options.map(function (option) {
        return React.createElement(
          "li",
          { key: option },
          option
        );
      })
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
