import React, { Component } from 'react';
import HotelsGallery from './HotelsGallery';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HotelPage } from './HotelPage';
import { kebabCase } from '../helpers/helpers';
import { hotelData } from '../data/hotels';
import ThemeContext, { themes } from '../helpers/theme-context';

export class App extends Component {
  render() {
    return (
      <ThemeContext.Provider value={this.state.theme}>
        <Router>
          <Routes>
            <Route exect path='/' element={<HotelsGallery toggleTheme={this.state.toggleTheme} />} />

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
                    about={hotel.about}
                  />
                }
              />
            ))}
          </Routes>
        </Router>
      </ThemeContext.Provider>
    );
  }
}

export default App;
