import React, { Component } from "react";
import NavBar from "./NavBar";
import NavLink from "./NavLink";

class Sidebar extends Component {
  constructor() {
    super();
    this.closeSideBarIfNecessary = this.closeSideBarIfNecessary.bind(this);
  }

  closeSideBarIfNecessary() {
    // if (window.innerWidth <= 900) {
    //   document.getElementsByTagName('html')[0].classList.remove('nav-open');
    //   setTimeout(() => {
    //     document.getElementById('navbartoggler').classList.remove('toggled');
    //     document.getElementById('bodyClick').remove();
    //   }, 550);
    // }
  }

  render() {
    return (
      <div className="sidebar" data-color="white" data-active-color="info">
        <div className="logo" style={{ textAlign: "center" }}>
          <a
            href="http://www.creative-tim.com"
            className="simple-text logo-normal"
          >
            <img
              height="28px"
              src="http://www.tcmb.gov.tr/wps/wcm/connect/262f6943-1f47-44b8-9471-a488940f31d4/Logo.png?MOD=AJPERES&CACHEID=ROOTWORKSPACE-262f6943-1f47-44b8-9471-a488940f31d4-m2sNI2C"
              alt=""
            />
          </a>
        </div>
        <NavBar>
          <NavLink to="/karsilamaekrani" label="Ana Menü" onClick={this.closeSideBarIfNecessary} />
          <NavLink to="/yeniduyuru" label="Yeni Duyuru" onClick={this.closeSideBarIfNecessary} />
          <NavLink to="/taslaklar" label="Taslaklar" onClick={this.closeSideBarIfNecessary} />
          <NavLink to="/onaybekleyenler" label="Onay Bekleyenler" onClick={this.closeSideBarIfNecessary} />
          <NavLink to="/gonderilenler" label="Gönderilenler" onClick={this.closeSideBarIfNecessary} />
          <li>
            <a
              data-toggle="collapse"
              href="#pagesExamples"
              className="collapsed"
              aria-expanded="false"
            >
              <p className="sb-font-size">
                Pages
                <b className="caret" />
              </p>
            </a>
            <div className="collapse" id="pagesExamples">
              <ul className="nav">
                <li>
                  <a href="../examples/pages/timeline.html">
                    <span className="sidebar-normal"> Timeline </span>
                  </a>
                </li>
                <li>
                  <a href="../examples/pages/login.html">
                    <span className="sidebar-normal"> Login </span>
                  </a>
                </li>
              </ul>
            </div>
          </li>
        </NavBar>
      </div>
    );
  }
}

export default Sidebar;
