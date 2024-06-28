import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import NewRef from "./Components/NewRef";
import Demo from "./Components/Demo";
import Login from "./Login/Signup";
import LocationApps from "./Geolocation/Manual";
import Errorb from "./Components/Errorb";
import Boundary from "./Components/Boundary";
import { ErrorBoundary } from "react-error-boundary";
// import LocationApp from './Geolocation/LocationApp';
import "@fortawesome/fontawesome-svg-core/styles.css";
import Slide from "./Components/Slider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ErrorBoundary FallbackComponent={Boundary}>
      <App/>
    </ErrorBoundary>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
