import React from 'react';
import Calculator from './components/Calculator';
import './styles/App.css';

const App = () => {
  return (
    <div className="App">
      <h1>AE RC10B6/7 Pill Calculator</h1>
      <p>
        <b>Using standard [kit] C and D mounts</b>
      </p>
      <p>
        <b>Note:</b> There may be several pill combinations that yield the same toe, anti-squat, pivot width, and pivot height values. The calculator will return the first combination it finds.
      </p>
      <Calculator />
    </div>
  );
};

export default App;