import React, { Component } from "react";
import NavBar from './NavBar';
import NavLink from './NavLink';

class Sidebar extends Component {
  render() {
    return (
      <div className="sidebar" data-color="white" data-active-color="info">
        <div className="logo" style={{ textAlign: "center" }}>
          <a
            href="http://www.creative-tim.com"
            className="simple-text logo-normal"
          >
            <img
              width="60%"
              height="60%"
              src="http://www.tcmb.gov.tr/wps/wcm/connect/262f6943-1f47-44b8-9471-a488940f31d4/Logo.png?MOD=AJPERES&CACHEID=ROOTWORKSPACE-262f6943-1f47-44b8-9471-a488940f31d4-m2sNI2C"
              alt=""
            />
          </a>
        </div>
        <NavBar>
          <NavLink to="/yeniduyuru" label="Yeni Duyuru" />
          <NavLink to="/taslaklar" label="Taslaklar" />
          <NavLink to="/onaybekleyenler" label="Onay Bekleyenler" />
          <NavLink to="/gonderilenler" label="Gönderilenler" />
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
