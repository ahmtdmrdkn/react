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
import KarsilamaEkrani from "./components/pages/KarsilamaEkrani";
import GorevliYoneticiListesi from "./components/pages/GorevliYoneticiListesi";
import YemekListesi from "./components/pages/YemekListesi";

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
      <React.Fragment>
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
                <Route path="/taslaklar" component={Taslaklar} />
                <Route path="/gylistesi" component={GorevliYoneticiListesi} />
                <Route path="/ylistesi" component={YemekListesi} />
                <Route path="/karsilamaekrani" component={KarsilamaEkrani} />
                <Redirect to="karsilamaekrani" />
              </Switch>
            </PageWrapper>
          </Wrapper>
        </Router>
      </React.Fragment>
    );
  }
}

export default App;
