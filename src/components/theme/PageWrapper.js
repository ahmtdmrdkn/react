import React, { Component } from "react";
import { withRouter } from "react-router";
class PageWrapper extends Component {
  constructor() {
    super();
    this.toggleSideBar = this.toggleSideBar.bind(this);
  }

  toggleSideBar() {
    setTimeout(function() {
      document.getElementById("navbartoggler").classList.add("toggled");
    }, 580);
    let div = document.createElement("div");
    div.setAttribute("id", "bodyClick");
    div.onclick = function() {
      document.getElementsByTagName("html")[0].classList.remove("nav-open");
      setTimeout(() => {
        document.getElementById("navbartoggler").classList.remove("toggled");
        document.getElementById("bodyClick").remove();
      }, 550);
    };
    document.body.appendChild(div);
    document.getElementsByTagName("html")[0].classList.add("nav-open");
  }

  render() {
    return (
      <div id="mainPanel" className="main-panel">
        <nav className="navbar navbar-expand-lg navbar-absolute fixed-top navbar-transparent">
          <div className="container-fluid">
            <div className="navbar-wrapper">
              <div
                id="navbartoggler"
                className="navbar-toggle"
                onClick={this.toggleSideBar}
              >
                <button type="button" className="navbar-toggler">
                  <span className="navbar-toggler-bar bar1" />
                  <span className="navbar-toggler-bar bar2" />
                  <span className="navbar-toggler-bar bar3" />
                </button>
              </div>
              <a
                className="navbar-brand"
                onClick={() => this.props.history.push("/karsilamaekrani")}
              >
                {/* <img src="/assets/img/logo/sample_logo.png" alt="" width="100px" height="20px" /> */}
                <strong style={{ fontSize: "20px", cursor: "pointer" }}>
                  Hareketli Ofis Projesi
                </strong>
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
