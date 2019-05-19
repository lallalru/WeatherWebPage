import React from 'react';
import Header from './Header';
import './App.css';

function App() {
  const city = 'Daejeon';

  return (
    <div className="App">
      <Header city={city} />
    </div>
  );
}

export default App;
