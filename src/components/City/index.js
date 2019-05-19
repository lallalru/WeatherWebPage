import React from 'react';

const API_CITIES = 'http://demo6468405.mockable.io/weather-crawlers/cities';
// const API_WEATHER = 'http://demo6468405.mockable.io/weather-crawlers/current-weathers/by-city-name/Daejeon';

class City extends React.Component {
  state = {
    cities: []
  };

  componentDidMount() {
    console.log(this.state.cities);

    const cities = fetch(API_CITIES)
      .then(res => res.json())
      .then(data => {
        this.setState({
          cities: data
        });
      });

    // Can't use data as sync
    console.warn('FETCHED CITIES', cities);
  }

  render() {
    return (
      <div>
        <h1>Cities</h1>
        <p>City list</p>
        <div>{this.state.cities.join(' ')}</div>
        <div>
          API : <a href={API_CITIES}>{API_CITIES}</a>
        </div>
      </div>
    );
  }
}

export default City;
