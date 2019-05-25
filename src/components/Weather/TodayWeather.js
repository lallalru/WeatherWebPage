import React from 'react';
import Icon from './Icon';

const API_WEATHER = 'http://localhost:8080/weather-crawler/current-weathers/by-city-name';

class TodayWeather extends React.Component {
  state = {
    weather: null
  };

  async componentDidMount() {
    const { cityId } = this.props.match.params;
    const api = `${API_WEATHER}/${cityId}`;

    const weather = await fetch(api)
      .then(res => res.json())
      .then(data => data);

    this.setState({
      weather
    });
  }

  render() {
    const { cityId } = this.props.match.params;
    const { weather } = this.state;

    if (!weather) {
      return <div>Loading...</div>;
    }

    const celsius = (weather.main.temp - 273.15).toFixed(2); // kelvin to celsius
    const weatherMain = weather.weather[0].main;
    const iconId = weather.weather[0].id;

    return (
      <div className="weather-today">
        <h2 className="weather-city">{cityId}은(는) 지금</h2>

        <div className="weather-today-meta">
          <h3 className="weather-main">날씨는 {weatherMain} 입니다.</h3>
          <div className="weather-temp">{celsius}° 이고&nbsp;&nbsp;</div>
        </div>
        <div className="weather-image">
          <Icon iconId={iconId} />
        </div>
      </div>
    );
  }
}

export default TodayWeather;
