import React from 'react';
import { Link } from 'react-router-dom';

const API_CITIES = 'http://demo6468405.mockable.io/weather-crawlers/cities';
const API_WEATHER = 'http://demo6468405.mockable.io/weather-crawlers/current-weathers/by-city-name/Daejeon';

// Stateless component
const Topics = () => {
  return (
    <div>
      <h1>Topics</h1>
      <p>Topic list</p>
    </div>
  );
};

export default Topics;
