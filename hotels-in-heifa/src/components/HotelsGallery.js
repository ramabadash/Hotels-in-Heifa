import React, { Component } from 'react';
import { hotelData } from '../data/hotels';
import { HotelCard } from './HotelCard';
import { Link } from 'react-router-dom';
import { kebabCase } from '../helpers/helpers';

export class HotelsGallery extends Component {
  render() {
    return (
      <div>
        <h1> Hotels Gallery</h1>
        <ul className='hotels-list'>
          {hotelData.map((hotel) => (
            <Link key={hotel.name} to={'/' + kebabCase(hotel.name)}>
              {<HotelCard key={hotel.name} name={hotel.name} img={''} />}
            </Link>
          ))}
        </ul>
      </div>
    );
  }
}

export default HotelsGallery;
