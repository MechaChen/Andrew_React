class IndecisionApp extends React.Component {
  render() {
    const title = "Indecision";
    const subtitle = "Put your life in the hands of a computer";
    const options = ["Thing One", "Thing two", "Thing Four"];

    return (
      <div>
        <Header title={title} subtitle={subtitle} />
        <Action />
        <Options options={options} />
        <AddOption />
      </div>
    );
  }
}

class Header extends React.Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <h1>{this.props.title}</h1>
        <h2>{this.props.subtitle}</h2>
      </div>
    );
  }
}

class Action extends React.Component {
  render() {
    return (
      <div>
        <button>What should I do?</button>
      </div>
    );
  }
}

// Setup options prop for Options component
// Render the length of the array

// Options -> Options component here
class Options extends React.Component {
  render() {
    return (
      <div>
        Options component here
        <p>Option Count: {this.props.options.length}</p>
        <Option />
      </div>
    );
  }
}

// Option -> Option component here
class Option extends React.Component {
  render() {
    return <div>Option component here</div>;
  }
}

// AddOption -> AddOption component here
class AddOption extends React.Component {
  render() {
    return <div>AddOption component here</div>;
  }
}

ReactDOM.render(<IndecisionApp />, document.getElementById("app"));
