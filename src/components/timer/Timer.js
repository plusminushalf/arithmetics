import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import { setItem, getItem } from 'utils/localstorage';

export default class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      min: (this.props.loadFromStorage && getItem('min')) || 0,
      sec: (this.props.loadFromStorage && getItem('sec'))|| 0
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
    setItem('min', min);
    setItem('sec', sec);
    this.setState({
      sec,
      min
    })
  }

  render() {
    return (
      <div style={this.props.style}>
        <Typography
          variant="body1"
          color="inherit"
        >
        Time lapsed:
        </Typography>
        <Typography
          variant="title"
          color="inherit"
        >
          {this.state.min} : {this.state.sec}
        </Typography>
      </div>
    );
  }
}
