import React from "react";
import "./App.css";
import { Provider } from "react-redux";
import store from "./Utils/Store";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainContainer from "./Components/MainContainer";
import WatchPage from "./Components/WatchPage";
import SearchResult from "./Components/SearchResult";
import Layout from "./Components/Layout";
import Body from "./Components/Body";
import Demo from "./Dummy/Demo";
import SignUp from "./Login/Signup";
import Login from "./Login/Login";
import LocationApp from "./Geolocation/LocationApp";
 
const appRouter = createBrowserRouter([
  { path: "/demo", element: <Demo /> },
  { path: "/LocationApp", element: <LocationApp /> },
  { path: "/SignUp", element: <SignUp/> },
  { path: "/Login", element: <Login/> },
  
 
 

  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Body></Body>,
        children: [
          {
            path: "/",
            element: <MainContainer />,
          },
          { path: "/watch", element: <WatchPage /> },
          { path: "/SignUp", element: <SignUp/> },
          
,
          { path: "/searchresult", element: <SearchResult /> },
        ],
      },
    ],
  },
]);

function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={appRouter} />
    </Provider>
  );
}

export default App;
