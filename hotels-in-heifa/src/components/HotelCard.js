import React, { Component } from 'react';

export class HotelCard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <li>
        <img alt='hotel-img' src={this.props.img} width='80px' height='60px' />
        <span>{this.props.name}</span>
      </li>
    );
  }
}

export default HotelCard;
