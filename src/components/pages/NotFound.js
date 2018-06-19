import React, { Component } from "react";
import { Row, Col, Card, CardBody, CardTitle } from "reactstrap";

class NotFound extends Component {
  render() {
    return (
      <Row>
        <Col lg="12">
          <Card>
            <CardBody>
              <CardTitle>Üzgünüm, böyle bir sayfa yok !</CardTitle>
            </CardBody>
          </Card>
        </Col>
      </Row>
    );
  }
}

export default NotFound;