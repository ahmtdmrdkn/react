import "./App.css";
import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Wrapper from "./components/theme/Wrapper";
import Sidebar from "./components/theme/Sidebar";
import PageWrapper from "./components/theme/PageWrapper";
import YeniDuyuru from "./components/pages/YeniDuyuru";
import NotFound from './components/pages/NotFound';

class App extends Component {
  render() {
    return (
      <Router>
        <Wrapper>
          <Sidebar />
          <PageWrapper>
            <Switch>
              <Route path="/yeniduyuru" component={YeniDuyuru} />
              <Route component={NotFound} />
            </Switch>
          </PageWrapper>
        </Wrapper>
      </Router>
    );
  }
}

export default App;
