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
    this.state = {
      aramaKriteri: "",
      rehber: []
    };
  }

  componentDidMount() {
    axios
      .get("http://www.mocky.io/v2/5b2eed2e2f000057006a293b")
      .then(res => {
        this.setState({
          rehber: res
        });
      })
      .catch(err => {});
  }

  handleAramaKriteri(e) {
    this.setState({
      aramaKriteri: e.target.value.trim()
    });
  }

  ara() {
    const { rehber, aramaKriteri } = { ...this.state };
    if (rehber.length > 0) {
      let tempArray = rehber;
      this.setState({
        rehber: tempArray.filter(item => item.ad.indexOf(aramaKriteri) >= 0)
      });
    }
  }

  render() {
    return (
      <Row>
        <Col>
          <Card>
            <CardBody>
              <CardTitle>Telefon Rehberi</CardTitle>
              <Form>
                <FormGroup>
                  <Label for="isim" />
                  <Input id="isim" autoComplete="off" onChange={this.handleAramaKriteri} />
                </FormGroup>
              </Form>
              <Button outline color="info" onClick={this.ara}>
                <i className="fa fa-search" />&nbsp;Ara
              </Button>
              {
                this.state.rehber.length > 0 && this.state.rehber.map(function(item, index) {
                  return (  
                    <p key={index}>{item.ad}</p>
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
