import React from 'react';

const API_CITIES = 'http://demo6468405.mockable.io/weather-crawlers/cities';
const API_WEATHER = 'http://demo6468405.mockable.io/weather-crawlers/current-weathers/by-city-name/Daejeon';

class City extends React.Component {
  state = {
    city: 'hello'
  };

  constructor(props) {
    super(props);
    console.log(this.state.city);
    this.state = {
      city: 'asd'
    };
  }

  componentDidMount() {
    console.log(this.state.city);

    setTimeout(() => {
      this.setState({
        city: 'DDDDDD'
      });
    }, 2000);
  }

  render() {
    return (
      <div>
        <h1>Cities</h1>
        <p>City list : current city = {this.state.city}</p>
        <div>
          API : <a href={API_CITIES}>{API_CITIES}</a>
        </div>
      </div>
    );
  }
}

export default City;
