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

var user = {
  name: "Benson Chen",
  age: 25,
  location: "Taichung"
};
var templateTwo = (
  <div>
    <h1>{user.name}</h1>
    <p>Age: {user.age}</p>
    <p>Location: {user.location}</p>
  </div>
);

ReactDOM.render(templateTwo, appRoot);
