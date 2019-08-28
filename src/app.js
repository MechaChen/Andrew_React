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

const onRemoveAll = () => {
  app.options = [];
  render();
};

const appRoot = document.getElementById("app");

const number = [55, 101, 1000];

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
      <button onClick={onRemoveAll}>Remove All</button>
      {number.map(number => {
        return <p key={number}>Number : {number}</p>;
      })}
      <ol>
        {/* map over app.options getting back an array of list (set key and text) */
        app.options.map(option => (
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
