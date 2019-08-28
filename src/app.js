const app = {
  title: "Indecision App",
  subtitle: "Put your life in the hands of computer",
  options: []
};

const onFormSubmit = e => {
  e.preventDefault();

  const { elements } = e.target;
  const { option } = elements;
  const { value } = option;
  console.log(elements);
  // "option" came from input name
  console.log(option);
  console.log(value);
  console.log(e.target.elements.option.value);

  if (option) {
    app.options.push(option);
    e.target.elements.option.value = "";
  }
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
    <p>{app.options.length}</p>
    <form onSubmit={onFormSubmit}>
      <input type="text" name="option" />
      <button>Add Option</button>
    </form>
  </React.Fragment>
);

const appRoot = document.getElementById("app");
ReactDOM.render(template, appRoot);
