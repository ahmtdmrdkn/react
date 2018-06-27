import "./App.css";
import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import Wrapper from "./components/theme/Wrapper";
import Sidebar from "./components/theme/Sidebar";
import PageWrapper from "./components/theme/PageWrapper";
import YeniDuyuru from "./components/pages/YeniDuyuru";
import YetkinizYok from "./components/pages/YetkinizYok";
import Taslaklar from "./components/pages/Taslaklar";
import AnaMenu from "./components/pages/AnaMenu";
import GorevliYoneticiListesi from "./components/pages/GorevliYoneticiListesi";
import YemekListesi from "./components/pages/YemekListesi";
import Gonderilenler from "./components/pages/Gonderilenler";
import TelefonRehberi from "./components/pages/TelefonRehberi";
import IzinTurnike from "./components/pages/IzinTurnike";
import OnayBekleyenler from "./components/pages/OnayBekleyenler";
import LiraDergisi from "./components/pages/LiraDergisi";

class App extends Component {
  constructor() {
    super();
    this.state = {
      yetkiler: []
    };
    this.checkRouteSafety = this.checkRouteSafety.bind(this);
  }
  componentDidMount() {
    this.setState({
      yetkiler: [1, 2]
    });
  }
  checkRouteSafety(availableAuthForThisRoute) {
    for (let i = 0; i < this.state.yetkiler.length; i++)
      if (this.state.yetkiler[i] === availableAuthForThisRoute) return true;
    return false;
  }
  render() {
    return (
      <Router>
        <Wrapper>
          <Sidebar />
          <PageWrapper>
            <Switch>
              <Route
                path="/yeniduyuru"
                render={() =>
                  this.checkRouteSafety(1) ? <YeniDuyuru /> : <YetkinizYok />
                }
              />
              <Route path="/anamenu" component={AnaMenu} />
              <Route path="/taslaklar" component={Taslaklar} />
              <Route path="/gylistesi" component={GorevliYoneticiListesi} />
              <Route path="/ylistesi" component={YemekListesi} />
              <Route path="/gonderilenler" component={Gonderilenler} />
              <Route path="/telefonrehberi" component={TelefonRehberi} />
              <Route path="/izinturnike" component={IzinTurnike} />
              <Route path="/obekleyenler" component={OnayBekleyenler} />
              <Route path="/liradergisi" component={LiraDergisi} />
              <Redirect to="/anamenu" />
            </Switch>
          </PageWrapper>
        </Wrapper>
      </Router>
    );
  }
}

export default App;
