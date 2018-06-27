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
  Input,
  Button
} from "reactstrap";
import DuyuruEklentileri from "../shared/DuyuruEklentileri";
import Tarihce from "../shared/Tarihce";

class YeniDuyuru extends Component {
  constructor() {
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
                    <Input
                      type="text"
                      name="konu"
                      id="konu"
                      autoComplete="off"
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label for="icerik">İçerik:</Label>
                    <Input type="textarea" name="text" id="icerik" />
                  </FormGroup>
                  <DuyuruEklentileri selectedFiles={this.handleFile} />
                </Form>
                <Button outline block color="warning">
                  <i className="fa fa-paper-plane" />&nbsp;Taslak Olarak Kaydet
                </Button>
                <Button outline block color="success">
                  <i className="fa fa-paper-plane" />&nbsp;Onaya Gönder
                </Button>
              </CardBody>
            </Card>
          </Col>
          <Col>
            <Card>
              <CardBody>
                <CardTitle>Tarihçe</CardTitle>
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
