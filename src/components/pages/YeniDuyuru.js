import React, { Component } from "react";
import {
  Row,
  Col,
  Card,
  CardTitle,
  CardBody,
  Form,
  FormGroup,
  Label,
  Input
} from "reactstrap";
import DuyuruEklentileri from "../shared/DuyuruEklentileri";

class YeniDuyuru extends Component {
  constructor() {
    console.log('YeniDuyuru init...');
    super();
    this.state = {
      files: []
    };
    this.handleFile = this.handleFile.bind(this);
  }
  handleFile(selectedFiles) {
    this.setState({ files: selectedFiles });
  }
  render() {
    return (
      <React.Fragment>
        <Row>
          <Col lg="6">
            <Card>
              <CardBody>
                <CardTitle>Duyuru Formu</CardTitle>
                <Form>
                  <FormGroup>
                    <Label for="konu">Konu:</Label>
                    <Input type="text" name="konu" id="konu" autoComplete="off" />
                  </FormGroup>
                  <FormGroup>
                    <Label for="icerik">İçerik:</Label>
                    <Input type="textarea" name="text" id="icerik" />
                  </FormGroup>
                  <DuyuruEklentileri selectedFiles={this.handleFile}/>
                </Form>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </React.Fragment>
    );
  }
}

export default YeniDuyuru;
