import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import { setItem, getItem } from 'utils/localstorage';

export default class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      min: (this.props.loadFromStorage && getItem(this.props.name + 'min')) || 0,
      sec: (this.props.loadFromStorage && getItem(this.props.name + 'sec'))|| 0
    };
    this.timer = setInterval(this.tick, 1000);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.stop) {
      clearInterval(this.timer);
    }
  }

  tick = () => {
    let {sec, min} = this.state;
    sec++;
    if (sec === 60) {
      sec = 0;
      min++;
    }
    setItem(this.props.name + 'min', min);
    setItem(this.props.name + 'sec', sec);
    this.setState({
      sec,
      min
    })
  }

  render() {
    return (
      <div style={{display: "flex"}}>
        <Typography
          variant="body1"
          color="inherit"
        >
        Time lapsed: {this.state.min} : {this.state.sec}
        </Typography>
      </div>
    );
  }
}
