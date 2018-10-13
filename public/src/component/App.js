import React, { Component, Fragment } from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";

import Site from './Site';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Fragment>
          <Route path="/nalakaiser" component={Site} />
        </Fragment>
      </BrowserRouter>
    );
  }
}

export default App;