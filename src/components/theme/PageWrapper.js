import React, { Component } from "react";
import { withRouter } from "react-router";

class PageWrapper extends Component {
  render() {
    return (
      <div id="mainPanel" className="main-panel">
        <nav className="navbar navbar-expand-lg navbar-absolute fixed-top navbar-transparent">
          <div className="container-fluid">
            <div className="navbar-wrapper">
              <div id="navbartoggler" className="navbar-toggle">
                <button type="button" className="navbar-toggler">
                  <span className="navbar-toggler-bar bar1" />
                  <span className="navbar-toggler-bar bar2" />
                  <span className="navbar-toggler-bar bar3" />
                </button>
              </div>
              <a className="navbar-brand" onClick={() => this.props.history.push("/karsilamaekrani")}>
                {/* <img src="/assets/img/logo/sample_logo.png" alt="" width="100px" height="20px" /> */}
                <strong style={{fontSize:"20px"}}>Hareketli Ofis Projesi</strong>
              </a>
            </div>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navigation"
              aria-controls="navigation-index"
              aria-expanded="false"
              aria-label="Toggle navigation"
            />
          </div>
        </nav>
        <div className="content">{this.props.children}</div>
      </div>
    );
  }
}

export default withRouter(PageWrapper);
