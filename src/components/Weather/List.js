import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';

// Stateless component
const List = props => {
  const { cities, match } = props;
  const { url } = match;

  return (
    <div className="weather-list">
      <p> - 도시를 골라주세요! - </p>
      <ul className="weather-cities">
        {cities.map(item => (
          <li key={item}>
            <Link to={`${url}/${item}`}>{item}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default withRouter(List);
