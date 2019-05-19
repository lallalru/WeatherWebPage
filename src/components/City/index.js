import React from 'react';

const API_CITIES = 'http://demo6468405.mockable.io/weather-crawlers/cities';
const API_WEATHER = 'http://demo6468405.mockable.io/weather-crawlers/current-weathers/by-city-name/Daejeon';

// Stateless component
class City extends React.Component {
  render() {
    return (
      <div>
        <h1>Cities</h1>
        <p>City list</p>
        <div>
          API : <a href={API_CITIES}>{API_CITIES}</a>
        </div>
      </div>
    );
  }
}

export default City;
