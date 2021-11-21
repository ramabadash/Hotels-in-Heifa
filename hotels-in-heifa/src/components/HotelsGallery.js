import React, { Component } from 'react';
import { hotelData } from '../data/hotels';
import { HotelCard } from './HotelCard';

export class HotelsGallery extends Component {
  render() {
    return (
      <div>
        <ul className='hotels-list'>
          {hotelData.map((hotel) => (
            <HotelCard key={hotel.name} name={hotel.name} img={''} />
          ))}
        </ul>
      </div>
    );
  }
}

export default HotelsGallery;
