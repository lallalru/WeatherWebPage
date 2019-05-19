import React from 'react';

const API_WEATHER = 'http://demo6468405.mockable.io/weather-crawlers/current-weathers/by-city-name/Daejeon';

class TodayWeather extends React.Component {
  state = {
    weather: {}
  };

  async componentDidMount() {
    // const weather = await fetch(API_WEATHER)
    //   .then(res => res.json())
    //   .then(data => data);
    // this.setState({
    //   weather
    // });
  }

  render() {
    const { cityId } = this.props.match.params;
    const { weather } = this.state;

    return <div>{cityId}</div>;
  }
}

export default TodayWeather;
