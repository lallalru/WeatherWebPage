import React from 'react';
import Icon from './Icon';

const API_WEATHER = 'http://demo6468405.mockable.io/weather-crawlers/current-weathers/by-city-name';

class TodayWeather extends React.Component {
  state = {
    weather: null
  };

  async componentDidMount() {
    // const { cityId } = this.props.match.params;
    const cityId = 'Daejeon';
    const api = `${API_WEATHER}/${cityId}`;

    const weather = await fetch(api)
      .then(res => res.json())
      .then(data => data.weather[0]);

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

    return (
      <>
        <h2>{cityId}</h2>
        <div>{JSON.stringify(weather)}</div>

        <h3 className="weather-main">{weather.main}</h3>
        <div className="weather-image">
          <Icon iconId={weather.id} />
        </div>
      </>
    );
  }
}

export default TodayWeather;
