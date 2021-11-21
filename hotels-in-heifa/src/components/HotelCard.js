import React, { Component } from 'react';
import '../styles/HotelCard.css';
import ThemeContext from '../helpers/theme-context';

export class HotelCard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <ThemeContext.Consumer>
        {(theme) => (
          <li style={theme} className='hotel-card'>
            <img alt='hotel-img' src={this.props.img} />
            <p>{this.props.name}</p>
          </li>
        )}
      </ThemeContext.Consumer>
    );
  }
}

export default HotelCard;
