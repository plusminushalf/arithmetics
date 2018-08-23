import React, { Component } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Input from '@material-ui/core/Input';
import style from './table.css';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Timer from 'components/timer';
import Button from '@material-ui/core/Button';
import { setItem, getItem, removeItem } from 'utils/localstorage';

export default class Body extends Component {

  constructor(props) {
    super(props);
    const storage = this.loadFromStorage();
    this.cols = storage.cols;
    this.rows = storage.rows;
    this.score = 0;
    this.loadedFromStorage = storage.loadedFromStorage;
    this.state = {
      inputs: storage.inputs,
      evaluate: false
    };
  }

  loadFromStorage = () => {
    const storage = {
      cols: (this.props.resume
        && getItem(this.props.name + 'cols'))
      || Array.apply(null, Array(10)).map(() => Math.ceil(Math.random()*100)),
      rows: (this.props.resume
        && getItem(this.props.name + 'rows'))
      || Array.apply(null, Array(10)).map(() => Math.ceil(Math.random()*100)),
      inputs: (this.props.resume
        && getItem(this.props.name + 'inputs'))
      || Array.apply(null, Array(10)).map(() => Array.apply(null, Array(10)).map(() => 0)),
      loadedFromStorage: (this.props.resume && getItem(this.props.name + 'cols')) && true
    };
    setItem(this.props.name + 'cols', storage.cols);
    setItem(this.props.name + 'rows', storage.rows);
    return storage;
  }

  setValue = (value, row, col) => {
    const {inputs} = this.state;
    inputs[row][col] = parseInt(value, 10);
    setItem(this.props.name + 'inputs', inputs);
    this.setState({
      inputs
    })
  }

  takeInput() {
    return this.rows.map((row, rowindex) => {
      return (
        <TableRow key={rowindex}>
          {Array.apply(null, Array(10)).map((ele, colindex) => {
          return (
          <TableCell key={colindex} style={{padding: "5px"}}>
            <div className={style.cell}>
              <Typography
                variant="body1"
                color="textSecondary"
                style={{display: "flex", alignItems: "center"}}
              >
                {this.props.renderOperands(this.rows[rowindex], this.cols[colindex])} =
              </Typography>
              <Input
                type="number"
                inputProps={{
                min: "0",
                max: "999"
                }}
                value={this.state.inputs[rowindex][colindex] || undefined}
                onChange={(event) => this.setValue(event.target.value, rowindex, colindex)}
                style={{width: "30px", marginLeft: "5px"}}
              />
            </div>
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
        {Array.apply(null, Array(10)).map((ele, colindex) => {
        return (
        <TableCell key={colindex}>
          <div className={style.cell}>
            <Typography
              variant="body1"
              color="textSecondary"
              style={{display: "flex", alignItems: "center"}}
            >
              {this.props.renderOperands(this.rows[rowindex], this.cols[colindex])} =
            </Typography>
            {this.props.evaluate(this.state.inputs[rowindex][colindex], this.rows[rowindex], this.cols[colindex])
            && ++this.score &&
            <Typography
              variant="body1"
              color="primary"
            >{this.state.inputs[rowindex][colindex]}
            </Typography>
            }
            {!this.props.evaluate(this.state.inputs[rowindex][colindex], this.rows[rowindex], this.cols[colindex])
            && <Typography
              variant="body1"
              color="error"
            >{this.state.inputs[rowindex][colindex]}
            </Typography>
            }
          </div>
        </TableCell>
        );
        })}
      </TableRow>
      );
});
}

render() {
  return (
    <Card className={style['table-card']} style={{overflow: "scroll"}}>
      <CardContent>
        <Table >
          <TableBody>
            {!this.state.evaluate && this.takeInput()}
            {this.state.evaluate && this.evaluate()}
          </TableBody>
        </Table>
        <CardActions className={style.action}>
          <Timer
            name={this.props.name}
            loadFromStorage={this.loadedFromStorage}
            stop={this.state.evaluate}
          />
          {this.state.evaluate &&
            <Typography
              variant="title"
              color="inherit"
              style={{marginLeft: "auto"}}
            >
              Score: {this.score} / 100
            </Typography>
          }
          <Button
            onClick={() => {
            removeItem(this.props.name + 'inputs');
            removeItem(this.props.name + 'cols');
            removeItem(this.props.name + 'rows');
            window.location.reload()
            }}
            style={{marginLeft: "auto"}}
            color="primary"
            variant="outlined"
            size="small">
            Reload
          </Button>
          <Button
            onClick={() => {
            this.score = 0;
            removeItem(this.props.name + 'inputs');
            removeItem(this.props.name + 'cols');
            removeItem(this.props.name + 'rows');
            this.setState({evaluate: true})
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
