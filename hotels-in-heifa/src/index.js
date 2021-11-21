import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import HotelsGallery from './components/HotelsGallery';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { HotelPage } from './components/HotelPage';
import { kebabCase } from './helpers/helpers';
import { hotelData } from './data/hotels';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route exect path='/' element={<HotelsGallery />} />

        {hotelData.map((hotel) => (
          <Route
            exect
            key={hotel.name}
            path={'/' + encodeURIComponent(kebabCase(hotel.name))}
            element={
              <HotelPage
                key={hotel.name}
                name={hotel.name}
                img={hotel.img}
                street={hotel['street name']}
                number={hotel.number}
                phone={hotel.phone}
              />
            }
          />
        ))}
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
