import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

class NavLink extends Component {
  render() {
    var isActive =
      this.context.router.route.location.pathname.indexOf(this.props.to) >= 0;
    var className = isActive ? "active" : "";
    return (
      <li className={className}>
        <Link {...this.props}>
          <p className="sb-font-size">{this.props.label}</p>
        </Link>
      </li>
    );
  }
}

NavLink.contextTypes = {
  router: PropTypes.object
};

export default NavLink;
