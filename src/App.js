import React from 'react';
import './App.css';
import NavigationPage from './Components/NavigationPage';
import SocialLinks from './Components/SocialLinks';
import Landing from './Pages/Landing';
import About from './Pages/About';

function App() {
  return (
    <React.Fragment>
      <SocialLinks />
      <NavigationPage />
      <Landing />
      <About />
    </React.Fragment>
  );
}

export default App;
