const path = require("path");

module.exports = {
  entry: "./src/app.js",
  output: {
    // must be absolute path
    path: path.join(__dirname, "public"),
    filename: "bundle.js"
  }
};
