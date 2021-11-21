import React, { Component } from 'react';
import '../styles/CallNowButton.css';

export class CallNowButton extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <button>
        {' '}
        <i className='fas fa-phone-alt'></i>
      </button>
    );
  }
  //   TODO - Add call functionality
}

export default CallNowButton;
