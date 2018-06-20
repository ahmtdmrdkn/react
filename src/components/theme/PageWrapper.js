import React, { Component } from "react";

class PageWrapper extends Component {
  render() {
    return (
      <div className="main-panel">
        <nav className="navbar navbar-expand-lg navbar-absolute fixed-top navbar-transparent">
          <div className="container-fluid">
            <div className="navbar-wrapper">
              <div className="navbar-toggle">
                <button type="button" className="navbar-toggler">
                  <span className="navbar-toggler-bar bar1" />
                  <span className="navbar-toggler-bar bar2" />
                  <span className="navbar-toggler-bar bar3" />
                </button>
              </div>
              <a className="navbar-brand" href="#pablo">
                <strong>BASIN DUYURULARI</strong>
              </a>
            </div>
          </div>
        </nav>
        <div className="content">{this.props.children}</div>
      </div>
    );
  }
}

export default PageWrapper;
