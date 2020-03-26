import React from "react";
import "../../styles/App.css";

class CustomComponent extends React.Component {
  render() {
    return <div className="App">{this.props.content}</div>;
  }
}

export default CustomComponent;
