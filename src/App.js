import React from 'react';
// import components
import Header from './components/Header';
import AnimRoutes from './components/AnimRoutes';
// import router
import { BrowserRouter as Router } from 'react-router-dom'; // BrowserRouter is a component from react-router-dom that enables client-side routing using the HTML5 History API (pushState and replaceState)
//import motion
import { motion } from 'framer-motion' // Adds the animation library for React

const App = () => { // Arrow function component in react. This is the same as making a function called App. This creates a functional component named App
  // The empty angle brackets are called React Fragments. Fragments group multiple elemnts without adding extra nodes to the DOM. Same as <React.Fragment></React.Fragment>
  // each of these things below (Heaer and AnimRoutes) are custom Components that are called somewhere else
  return <>
    <Router>
      <Header />
      <AnimRoutes />
    </Router>
  </>
};

export default App;
