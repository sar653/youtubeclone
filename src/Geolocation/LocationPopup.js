import React from 'react';

const LocationPopup = ({ onAllow, onDeny }) => {
  return (
    <div className="popup">
      <p>Wants to know your location</p>
      <button onClick={onAllow}>Allow</button>
      <button onClick={onDeny}>Deny</button>
    </div>
  );
};

export default LocationPopup;
