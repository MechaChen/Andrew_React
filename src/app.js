// if statement
// ternary operator
var app = {
  title: "Indecision App",
  subtitle: "Put your life in the hands of computer"
};
var template = (
  <React.Fragment>
    <h1 id="someid">{app.title}</h1>
    <p>{app.subtitle}</p>
    <ol>
      <li>Item one</li>
      <li>Item two</li>
      <li>Item three</li>
    </ol>
  </React.Fragment>
);
var appRoot = document.getElementById("app");

var user = {
  // name: "Benson Chen",
  age: 25,
  location: "Taichung"
};

function getLocation(location) {
  if (location) {
    return <p>Location: {location}</p>;
  }
}

var templateTwo = (
  <div>
    <h1>{user.name ? user.name : "Anonymous"}</h1>
    <p>Age: {user.age}</p>
    {getLocation(user.location)}
  </div>
);

ReactDOM.render(templateTwo, appRoot);
