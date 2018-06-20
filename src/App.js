import "./App.css";
import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Wrapper from "./components/theme/Wrapper";
import Sidebar from "./components/theme/Sidebar";
import PageWrapper from "./components/theme/PageWrapper";
import YeniDuyuru from "./components/pages/YeniDuyuru";
import YetkinizYok from './components/pages/YetkinizYok';

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
  checkRouteSafety(availableAuth) {
    for (let i=0; i<this.state.yetkiler.length; i++)
      if (this.state.yetkiler[i] === availableAuth)
        return true;
    return false;
  }
  render() {
    return (
      <Router>
        <Wrapper>
          <Sidebar />
          <PageWrapper>
            <Switch>
              <Route path="/yeniduyuru" render={() =>
                this.checkRouteSafety(1) ? <YeniDuyuru /> : <YetkinizYok />
              } />
            </Switch>
          </PageWrapper>
        </Wrapper>
      </Router>
    );
  }
}

export default App;