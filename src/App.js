import React, { Component } from "react";
import { Route } from "react-router-dom";
/**Theme Components */
import Navbar from "./components/theme/Navbar";
import Sidebar from "./components/theme/Sidebar";
import Menus from "./components/theme/Menus";
import PageContainer from "./components/theme/PageContainer";
import Footer from "./components/theme/Footer";
/**Page Components */
import Musteriler from "./pages/Musteriler";
import YeniDuyuru from "./pages/YeniDuyuru";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar>
          <Sidebar>
            <Menus />
          </Sidebar>
        </Navbar>
        <PageContainer>
          <Route path="/musteriler" component={Musteriler} />
          <Route path="/yeniduyuru" component={YeniDuyuru} />
        </PageContainer>
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
