import React from "react";

class Increment extends React.Component {
  render() {
    return <button onClick={this.props.handleClick}>+</button>;
  }
}

export default Increment;
