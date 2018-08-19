import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Table from 'components/table/';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import StarIcon from '@material-ui/icons/Star';

export default class Body extends Component {
  constructor(props) {
    super(props);
    this.state = {
      started: false
    };
  }

  renderRules = () => {
    return (
      <div style={{margin: "auto", width: "50%", marginTop: "50px", textAlign: "center"}}>
        <List>
          <ListItem>
            <ListItemIcon>
              <StarIcon />
            </ListItemIcon>
            <ListItemText>Fill out all the cells with additions of specific column and row, once done press submit to check the answers
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
          <Table />
        }
      </div>
    );
  }
}
