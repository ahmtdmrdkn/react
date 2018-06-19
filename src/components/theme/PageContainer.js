import React, { Component } from "react";

class PageContainer extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="content-wrapper">
          <div className="container-fluid">{this.props.children}</div>
        </div>
      </React.Fragment>
    );
  }
}

export default PageContainer;
