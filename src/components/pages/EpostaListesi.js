import React, { Component } from "react";
import { Row, Col } from "reactstrap";
import { Route, Redirect, Switch } from "react-router-dom";
import To from "./To";
import Cc from "./Cc";
import Bcc from "./Bcc";

class EpostaListesi extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="container">
          <div className="row">
            <div
              className={
                this.props.location.pathname === `${this.props.match.url}/to`
                  ? "col wizard-router wizard-active"
                  : "col wizard-router"
              }
              onClick={() =>
                this.props.history.push({
                  pathname: `${this.props.match.url}/to`
                })
              }
            >
              TO
            </div>
            <div
              className={
                this.props.location.pathname === `${this.props.match.url}/cc`
                  ? "col wizard-router wizard-active"
                  : "col wizard-router"
              }
              onClick={() =>
                this.props.history.push({
                  pathname: `${this.props.match.url}/cc`
                })
              }
            >
              CC
            </div>
            <div
              className={
                this.props.location.pathname === `${this.props.match.url}/bcc`
                  ? "col wizard-router wizard-active"
                  : "col wizard-router"
              }
              onClick={() =>
                this.props.history.push({
                  pathname: `${this.props.match.url}/bcc`
                })
              }
            >
              BCC
            </div>
          </div>
        </div>
        <Row>
          <Col>
            <Switch>
              <Route exact path="/" component={To} />
              <Route path={`${this.props.match.url}/to`} component={To} />
              <Route path={`${this.props.match.url}/cc`} component={Cc} />
              <Route path={`${this.props.match.url}/bcc`} component={Bcc} />
              <Redirect to={`${this.props.match.url}/to`} />
            </Switch>
          </Col>
        </Row>
      </React.Fragment>
    );
  }
}

export default EpostaListesi;
