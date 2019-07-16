import React from 'react';
import './Landing.css';
import SWC from '../Components/SWC';
import CirclePurple from '../Components/GeometricShapes/CirclePurple';
import TriangleGreen from '../Components/GeometricShapes/TriangleGreen';
import SquareOrange from '../Components/GeometricShapes/SquareOrange';
import CircleYellowBlue from '../Components/GeometricShapes/CircleYellowBlue';
import OctogonPurplePink from '../Components/GeometricShapes/OctogonPurplePink';

function App() {
  return (
    <React.Fragment>
      <div className='page-wrapper landing'>
        <CirclePurple />
        <TriangleGreen />
        <SquareOrange />
        <CircleYellowBlue />
        <OctogonPurplePink />
        <SWC />
      </div>
    </React.Fragment>
  );
}

export default App;
