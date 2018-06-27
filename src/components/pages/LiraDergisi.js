import React, { Component } from "react";
import { Button, Row, Col } from "reactstrap";

class LiraDergisi extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [{ id: "1", ad: "AHMET" }, { id: "2", ad: "ELİF" }]
    };
  }

  handleClick = (item) => {
    console.log(item);
  };

  oylesine = () => {
    console.log('DENEME');
  }

  render() {
    return (
      <Row>
        <Col>
          <Button onClick={() => this.oylesine()} />
          {this.state.list.map((item, index) => (
            <div key={index}>
              {item.ad} - {index} <Button onClick={() => this.handleClick(item.ad)}>Detay</Button>
            </div>
          ))}
        </Col>
      </Row>
    );
  }
}

export default LiraDergisi;
