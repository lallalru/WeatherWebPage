import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './Header';
import Navigation from './components/Navigation';
import Home from './components/Home';
import About from './components/About';
import Weather from './components/Weather';

const RouterApp = () => {
  const city = 'Daejeon';

  return (
    <div>
      <Header city={city} />
      <Navigation />

      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/weather" component={Weather} />
      </Switch>
    </div>
  );
};

export default RouterApp;
