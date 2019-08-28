const app = {
  showMess: false,
  message: "Hey. There are some details you can now see!"
};

const toggleMess = () => {
  app.showMess = !app.showMess;
  render();
};

const render = () => {
  const jsx = (
    <React.Fragment>
      <h1>Visibility Toggle</h1>
      <button onClick={toggleMess}>
        {app.showMess ? "Show details" : "Hide details"}
      </button>
      {app.showMess && <p>{app.message}</p>}
    </React.Fragment>
  );

  ReactDOM.render(jsx, document.getElementById("app"));
};

render();
