import React, { Component } from 'react';
import { ROOT_PATH } from 'utils/config';
import { Route } from 'react-router';
import Button from '@material-ui/core/Button';
import Easy from './Easy';
import Medium from './Medium';
import Difficult from './Difficult';

export default class Additions extends Component {

  renderLevelsOptions = () => {
    return ["Easy", "Medium", "Difficult"].map((leveltext, level) => {
      return (
          <Button
            key={level}
            onClick={() => this.props.history.push(`${ROOT_PATH}/additions/${level}`)}
            style={{margin: "auto", width: "50%", marginTop: "50px"}}
            color="primary"
            variant="outlined"
            size="small">
            {leveltext}
          </Button>
        );
    })
  }

  renderLevel() {
    return [Easy, Medium, Difficult].map((LevelComponent, level) => {
      return (
        <Route exact path={`${ROOT_PATH}/additions/${level}`} component={LevelComponent} key={level} />
      );
    });
  }

  render() {
    return (
      <div style={{display: "flex", flexDirection: "column"}}>
        <Route exact path={`${ROOT_PATH}/additions`} component={this.renderLevelsOptions} />
        {this.renderLevel()}
      </div>
    );
  }
}
