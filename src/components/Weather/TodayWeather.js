import React from 'react';

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
      .then(data => data);

    this.setState({
      weather
    });
  }

  render() {
    const { cityId } = this.props.match.params;
    const { weather } = this.state;

    return (
      <>
        <h2>{cityId}</h2>
        {weather && <div>{JSON.stringify(weather)}</div>}
      </>
    );
  }
}

export default TodayWeather;
