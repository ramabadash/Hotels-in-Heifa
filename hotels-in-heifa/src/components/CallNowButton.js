import React, { Component } from 'react';
import '../styles/CallNowButton.css';

export class CallNowButton extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <a href={`tel:+972${this.props.phone}`} className='call-now'>
        <button>
          {' '}
          <i className='fas fa-phone-alt'></i>
        </button>
      </a>
    );
  }
}

export default CallNowButton;
