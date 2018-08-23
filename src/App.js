import React, { Component } from 'react';
import Header from 'components/header';
import Home from 'components/home';
import Additions from 'components/additions';
import Subtraction from 'components/subtraction';
import Multiplication from 'components/multiplication';
import { ROOT_PATH } from 'utils/config';

import { Route } from 'react-router';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Route exact path={`${ROOT_PATH}`} component={Home} />
        <Route exact path={`${ROOT_PATH}/additions`} component={Additions} />
        <Route exact path={`${ROOT_PATH}/subtraction`} component={Subtraction} />
        <Route exact path={`${ROOT_PATH}/multiplication`} component={Multiplication} />
        {/* <Route exact path="/division" component={Home} /> */}
      </div>
    );
  }
}

export default App;
