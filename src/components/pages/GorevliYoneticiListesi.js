import React, { Component } from "react";
import {
  Card,
  CardBody,
  CardTitle,
  Alert,
  ListGroup,
  ListGroupItem,
  Row,
  Col
} from "reactstrap";

class GorevliYoneticiListesi extends Component {
  constructor() {
    super();
    this.state = {
      gorevliYoneticiListesi: {
        gorevdenAyrilanlar: [
          { id: 1, adSoyad: "Ahmet Demirdöken" },
          { id: 2, adSoyad: "Elif Demirdöken" }
        ],
        vekaletenDuranlar: [
          { id: 1, adSoyad: "Seçil Türkkan" },
          { id: 1, adSoyad: "Adriana Lima" }
        ]
      }
    };
  }
  render() {
    const { gorevdenAyrilanlar, vekaletenDuranlar } = {
      ...this.state.gorevliYoneticiListesi
    };
    return (
      <React.Fragment>
        <Row>
          <Col>
            <Card>
              <CardBody>
                <CardTitle>Görevden Ayrılanlar</CardTitle>
              </CardBody>
            </Card>
            {gorevdenAyrilanlar.length > 0 ? (
              gorevdenAyrilanlar.map(function(item, index) {
                return (
                  <React.Fragment key={index}>
                    <ListGroup>
                      <ListGroupItem>
                        <p>Ad Soyad: {item.adSoyad}</p>
                        <p>Müdürlük: {item.adSoyad}</p>
                        <p>Görev Yeri: {item.adSoyad}</p>
                      </ListGroupItem>
                    </ListGroup>
                    {index + 1 < gorevdenAyrilanlar.length ? <hr /> : <br />}
                  </React.Fragment>
                );
              }, this)
            ) : (
              <Alert color="primary">Listelenecek veri bulunamadı.</Alert>
            )}
          </Col>
        </Row>
        <Row>
          <Col>
            <Card>
              <CardBody>
                <CardTitle>Vekalet Edenler</CardTitle>
              </CardBody>
            </Card>
            {vekaletenDuranlar.length > 0 ? (
              vekaletenDuranlar.map(function(item, index) {
                return (
                  <React.Fragment key={index}>
                    <ListGroup>
                      <ListGroupItem>
                        <p>Ad Soyad: {item.adSoyad}</p>
                        <p>Müdürlük: {item.adSoyad}</p>
                        <p>Görev Yeri: {item.adSoyad}</p>
                      </ListGroupItem>
                    </ListGroup>
                    {index + 1 < vekaletenDuranlar.length ? <hr /> : <br />}
                  </React.Fragment>
                );
              }, this)
            ) : (
              <Alert color="primary">Listelenecek veri bulunamadı.</Alert>
            )}
          </Col>
        </Row>
      </React.Fragment>
    );
  }
}

export default GorevliYoneticiListesi;
