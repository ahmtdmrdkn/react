import React, { Component } from "react";
import NavBar from "./NavBar";
import NavLink from "./NavLink";
import GuvenliCikisModal from "../shared/GuvenliCikisModal";
class Sidebar extends Component {
  constructor() {
    super();
    this.closeSideBarIfNecessary = this.closeSideBarIfNecessary.bind(this);
    this.handleModalState = this.handleModalState.bind(this);
    this.guvenlicikis = this.guvenlicikis.bind(this);
    this.state = {
      guvenliCikisModalState: false
    };
  }

  guvenlicikis() {
    this.setState({
      guvenliCikisModalState: true
    });
  }

  handleModalState(callbackState) {
    this.setState({
      guvenliCikisModalState: callbackState
    });
  }

  closeSideBarIfNecessary() {
    if (window.innerWidth <= 900) {
      document.getElementsByTagName("html")[0].classList.remove("nav-open");
      setTimeout(function() {
        document.getElementById("navbartoggler").classList.remove("toggled");
        document.getElementById("bodyClick").remove();
      }, 550);
    }
  }

  render() {
    return (
      <React.Fragment>
        <div className="sidebar" data-color="white" data-active-color="info">
          <div className="logo" style={{ textAlign: "center" }}>
            <a className="simple-text logo-normal">
              <img
                height="28px"
                src="http://www.tcmb.gov.tr/wps/wcm/connect/262f6943-1f47-44b8-9471-a488940f31d4/Logo.png?MOD=AJPERES&CACHEID=ROOTWORKSPACE-262f6943-1f47-44b8-9471-a488940f31d4-m2sNI2C"
                alt=""
              />
            </a>
          </div>
          <NavBar>
            <li>
              <a
                data-toggle="collapse"
                href="#componentsExamples"
                className="collapsed"
                aria-expanded="false"
              >
              <i className="ti-panel"></i>
                <p className="sb-font-size">
                  Drop Down<b className="caret" />
                </p>
              </a>
              <div
                className="collapse"
                id="componentsExamples"
                aria-expanded="false"
                style={{ height: "0px" }}
              >
                <ul className="nav">
                  <li>
                    <a>
                      <span className="sidebar-mini">B</span>
                      <span className="sidebar-normal">Buttons</span>
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <NavLink
              to="/anamenu"
              label="Ana Menü"
              onClick={this.closeSideBarIfNecessary}
            />
            <NavLink
              to="/epostalistesi"
              label="E-Posta Listesi"
              onClick={this.closeSideBarIfNecessary}
            />
            <NavLink
              to="/ylistesi"
              label="Yemek Listesi"
              onClick={this.closeSideBarIfNecessary}
            />
            <NavLink
              to="/yeniduyuru"
              label="Yeni Duyuru"
              onClick={this.closeSideBarIfNecessary}
            />
            <NavLink
              to="/taslaklar"
              label="Taslaklar"
              onClick={this.closeSideBarIfNecessary}
            />
            <NavLink
              to="/telefonrehberi"
              label="Telefon Rehberi"
              onClick={this.closeSideBarIfNecessary}
            />
            <NavLink
              to="/izinturnike"
              label="İzin / Turnike Verileri"
              onClick={this.closeSideBarIfNecessary}
            />
            <NavLink
              to="/obekleyenler"
              label="Onay Bekleyenler"
              onClick={this.closeSideBarIfNecessary}
            />
            <NavLink
              to="/gonderilenler"
              label="Gönderilenler"
              onClick={this.closeSideBarIfNecessary}
            />
            <li>
              <a onClick={this.guvenlicikis}>
                <p className="sb-font-size">Güvenli Çıkış</p>
              </a>
            </li>
          </NavBar>
        </div>
        <div>
          <GuvenliCikisModal
            isOpen={this.state.guvenliCikisModalState}
            state={this.handleModalState}
          />
        </div>
      </React.Fragment>
    );
  }
}

export default Sidebar;
