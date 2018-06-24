import React, { Component } from "react";
import { Row, Col, Alert } from "reactstrap";
import axios from "axios";

class Gonderilenler extends Component {
  constructor() {
    super();
    this.state = {
      gonderilenler: []
    };
  }

  componentDidMount() {
    axios
      .get("http://www.mocky.io/v2/5b2ec8662f000028006a2925?mocky-delay=1s")
      .then(res => {
        console.log(res);
        this.setState({
          gonderilenler: res
        });
      })
      .catch(err => {});
  }

  render() {
    const { gonderilenler } = { ...this.state };
    return (
      <Row>
        <Col>
          {gonderilenler && gonderilenler.length > 0 ? (
            gonderilenler.map(function(item, index) {
              return <p key={index}>{item.id}</p>;
            })
          ) : (
            <Alert color="primary">
                <strong>Listelenecek veri yok !</strong>
            </Alert>
          )}
        </Col>
      </Row>
    );
  }
}

export default Gonderilenler;
