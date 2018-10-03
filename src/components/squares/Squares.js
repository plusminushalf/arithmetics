import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Table from 'components/table/';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { getItem } from 'utils/localstorage';
import { withRouter } from 'react-router-dom';
import { ROOT_PATH } from 'utils/config';
import { Route } from 'react-router';

class Squares extends Component {
  constructor(props) {
    super(props);
    this.state = {
        started: false,
        resume: false
    };
  }

  renderRules = () => {
    return (
      <div style={{margin: "auto", marginTop: "50px", textAlign: "center"}}>
        <List>
          <ListItem>
            <ListItemText>
              Squares
            </ListItemText>
          </ListItem>
        </List>
      </div>
      );
  }

  renderOptions = () => {
    return (
      <div style={{display: "flex", flexDirection: "column"}}>
        <Button
          onClick={() => this.props.history.push(`${ROOT_PATH}/squares/30`)}
          style={{margin: "auto", width: "50%", marginTop: "50px"}}
          color="primary"
          variant="outlined"
          size="small">
          squares less that 30
        </Button>
        <Button
          onClick={() => this.props.history.push(`${ROOT_PATH}/squares/100`)}
          style={{margin: "auto", width: "50%", marginTop: "50px"}}
          color="primary"
          variant="outlined"
          size="small">
          squares
        </Button>
      </div>
    );
  }

  render30Squares = () => {
    return (
      <div style={{display: "flex", flexDirection: "column"}}>
        {getItem('squares30data') && !this.state.started &&
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
          evaluate={(result, first, second) => result === first * second}
          numberOfRows={10}
          numberOfCols={5}
          name="squares30"
          resume={this.state.resume}
          generateCell={() => {
            const number = Math.ceil(Math.random()*30);
            return [number, number];
          }}
          renderOperands={(first, second) => `${first} * ${second}`}
        />
        }
      </div>
    );
  }

  render100Squares = () => {
    return (
      <div style={{display: "flex", flexDirection: "column"}}>
        {getItem('squares100data') && !this.state.started &&
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
          evaluate={(result, first, second) => result === first * second}
          numberOfRows={10}
          numberOfCols={3}
          name="squares100"
          resume={this.state.resume}
          generateCell={() => {
            const number = Math.ceil(Math.random()*100) + 2;
            return [number, number];
          }}
          renderOperands={(first, second) => `${first} * ${second}`}
        />
        }
      </div>
    );
  }

  render() {
    return (
      <div style={{display: "flex", flexDirection: "column"}}>
        {this.renderRules()}
        <Route exact path={`${ROOT_PATH}/squares`} component={() => {
            return this.renderOptions()
          }} />
        <Route exact path={`${ROOT_PATH}/squares/30`} component={() => {
            return this.render30Squares();
            }} />
        <Route exact path={`${ROOT_PATH}/squares/100`} component={() => {
            return this.render100Squares();
            }} />
      </div>
    );
  }
}

const SquaresWithRouter = withRouter(Squares);
export default  SquaresWithRouter;
