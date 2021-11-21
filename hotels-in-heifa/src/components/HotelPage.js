import React, { Component } from 'react';
import { CallNowButton } from './CallNowButton';
import { Link } from 'react-router-dom';
import '../styles/HotelPage.css';
import ThemeContext from '../helpers/theme-context';

export class HotelPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <ThemeContext.Consumer>
        {(theme) => (
          <div style={theme} className='hotel-page'>
            <Link className='home-btn' to={'/'}>
              {<i className='fas fa-home'></i>}
            </Link>
            <h1 style={theme}>{this.props.name}</h1>
            <img alt='hotel-img' src={this.props.img} />
            <span>
              {this.props.street} {this.props.number} <i className='fas fa-map-marker-alt'></i>
            </span>
            <span>
              {this.props.phone} <i className='fas fa-phone-alt'></i>
            </span>
            <span className='about'>
              <p>
                קצת עלינו <i className='fas fa-info'></i>
              </p>
              {this.props.about}
            </span>
            <CallNowButton className='call-btn' phone={this.props.phone} />
          </div>
        )}
      </ThemeContext.Consumer>
    );
  }
}

export default HotelPage;
