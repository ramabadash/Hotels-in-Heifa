import React, { Component } from 'react';
import { CallNowButton } from './CallNowButton';

export class HotelPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <img alt='hotel-img' src={this.props.img} />
        <span>{this.props.name}</span>
        <span>
          {this.props.street} {this.props.number}
        </span>
        <CallNowButton phone={this.props.phone} />
      </div>
    );
  }
}

export default HotelPage;
