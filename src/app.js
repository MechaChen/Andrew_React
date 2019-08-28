const app = {
  title: "Indecision App",
  subtitle: "Put your life in the hands of computer",
  options: ["One", "Two"]
};
const template = (
  <React.Fragment>
    <h1 id="someid">{app.title}</h1>
    {app.subtitle && <p>{app.subtitle}</p>}
    <p>{app.options.length > 0 ? "Here are your options" : "No options"}</p>
    <ol>
      <li>Item one</li>
      <li>Item two</li>
      <li>Item three</li>
    </ol>
  </React.Fragment>
);
const appRoot = document.getElementById("app");

const user = {
  name: "Benson Chen",
  age: 17,
  location: "Taichung"
};

function getLocation(location) {
  if (location) {
    return <p>Location: {location}</p>;
  }
}

let count = 0;
// this way doesn't rerender the DOM
// the Count on the webpage won't change
// but will on console
const addOne = () => {
  count++;
  console.log(`Count : ${count}`);
};
const minusOne = () => {};
const reset = () => {};

const templateTwo = (
  <div>
    <h1>Count: {count}</h1>
    <button onClick={addOne}>+1</button>
    <button onClick={minusOne}>-1</button>
    <button onClick={reset}>reset</button>
  </div>
);

ReactDOM.render(templateTwo, appRoot);
