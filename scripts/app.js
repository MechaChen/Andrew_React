"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// VisibilityToggle - render, constructor, handleToggleVisibility
// visibility -> false

var VisibilityToggle = function (_React$Component) {
  _inherits(VisibilityToggle, _React$Component);

  function VisibilityToggle(props) {
    _classCallCheck(this, VisibilityToggle);

    var _this = _possibleConstructorReturn(this, (VisibilityToggle.__proto__ || Object.getPrototypeOf(VisibilityToggle)).call(this, props));

    _this.toggleMess = _this.toggleMess.bind(_this);
    _this.state = {
      visibility: false,
      message: "Hey. There are some details you can now see!"
    };
    return _this;
  }

  _createClass(VisibilityToggle, [{
    key: "toggleMess",
    value: function toggleMess() {
      this.setState(function (prevState) {
        return {
          visibility: !prevState.visibility
        };
      });
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(
        React.Fragment,
        null,
        React.createElement(
          "h1",
          null,
          "Visibility Toggle"
        ),
        React.createElement(
          "button",
          { onClick: this.toggleMess },
          this.state.visibility ? "Show details" : "Hide details"
        ),
        this.state.visibility && React.createElement(
          "p",
          null,
          this.state.message
        )
      );
    }
  }]);

  return VisibilityToggle;
}(React.Component);

ReactDOM.render(React.createElement(VisibilityToggle, null), document.getElementById("app"));

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
