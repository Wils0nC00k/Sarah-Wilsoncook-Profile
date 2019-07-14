import React from 'react';
import './About.css';
import Canvas from '../Components/Canvas';
import MainText from '../Components/MainText';

function App() {
  return (
    <React.Fragment>
      <div className='page-wrapper about'>
        <MainText />
        <Canvas className='canvas' />
      </div>
    </React.Fragment>
  );
}

export default App;
