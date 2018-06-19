import React, { Component } from "react";
import { Row, Col, Card, CardTitle, CardBody } from "reactstrap";
import Tarihce from "../shared/Tarihce";

class YeniDuyuru extends Component {
  render() {
    return (
      <React.Fragment>
        <Row>
          <Col lg="6">
            <Card>
              <CardBody>
                <CardTitle>Duyuru Formu</CardTitle>
                <Tarihce />
              </CardBody>
            </Card>
          </Col>
        </Row>
      </React.Fragment>
    );
  }
}

export default YeniDuyuru;
