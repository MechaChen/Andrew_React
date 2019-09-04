const path = require("path");

module.exports = {
  entry: "./src/app.js",
  output: {
    // must be absolute path
    path: path.join(__dirname, "public"),
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        loader: "babel-loader",
        // the file type wanted to get with loader
        test: /\.js$/,
        // exclude specific files
        exclude: /node_modules/
      },
      {
        test: /\.scss$/,
        // use "use" can take 2 above loaders
        use: ["style-loader", "css-loader", "sass-loader"]
      }
    ]
  },
  // make browser can find Original error place
  devtool: "cheap-module-eval-source-map",
  devServer: {
    contentBase: path.join(__dirname, "public")
  }
};

// babel-core: 類似 babel-cli，讓 Webpack 可使用 babel
// babel-loader: 讓 Webpack 知道如何使用 babel
// webpack-dev-server: 類似 live-server，但在 Webpack 開發環境下更快
