// import React, { useState, useRef } from 'react';
// import { LoadScript, StandaloneSearchBox } from '@react-google-maps/api';
// import { API_kEY } from '../Utils/Constants';

// const libraries = ['places'];

// const LocationApps = () => {
//   const [location, setLocation] = useState('');
//   const searchBoxRef = useRef(null);

//   const handleLoad = (ref) => {
//     searchBoxRef.current = ref;
//   };

//   const handlePlacesChanged = () => {
//     const places = searchBoxRef.current.getPlaces();
//     if (places.length === 0) return;
    
//     const place = places[0];
//     setLocation(place.formatted_address);
//   };

//   return (
//     <LoadScript googleMapsApiKey={API_kEY} libraries={libraries}>
//       <div>
//         <StandaloneSearchBox
//           onLoad={handleLoad}
//           onPlacesChanged={handlePlacesChanged}
//         >
//           <input
//             type="text"
//             placeholder="Enter a location"
//             style={{ width: '300px', height: '40px' }}
//           />
//         </StandaloneSearchBox>
//         <input type="text" value={location} readOnly />
//         <button>Locate Me</button>
//         {/* Include your popup component if needed */}
//       </div>
//     </LoadScript>
//   );
// };

// export default LocationApps;





import React from 'react'

const Manual = () => {
  return (
    <div id="map-container">
        {/* <!-- Embed the Google Map using an iframe --> */}
        <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3164.876421411044!2d-122.08424968469215!3d37.422065979825314!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb24c5b5d0a0b%3A0x1abf6c32e10d40f8!2sGoogleplex!5e0!3m2!1sen!2sus!4v1630584326335!5m2!1sen!2sus"
            width="50%"
            height="100vh"
           // style="border:0;"
            allowfullscreen=""
            loading="lazy"
        ></iframe>
    </div>
    
  )
}

export default Manual
