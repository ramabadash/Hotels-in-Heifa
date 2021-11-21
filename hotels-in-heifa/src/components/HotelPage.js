import React, { Component } from 'react';
import { CallNowButton } from './CallNowButton';
import { Link } from 'react-router-dom';
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
          {this.props.street} {this.props.number} <i className='fas fa-map-marker-alt'></i>
        </span>
        <span>
          {this.props.phone} <i className='fas fa-phone-alt'></i>
        </span>
        <span className='about'>
          <p>
            קצת עלינו <i class='fas fa-info'></i>
          </p>
          {this.props.about}
        </span>
        <CallNowButton className='call-btn' phone={this.props.phone} />
      </div>
    );
  }
}

export default HotelPage;
