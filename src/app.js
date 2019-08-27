var template = (
  <React.Fragment>
    <h1 id="someid">Indecision App</h1>
    <p>This is some info</p>
    <ol>
      <li>Item one</li>
      <li>Item two</li>
      <li>Item three</li>
    </ol>
  </React.Fragment>
);
var appRoot = document.getElementById("app");

// Create a templateTwo var JSX expression
// div
//  h1 -> Your Name
//   p -> Age: Your Age
//   p -> Location
var template2 = (
  <div>
    <h1>Benson Chen</h1>
    <p>Age: 25</p>
    <p>Taichung</p>
  </div>
);

ReactDOM.render(template2, appRoot);
