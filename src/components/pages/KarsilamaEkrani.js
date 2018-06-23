import React, { Component } from "react";
import { Row, Col } from "reactstrap";
import AnaMenuItem from "../shared/AnaMenuItem";

class KarsilamaEkrani extends Component {
  render() {
    return (
      <React.Fragment>
        <Row>
          <Col>
            <AnaMenuItem
              navigate="/yeniduyuru"
              label="Başkanlık Onayı"
              iconpath="/assets/img/icons/pack1/baskanlik_onayi_renkli.png"
            />
          </Col>
          <Col>
            <AnaMenuItem
              navigate="/gylistesi"
              label="Görevli Yönetici Listesi"
              iconpath="/assets/img/icons/pack1/gorevli_yonetici_listesi_renkli.png"
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <AnaMenuItem
              label="Telefon Rehberi"
              iconpath="/assets/img/icons/pack1/telefon_rehberi_renkli.png"
            />
          </Col>
          <Col>
            <AnaMenuItem
              label="Turnike Verileri"
              iconpath="/assets/img/icons/pack1/giris_cikis_renkli.png"
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <AnaMenuItem
              navigate="/ylistesi"
              label="Yemek Listesi"
              iconpath="/assets/img/icons/pack1/yemek_listesi_renkli.png"
            />
          </Col>
          <Col>
            <AnaMenuItem
              label="Lira Dergisi"
              iconpath="/assets/img/icons/pack1/lira_dergisi_renkli.png"
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <AnaMenuItem
              label="Canlı Yayın"
              iconpath="/assets/img/icons/pack1/canli_yayin_renkli.png"
            />
          </Col>
          <Col />
        </Row>
      </React.Fragment>
    );
  }
}

export default KarsilamaEkrani;
