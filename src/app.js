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

var userName = "Benson Chen";
var userAge = 25;
var userLocation = "Taichung";
var templateTwo = (
  <div>
    <h1>{userName}</h1>
    <p>Age: {userAge}</p>
    <p>Location: {userLocation}</p>
  </div>
);

ReactDOM.render(templateTwo, appRoot);
