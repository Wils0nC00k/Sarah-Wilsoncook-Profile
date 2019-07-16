import React from 'react';

function CircleYellowBlue() {
  return (
    <div className='circle-yellow-blue-wrapper'>
      <svg
        width='160'
        height='160'
        viewBox='0 0 160 160'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'>
        <circle
          id='circle-yellow-blue'
          cx='80'
          cy='80'
          r='80'
          fill='url(#yellow-blue-linear)'
        />
        <defs>
          <linearGradient
            id='yellow-blue-linear'
            x1='80'
            y1='-1.2815e-06'
            x2='123'
            y2='160'
            gradientUnits='userSpaceOnUse'>
            <stop stop-color='#EBCA1F' />
            <stop offset='1' stop-color='#3BA0CC' stop-opacity='0.48' />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

export default CircleYellowBlue;
