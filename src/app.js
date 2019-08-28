const app = {
  title: "Indecision App",
  subtitle: "Put your life in the hands of computer",
  options: []
};

const onFormSubmit = e => {
  e.preventDefault();

  const option = e.target.elements.option.value;

  if (option) {
    app.options.push(option);
    render();
    e.target.elements.option.value = "";
  }
};

const appRoot = document.getElementById("app");

// Create render function that render the new jsx
// Call it rightaway
// Call it after options array added to

const render = () => {
  const template = (
    <React.Fragment>
      <h1 id="someid">{app.title}</h1>
      {app.subtitle && <p>{app.subtitle}</p>}
      {app.options.length > 0 ? (
        <p>
          <b>Here are your options</b>
        </p>
      ) : (
        <p>No options</p>
      )}
      <ol>
        <li>Item one</li>
        <li>Item two</li>
        <li>Item three</li>
        {app.options.map(option => (
          <li key={option}>{option}</li>
        ))}
      </ol>
      <p>{app.options.length}</p>
      <form onSubmit={onFormSubmit}>
        <input type="text" name="option" />
        <button>Add Option</button>
      </form>
    </React.Fragment>
  );

  ReactDOM.render(template, appRoot);
};

render();
