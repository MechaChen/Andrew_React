"use strict";

var app = {
  showMess: false,
  message: "Hey. There are some details you can now see!"
};

var toggleMess = function toggleMess() {
  app.showMess = !app.showMess;
  render();
};

var render = function render() {
  var jsx = React.createElement(
    React.Fragment,
    null,
    React.createElement(
      "h1",
      null,
      "Visibility Toggle"
    ),
    React.createElement(
      "button",
      { onClick: toggleMess },
      app.showMess ? "Show details" : "Hide details"
    ),
    app.showMess && React.createElement(
      "p",
      null,
      app.message
    )
  );

  ReactDOM.render(jsx, document.getElementById("app"));
};

render();
