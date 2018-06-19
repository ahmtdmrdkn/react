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
  CustomInput,
  Alert
} from "reactstrap";

class YeniDuyuru extends Component {
  constructor() {
    super();
    this.state = {
      files: []
    };
    this.handleFileChange = this.handleFileChange.bind(this);
  }
  handleFileChange(e) {
    this.setState({ files: Array.from(e.target.files) });
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
                    <Label for="konu">Konu</Label>
                    <Input type="text" name="konu" id="konu" />
                  </FormGroup>
                  <FormGroup>
                    <Label for="icerik">İçerik:</Label>
                    <Input type="textarea" name="text" id="icerik" />
                  </FormGroup>
                  <FormGroup>
                    <Label for="exampleCustomFileBrowser">
                      Ekler:
                    </Label>
                    <CustomInput
                      multiple="true"
                      onChange={this.handleFileChange}
                      type="file"
                      id="exampleCustomFileBrowser"
                      name="customFile"
                      label="Seçiniz..."
                    />
                    {this.state.files.length > 0 &&
                      this.state.files.map(function(item, index) {
                        return (
                          <div key={index}>
                            <Alert color="primary">{item.name}</Alert>
                          </div>
                        );
                      })}
                  </FormGroup>
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
