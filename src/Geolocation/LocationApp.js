import React, { useState } from 'react';
import LocationPopup from './LocationPopup';

const LocationApp = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [location, setLocation] = useState('');

  const handleLocateMeClick = () => {
    setShowPopup(true);
  };

  const handleAllow = () => {
    setShowPopup(false);
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setLocation(`Lat: ${latitude}, Long: ${longitude}`);
        },
        (error) => {
          console.error('Error getting location:', error);
          setLocation('Unable to retrieve location');
        }
      );
    } else {
      setLocation('Geolocation is not supported by this browser');
    }
  };

  const handleDeny = () => {
    setShowPopup(false);
  };

  return (
    <div>
      <input type="text" value={location} readOnly />
      <button onClick={handleLocateMeClick}>Locate Me</button>
      {showPopup && <LocationPopup onAllow={handleAllow} onDeny={handleDeny} />}
    </div>
  );
};

export default LocationApp;
