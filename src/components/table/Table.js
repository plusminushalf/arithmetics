import React, { Component } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Input from '@material-ui/core/Input';
import './table.css';
import Typography from '@material-ui/core/Typography';

export default class Body extends Component {

  constructor(props) {
    super(props);
    this.cols = Array.apply(null, Array(10)).map(() => Math.ceil(Math.random()*90) + 10);
    this.rows = Array.apply(null, Array(10)).map(() => Math.ceil(Math.random()*90) + 10);
    this.state = {
      inputs: Array.apply(null, Array(10)).map(() => Array.apply(null, Array(10)).map(() => 0))
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
                {this.state.inputs[rowindex][colindex] === this.rows[rowindex] + this.cols[colindex] &&
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
          {!this.props.evalute && this.takeInput()}
          {this.props.evalute && this.evaluate()}
        </TableBody>
      </Table>
    );
  }
}
