import React, { Component } from 'react';

export class CallNowButton extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return <button>Call Now {this.props.phone}</button>;
  }
  //   TODO - Add call functionality
}

export default CallNowButton;
