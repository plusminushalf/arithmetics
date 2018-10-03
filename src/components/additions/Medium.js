import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Table from 'components/table/';
import { getItem } from 'utils/localstorage';

export default class Medium extends Component {
  constructor(props) {
    super(props);
    this.state = {
      started: false,
      resume: false,
    };
  }

  renderRules = () => {
    return (
      <div style={{margin: "auto", marginTop: "50px", textAlign: "center"}}>
        <List>
          <ListItem>
            <ListItemText>
              Medium Additions
            </ListItemText>
          </ListItem>
        </List>
      </div>
      );
  }

  render() {
    return (
      <div style={{display: "flex", flexDirection: "column"}}>
        {this.renderRules()}

        {getItem('additions1data') && !this.state.started &&
        <Button
          onClick={() => this.setState({started: true, resume: true})}
          style={{margin: "auto", width: "50%", marginTop: "50px"}}
          color="primary"
          variant="outlined"
          size="small">
          Resume
        </Button>}
        {!this.state.started &&
        <Button
          onClick={() => this.setState({started: true})}
          style={{margin: "auto", width: "50%", marginTop: "50px"}}
          color="primary"
          variant="outlined"
          size="small">
          Start
        </Button>}
        {this.state.started &&
        <Table
          evaluate={(result, first, second) => result === first + second}
          name="additions1"
          resume={this.state.resume}
          renderOperands={(first, second) => `${first} + ${second}`}
          generateCell={() => {return [Math.ceil(Math.random()*100), Math.ceil(Math.random()*100)];}}
        />
        }
      </div>
      );
  }
}
