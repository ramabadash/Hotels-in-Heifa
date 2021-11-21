import React, { Component } from 'react';
import '../styles/HotelCard.css';

export class HotelCard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <li className='hotel-card'>
        <img alt='hotel-img' src={this.props.img} />
        <p>{this.props.name}</p>
      </li>
    );
  }
}

export default HotelCard;
