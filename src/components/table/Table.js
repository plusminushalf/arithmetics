import React, { Component } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Input from '@material-ui/core/Input';
import './table.css';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Timer from 'components/timer';
import Button from '@material-ui/core/Button';

export default class Body extends Component {

  constructor(props) {
    super(props);
    this.cols = Array.apply(null, Array(10)).map(() => Math.ceil(Math.random()*90) + 10);
    this.rows = Array.apply(null, Array(10)).map(() => Math.ceil(Math.random()*90) + 10);
    this.score = 0;
    this.state = {
      inputs: Array.apply(null, Array(10)).map(() => Array.apply(null, Array(10)).map(() => 0)),
      evalute: false
    };
  }

  setValue = (value, row, col) => {
    const {inputs} = this.state;
    inputs[row][col] = parseInt(value, 10);
    this.setState({
      inputs
    })
  }

  takeInput() {
    return this.rows.map((row, rowindex) => {
      return (
        <TableRow key={rowindex}>
          <TableCell scope="row">
            {row}
          </TableCell>
          {Array.apply(null, Array(10)).map((ele, colindex) => {
            return (
              <TableCell key={colindex}>
                <Input
                  type="number"
                  inputProps={{
                    min: "0",
                    max: "999"
                  }}
                  onChange={(event) => this.setValue(event.target.value, rowindex, colindex)}
                  style={{width: "30px"}}
                />
              </TableCell>
            );
          })}
        </TableRow>
      );
    });
  }

  evaluate() {
    return this.rows.map((row, rowindex) => {
      return (
        <TableRow key={rowindex}>
          <TableCell scope="row">
            {row}
          </TableCell>
          {Array.apply(null, Array(10)).map((ele, colindex) => {
            return (
              <TableCell key={colindex}>
                {this.state.inputs[rowindex][colindex] === this.rows[rowindex] + this.cols[colindex] && ++this.score &&
                  <Typography
                    variant="body1"
                    color="primary"
                  >{this.state.inputs[rowindex][colindex]}
                  </Typography>
                }
                {this.state.inputs[rowindex][colindex] !== this.rows[rowindex] + this.cols[colindex] &&
                  <Typography
                  variant="body1"
                  color="error"
                >{this.state.inputs[rowindex][colindex]}
                </Typography>
                }
              </TableCell>
            );
          })}
        </TableRow>
      );
    });
  }

  render() {
    return (
      <Card style={{margin: "50px", flexGrow: "1"}}>
        <CardContent>
          <Table >
            <TableHead>
              <TableRow>
                <TableCell key={0}></TableCell>
                {this.cols.map((col, index) => {
                  return (
                    <TableCell key={index}>{col}</TableCell>
                  );
                })}
              </TableRow>
            </TableHead>
            <TableBody>
              {!this.state.evalute && this.takeInput()}
              {this.state.evalute && this.evaluate()}
            </TableBody>
          </Table>
            <CardActions>
              <Timer stop={this.state.evalute} style={{paddingLeft: "24px"}}/>
              {this.state.evalute &&
                <div style={{marginLeft: "auto"}}>
                  <Typography
                    variant="title"
                    color="inherit"
                  >
                  Score: {this.score} / 100
                  </Typography>
                </div>
              }
              <Button
                onClick={() => window.location.reload()}
                style={{marginLeft: "auto"}}
                color="primary"
                variant="outlined"
                size="small">
                Reload
              </Button>
              <Button
                  onClick={() => {
                    this.score = 0;
                    this.setState({evalute: true})
                  }}
                  color="primary"
                  variant="contained"
                  size="small"
              >
                  Submit
              </Button>
            </CardActions>
          </CardContent>
        </Card>
    );
  }
}
