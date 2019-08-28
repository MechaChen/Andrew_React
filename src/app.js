const app = {
  title: "Indecision App",
  subtitle: "Put your life in the hands of computer",
  options: ["One", "Two"]
};

const onFormSubmit = e => {
  e.preventDefault();

  console.log("form submitted~");
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
    <form onSubmit={onFormSubmit}>
      <input type="text" name="option" />
      <button>Add Option</button>
    </form>
  </React.Fragment>
);

const appRoot = document.getElementById("app");
ReactDOM.render(template, appRoot);
