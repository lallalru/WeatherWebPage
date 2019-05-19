import React from 'react';
import List from './List';

const API_CITIES = 'http://demo6468405.mockable.io/weather-crawlers/cities';
// const API_WEATHER = 'http://demo6468405.mockable.io/weather-crawlers/current-weathers/by-city-name/Daejeon';

class City extends React.Component {
  state = {
    cities: []
  };

  async componentDidMount() {
    const cities = await fetch(API_CITIES)
      .then(res => res.json())
      .then(data => data);

    // Now I can use data as sync!
    console.warn('FETCHED CITIES', cities);

    this.setState({
      cities
    });
  }

  render() {
    const { cities } = this.state;

    return (
      <div>
        <h1>Cities</h1>
        <List cities={cities} />
      </div>
    );
  }
}

export default City;
