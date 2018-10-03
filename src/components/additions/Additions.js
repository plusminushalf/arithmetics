import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Easy from './Easy';
import Medium from './Medium';
import Difficult from './Difficult';

export default class Additions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      level: -1
    };
  }

  renderLevelsOptions() {
    return ["Easy", "Medium", "Difficult"].map((leveltext, level) => {
      return (
          <Button
            key={level}
            onClick={() => this.setState({level})}
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
    const Component = [Easy, Medium, Difficult][this.state.level];
    return (
      <Component />
    );
  }

  render() {
    return (
      <div style={{display: "flex", flexDirection: "column"}}>
        {this.state.level === -1 &&
          this.renderLevelsOptions()
        }
        {this.state.level !== -1 && this.renderLevel()}
      </div>
    );
  }
}
