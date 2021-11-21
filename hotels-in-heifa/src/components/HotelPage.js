import React, { Component } from 'react';
import { CallNowButton } from './CallNowButton';
import '../styles/HotelPage.css';

export class HotelPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className='hotel-page'>
        <Link className='home-btn' to={'/'}>
          {<i className='fas fa-home'></i>}
        </Link>
        <h1>{this.props.name}</h1>
        <img alt='hotel-img' src={this.props.img} />
        <span>
          <i className='fas fa-map-marker-alt'></i> {this.props.street} {this.props.number}
        </span>
        <CallNowButton className='call-btn' phone={this.props.phone} />
      </div>
    );
  }
  //TODO - return to home page "/"
}

export default HotelPage;
