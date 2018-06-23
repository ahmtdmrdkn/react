import React, { Component } from "react";
import PropTypes from "prop-types";
import { Card, CardBody } from "reactstrap";

class AnaMenuItem extends Component {
  render() {
    return (
      <Card style={{cursor: 'pointer', textAlign: 'center'}}>
        <CardBody style={{minHeight: '139px'}}>
          <div>
            <img
              src={this.props.iconpath}
              alt=""
              width="50px"
            />&nbsp;&nbsp;
            <p style={{ fontSize: "16px", fontWeight: "bold" }}>{this.props.label}</p>
          </div>
        </CardBody>
      </Card>
    );
  }
}

AnaMenuItem.propTypes = {
  iconpath: PropTypes.string,
  label: PropTypes.string
};

export default AnaMenuItem;
