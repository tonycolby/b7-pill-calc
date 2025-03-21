import React, { useState, useEffect } from 'react';
import { getPillLocation } from './pillOptions';
import '../styles/Calculator.css'; // Import the CSS file for styling

const Calculator = () => {
  const [toe, setToe] = useState('3');
  const [antiSquat, setAntiSquat] = useState('1');
  const [pivotWidth, setPivotWidth] = useState('0');
  const [pivotHeight, setPivotHeight] = useState('0');
  const [error, setError] = useState('');
  const [pillLocation, setPillLocation] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    runCalculation();
  };

  const runCalculation = (e) => {
    const TOLERANCE = 0.00001; // Tolerance for floating point comparison

    // Validate toe value
    const toeValue = parseFloat(toe);
    if (toeValue < 1 || toeValue > 5 || toeValue % 1 !== 0) {
      setError('Toe value must be between 1 and 5 and a multiple of 1.');
      return;
    }
    // Validate anti-squat value
    const antiSquatValue = parseFloat(antiSquat);
    if (antiSquatValue < -1 || antiSquatValue > 3 || antiSquatValue % 1 !== 0) {
      setError('Anti-Squat value must be between -1 and 3 and a multiple of 1.');
      return;
    }
    // Validate pivot width value
    const pivotWidthValue = parseFloat(pivotWidth);
    if (pivotWidthValue < -1.4 || pivotWidthValue > 1.4 || Math.abs(pivotWidthValue % 0.35) > TOLERANCE) {
      setError('Pivot Width value must be between -1.4 and 1.4 and a multiple of 0.35.');
      return;
    }
    // Validate pivot height value
    const pivotHeightValue = parseFloat(pivotHeight);
    if (pivotHeightValue < -1.4 || pivotHeightValue > 1.4 || Math.abs(pivotHeightValue % 0.35) > TOLERANCE) {
      setError('Pivot Height value must be between -1.4 and 1.4 and a multiple of 0.35.');
      return;
    }
    setError('');

    // Get pill location
    const location = getPillLocation(toeValue, antiSquatValue, pivotWidthValue, pivotHeightValue);
    setPillLocation(location);
  };

  useEffect(() => {
    runCalculation();
  }, [toe, antiSquat, pivotWidth, pivotHeight]);

  return (
    <div className="calculator-container">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Toe Angle:</label>
          <input
            type="number"
            step="1"
            min="1"
            max="5"
            value={toe}
            onChange={(e) => setToe(e.target.value)}
            required
          />
        </div>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <div className="form-group">
          <label>Anti-Squat:</label>
          <input
            type="number"
            step="1"
            min="-1"
            max="3"
            value={antiSquat}
            onChange={(e) => setAntiSquat(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Pivot Width:</label>
          <input
            type="number"
            step="0.35"
            min="-1.4"
            max="1.4"
            value={pivotWidth}
            onChange={(e) => setPivotWidth(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Pivot Height:</label>
          <input
            type="number"
            step="0.35"
            min="-1.4"
            max="1.4"
            value={pivotHeight}
            onChange={(e) => setPivotHeight(e.target.value)}
            required
          />
        </div>
      </form>
      {pillLocation ? (
        <div className="image-container">
          <div className="pill-info">
            <img src={pillLocation.cMountImage} alt="C Mount" className="pill-image" />
            <p>C Mount Pills & Rotation:</p>
            <p>
              Left Pill:
              <img
                src={pillLocation.cMountLeftPill}
                alt="C Mount Pill"
                className="pill-image-small"
                style={{ transform: `rotate(${pillLocation.cMountLeftPillRotation}deg)` }}
              />
              Right Pill:
              <img
                src={pillLocation.cMountRightPill}
                alt="C Mount Pill"
                className="pill-image-small"
                style={{ transform: `rotate(${pillLocation.cMountRightPillRotation}deg)` }}
              />
            </p>
          </div>
          
          <div className="pill-info">
            <img src={pillLocation.dMountImage} alt="D Mount" className="pill-image" />
            <p>D Mount Pill & Rotation:</p>
            <p>
              Left Pill:
              <img
                src={pillLocation.dMountLeftPill}
                alt="D Mount Pill"
                className="pill-image-small"
                style={{ transform: `rotate(${pillLocation.dMountLeftPillRotation}deg)` }}
              />
              Right Pill:
              <img
                src={pillLocation.dMountRightPill}
                alt="D Mount Pill"
                className="pill-image-small"
                style={{ transform: `rotate(${pillLocation.dMountRightPillRotation}deg)` }}
              />
            </p>
          </div>
        </div>
      ) : (
        <p>Toe, anti-squat, pivot width, and pivot height combination not supported.</p>
      )}
    </div>
  );
};

export default Calculator;