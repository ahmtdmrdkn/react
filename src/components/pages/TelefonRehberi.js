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
import axios from "axios";

class TelefonRehberi extends Component {
  constructor() {
    super();
    this.ara = this.ara.bind(this);
    this.handleAramaKriteri = this.handleAramaKriteri.bind(this);
    this.handleOnKeyPressAramaKriteri = this.handleOnKeyPressAramaKriteri.bind(this);
    this.state = {
      aramaKriteri: "",
      rehber: []
    };
  }

  componentDidMount() {}

  handleAramaKriteri(e) {
    this.setState({
      aramaKriteri: e.target.value.trim()
    });
  }

  handleOnKeyPressAramaKriteri(e) {
    if (e.key === 'Enter') {
      e.preventDefault();
      this.ara();
    }
  }

  ara() {
    axios
      .post("http://localhost:8080/SpringBestPractices/autocomplete/search", {
        term: this.state.aramaKriteri
      })
      .then(res => {
        this.setState({
          rehber: res
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    const { rehber } = { ...this.state };
    return (
      <Row>
        <Col lg="6">
          <Card>
            <CardBody>
              <CardTitle>Telefon Rehberi</CardTitle>
              <Form>
                <FormGroup>
                  <Label for="isim" />
                  <Input
                    id="isim"
                    autoComplete="off"
                    onChange={this.handleAramaKriteri}
                    onKeyPress={this.handleOnKeyPressAramaKriteri}
                  />
                </FormGroup>
              </Form>
              <Button outline color="info" onClick={this.ara}>
                <i className="fa fa-search" />&nbsp;Ara
              </Button>
              {
                rehber.length > 0 &&
                rehber.map(function(item, index) {
                  return (
                    <p key={index}>{item}</p>
                  );
                }, this)
              }
            </CardBody>
          </Card>
        </Col>
      </Row>
    );
  }
}

export default TelefonRehberi;
