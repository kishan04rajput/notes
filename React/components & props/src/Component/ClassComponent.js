import React from "react";

class ClassComponent extends React.Component {
  componentDidMount() {
    const fun = this.props.fun;
    fun("This is prop from class component child!");
  }
  render() {
    return <div>This is a class component, {this.props.prop}</div>;
  }
}

export default ClassComponent;
