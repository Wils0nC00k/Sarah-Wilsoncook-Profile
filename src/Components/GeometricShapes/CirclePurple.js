import React from 'react';

function CirlcePurple() {
  return (
    <div className='circle-purple-wrapper'>
      <svg
        width='200'
        height='200'
        viewBox='0 0 167 167'
        xmlns='http://www.w3.org/2000/svg'>
        <circle
          cx='83.5'
          cy='83.5'
          r='83.5'
          fill='url(#purple-linear-gradient)'
        />
        <defs>
          <linearGradient
            id='purple-linear-gradient'
            x1='57'
            y1='-2.7933e-06'
            x2='158'
            y2='123'
            gradientUnits='userSpaceOnUse'>
            <stop stop-color='#A854CF' />
            <stop offset='1' stop-color='#87ABBF' stop-opacity='0.16' />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

export default CirlcePurple;
