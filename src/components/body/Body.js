import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Table from 'components/table/';
import Timer from 'components/timer';

export default class Body extends Component {
  constructor(props) {
    super(props);
    this.state = {
      started: false
    };
  }

  render() {
    return (
      <div style={{display: "flex"}}>
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
          <Card style={{margin: "50px", flexGrow: "1"}}>
            <CardContent>
              <Timer />
              <Table />
            </CardContent>
            <CardActions>
              <Button 
                onClick={() => window.location.reload()}
                style={{marginLeft: "auto"}}
                color="primary"
                variant="outlined"
                size="small">
                Reload
              </Button>
              <Button color="primary" variant="contained" size="small">Submit</Button>
            </CardActions>
          </Card>
        }
      </div>
    );
  }
}
