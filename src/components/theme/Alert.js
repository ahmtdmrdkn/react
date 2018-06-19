import React, { Component } from "react";

class Alert extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className={`alert alert-${this.props.mode}`}>
          <strong>{this.props.text}</strong>
        </div>
      </React.Fragment>
    );
  }
}

export default Alert;
