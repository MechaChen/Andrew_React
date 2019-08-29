// VisibilityToggle - render, constructor, handleToggleVisibility
// visibility -> false

class VisibilityToggle extends React.Component {
  constructor(props) {
    super(props);
    this.toggleMess = this.toggleMess.bind(this);
    this.state = {
      visibility: false,
      message: "Hey. There are some details you can now see!"
    };
  }
  toggleMess() {
    this.setState(prevState => {
      return {
        visibility: !prevState.visibility
      };
    });
  }
  render() {
    return (
      <React.Fragment>
        <h1>Visibility Toggle</h1>
        <button onClick={this.toggleMess}>
          {this.state.visibility ? "Show details" : "Hide details"}
        </button>
        {this.state.visibility && <p>{this.state.message}</p>}
      </React.Fragment>
    );
  }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById("app"));

// const app = {
//   visibility: false,
//   message: "Hey. There are some details you can now see!"
// };

// const toggleMess = () => {
//   app.visibility = !app.visibility;
//   render();
// };

// const render = () => {
//   const jsx = (
//     <React.Fragment>
//       <h1>Visibility Toggle</h1>
//       <button onClick={toggleMess}>
//         {app.visibility ? "Show details" : "Hide details"}
//       </button>
//       {app.visibility && <p>{app.message}</p>}
//     </React.Fragment>
//   );

//   ReactDOM.render(jsx, document.getElementById("app"));
// };

// render();
