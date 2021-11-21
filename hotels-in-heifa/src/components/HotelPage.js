import React, { Component } from 'react';

export class HotelPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <img alt='hotel-img' src={this.props.img} />
        <span>{this.props.name}</span>
        <span>
          {this.props.street} {this.props.number}
        </span>
        <button>Call Now {this.props.phone}</button>
      </div>
    );
  }
}

export default HotelPage;
