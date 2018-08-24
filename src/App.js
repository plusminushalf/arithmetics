import React, { Component } from 'react';
import Header from 'components/header';
import Home from 'components/home';
import Additions from 'components/additions';
import Subtraction from 'components/subtraction';
import Multiplication from 'components/multiplication';
import Squares from 'components/squares';
import { ROOT_PATH } from 'utils/config';

import { Route } from 'react-router';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Route exact path={`${ROOT_PATH}`} component={Home} />
        <Route path={`${ROOT_PATH}/additions`} component={Additions} />
        <Route path={`${ROOT_PATH}/subtraction`} component={Subtraction} />
        <Route path={`${ROOT_PATH}/multiplication`} component={Multiplication} />
        <Route path={`${ROOT_PATH}/squares`} component={Squares} />
        {/* <Route exact path="/division" component={Home} /> */}
      </div>
    );
  }
}

export default App;
