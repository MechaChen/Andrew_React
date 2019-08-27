"use strict";

// [CMD] - "yarn global add bable-cli@6.24.1"
// use [CMD] - "babel --help" to check installation
// [CMD] - "yarn init" to add package.json
// [CMD] - "yarn add babel-preset-react@6.24.1 babel-preset-env@1.5.2" to install preset react & event(for ES6)
// [CMD] - "babel src/app.js --out-flie=scripts/app.js --presets=env,react"
var template = React.createElement(
  "h1",
  { id: "someid" },
  "Does this chanage?!"
);
var appRoot = document.getElementById("app");
ReactDOM.render(template, appRoot);
