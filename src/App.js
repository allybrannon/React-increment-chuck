import React from "react";
import Output from "./Output";
import Decrement from "./Decrement";
import Increment from "./Increment";
import "./App.css";

class App extends React.Component {
  // How to store values that can change as user uses page
  // 1. define constructor()
  //    this is the initializer for App
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      message: "Waiting...",
    };
  }

  componentDidMount() {
    fetch("https://api.chucknorris.io/jokes/random?category=dev")
      .then((r) => r.json())
      .then((data) => {
        this.setState({
          message: data.value,
        });
      });
  }
  render() {
    return (
      <div className="App">
        <h1>Hello!</h1>
        <Output value={this.state.count} />
        <Increment
          // 3. pass a reference to the helper method as a prop
          handleClick={this._incrementCount}
        />

        <Decrement handleClick={this._decrementCount} />
      </div>
    );
  }
  // 2. write a helper method arrow function
  // that changes the value*
  _incrementCount = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };
  _decrementCount = () => {
    if (this.state.count > 0) {
      // this.setState is asynchronous
      this.setState(
        {
          count: this.state.count - 1,
        },
        () => {
          console.log(`this is the new count: ${this.state.count}`);
        }
      );
    }
  };
}
export default App;
