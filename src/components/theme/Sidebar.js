import React, { Component } from "react";

class Sidebar extends React.Component {
  render() {
    return (
      <React.Fragment>
        <ul className="navbar-nav navbar-sidenav" id="exampleAccordion">
          {this.props.children}
        </ul>
      </React.Fragment>
    );
  }
}

export default Sidebar;
