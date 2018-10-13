import React, { Component, Fragment } from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";

import Site from './Site';
import Admin from './Admin';
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Fragment>
          <Route exact path="/nalakaiser" component={Site} />
          <Route exact path="/nalakaiser/admin" component={Admin} />
        </Fragment>
      </BrowserRouter>
    );
  }
}

export default App;