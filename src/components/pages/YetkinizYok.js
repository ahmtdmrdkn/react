import React, { Component } from "react";
import { Row, Col, Alert } from "reactstrap";

class YetkinizYok extends Component {
  render() {
    return (
      <Row>
        <Col size="lg-12">
          <Alert color="danger">
            <strong>Bu sayfayı görüntülemek için yetkiniz bulunmuyor.</strong>
          </Alert>
        </Col>
      </Row>
    );
  }
}

export default YetkinizYok;
