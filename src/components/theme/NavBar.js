import React, { Component } from "react";

class NavBar extends Component {
  render() {
    return (
      <div className="sidebar-wrapper ps-container ps-theme-default ps-active-x">
        <ul className="nav">{this.props.children}</ul>
      </div>
    );
  }
}

export default NavBar;
