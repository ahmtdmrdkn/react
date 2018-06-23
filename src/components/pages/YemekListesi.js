import React, { Component } from "react";
import { Row, Col, Alert, Card, CardBody, CardTitle } from "reactstrap";

class YemekListesi extends Component {
  constructor() {
    super();
    this.state = {
      yemekListesi: [
        { id: 2, ad: "Çorba", kalori: 25 },
        { id: 1, dad: "Diyet Çorba", dkalori: 25 }
      ]
    };
  }
  render() {
    const { yemekListesi } = { ...this.state };
    return (
      <Row>
        <Col>
          {yemekListesi.length > 0 ? (
            yemekListesi.map(function(item, index) {
              return (
                <Card key={index}>
                  <CardBody>
                    <CardTitle>19/05/2018</CardTitle>
                    <p>{item.ad}</p>
                    <p>{item.kalori}</p>
                    <hr />
                    <p>{item.dad}</p>
                    <p>{item.dkalori}</p>
                  </CardBody>
                </Card>
              );
            }, this)
          ) : (
            <Alert color="primary">Listelenecek veri bulunamadı !</Alert>
          )}
        </Col>
      </Row>
    );
  }
}

export default YemekListesi;
