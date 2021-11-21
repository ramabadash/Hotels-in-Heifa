import React, { Component } from 'react';
import { hotelData } from '../data/hotels';

export class HotelsGallery extends Component {
  render() {
    return (
      <div>
        <ul className='hotels-list'>
          {hotelData.map((hotel) => (
            <li>
              <img alt='hotel-img' src='' />
              <span>{hotel.name}</span>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default HotelsGallery;
