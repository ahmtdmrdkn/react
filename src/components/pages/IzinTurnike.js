import React, { Component } from "react";
import {
  Row,
  Col,
  Card,
  CardBody,
  CardTitle,
  Form,
  FormGroup,
  Input,
  Label,
  Button
} from "reactstrap";
import moment from "moment";

class IzinTurnike extends Component {

  render() {
    const yearsFromNow = [];
    const startYear = 1999;
    let endYear = moment().year();
    while (endYear >= startYear) {
      yearsFromNow.push(endYear);
      endYear--;
    }
    return (
      <Row>
        <Col>
          <Card>
            <CardBody>
              <CardTitle>İzin / Turnike Verileri</CardTitle>
              <Form>
                <FormGroup>
                  <Label for="select">Yıl</Label>
                  <Input type="select" name="select" id="select">
                    {yearsFromNow.length > 0 &&
                      yearsFromNow.map(function(item, index) {
                        return <option key={index}>{item}</option>;
                      }, this)}
                  </Input>
                </FormGroup>
              </Form>
              <Button outline block color="info">
                <i className="fa fa-search" />&nbsp;Ara
              </Button>
            </CardBody>
          </Card>
        </Col>
      </Row>
    );
  }
}

export default IzinTurnike;
