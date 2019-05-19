import React from 'react';
import { Route } from 'react-router-dom';
import Header from './Header';
import Navigation from './components/Navigation';
import Home from './components/Home';
import About from './components/About';
import City from './components/City';

const RouterApp = () => {
  const city = 'Daejeon';

  return (
    <div>
      <Header city={city} />
      <Navigation />

      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/city" component={City} />
    </div>
  );
};

export default RouterApp;
