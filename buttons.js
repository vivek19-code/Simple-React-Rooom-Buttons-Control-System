import React from "react";
import ReactDOM from "react-dom";
import "./style.css";
import "./index.css";

class Room extends React.Component {
  state = {
    isLit: true,
    temp: 22,
    clicks: 0,
    negativeClicks: 0,
    number: 0
  };

  flipLight = () => {
    this.setState({
      isLit: !this.state.isLit
    });
  };

  turnOn = () => {
    this.setState({
      isLit: this.state.isLit ? "True" : "False"
    });
  };

  turnOff = () => {
    this.setState({
      isLit: this.state.isLit === ""
    });
  };

  increaseTemp = () => {
    this.setState({
      temp: this.state.temp + 1
    });
  };

  decreaseTemp = () => {
    this.setState({
      temp: this.state.temp - 1
    });
  };

  like = () => {
    this.setState({
      clicks: this.state.clicks + 1
    });
  };

  unLike = () => {
    this.setState({
      negativeClicks: this.state.negativeClicks - 1
    });
  };

  increaseNumber = () => {
    this.setState({
      number: this.state.number + 1
    });
  };

  decreaseNumber = () => {
    this.setState({
      number: this.state.number - 1
    });
  };

  render() {
    const brightness = this.state.isLit ? "lit" : "dark";
    return (
      <div className={`room ${brightness}`}>
        <p className="paragraf">
          The Room {this.state.isLit ? "Light is On" : " Light is OFF"} and the temperature
          is {this.state.temp} Celsius.
        </p>
        <br /> <br />
        <button onClick={this.flipLight}>Turn Lights ON/OFF</button>
        <br /> <br />
        <button onClick={this.turnOn}> Turn Lights ON(Manual)</button>
        <br /> <br />
        <button onClick={this.turnOff}>Turn Lights OFF(Manual)</button>
        <br /> <br />
        <button onClick={this.increaseTemp}>
          + Increase Temp in the Room +
        </button>
        <br /> <br />
        <button onClick={this.decreaseTemp}>
          - Deacrease Temp in the Room -
        </button>
      </div>
    );
  }
}
ReactDOM.render(<Room />, document.getElementById("root"));
