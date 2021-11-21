import React, { Component } from 'react';
import { hotelData } from '../data/hotels';
import { HotelCard } from './HotelCard';
import { Link } from 'react-router-dom';
import { kebabCase } from '../helpers/helpers';
import '../styles/HotelsGallery.css';
import ThemeContext from '../helpers/theme-context';

export class HotelsGallery extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <ThemeContext.Consumer>
        {(theme) => (
          <div style={theme}>
            <label className='switch'>
              <input type='checkbox' onClick={this.props.toggleTheme} />
              <span className='slider'></span>
            </label>
            <h1 style={theme}> בחר את המלון האהוב עלייך בחיפה</h1>
            <ul className='hotels-list'>
              {hotelData.map((hotel) => (
                <Link key={hotel.name} to={'/' + kebabCase(hotel.name)}>
                  {<HotelCard key={hotel.name} name={hotel.name} img={hotel.img} />}
                </Link>
              ))}
            </ul>
          </div>
        )}
      </ThemeContext.Consumer>
    );
  }
}

export default HotelsGallery;
