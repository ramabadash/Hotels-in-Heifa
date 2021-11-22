import React, { Component } from 'react';
import HotelsGallery from './HotelsGallery';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HotelPage } from './HotelPage';
import { kebabCase } from '../helpers/helpers';
import { hotelData } from '../data/hotels';
import ThemeContext, { themes } from '../helpers/theme-context';

export class App extends Component {
  constructor(props) {
    super(props);
    //Toggle between themes
    this.toggleTheme = () => {
      this.setState((state) => ({
        theme: state.theme === themes.dark ? themes.light : themes.dark,
      }));
    };
    // State - theme & change theme function
    this.state = {
      theme: themes.light,
      toggleTheme: this.toggleTheme,
    };
  }
  render() {
    return (
      <ThemeContext.Provider value={this.state.theme}>
        <Routes>
          {/* Home page route */}
          <Route exect path='/' element={<HotelsGallery toggleTheme={this.state.toggleTheme} />} />

          {/* Route for every hotel page */}
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
      </ThemeContext.Provider>
    );
  }
}

export default App;
