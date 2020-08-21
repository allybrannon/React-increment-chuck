// 1. bring in react
// 2. export component
// 3. Define component
import React from "react";

class Output extends React.Component {
  render() {
    console.log(this.props);
    return <div>{this.props.value}</div>;
  }
}

// using default because this is the one and only thing to import
export default Output;
