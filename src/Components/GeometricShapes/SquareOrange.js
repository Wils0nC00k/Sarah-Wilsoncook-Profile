import React from 'react';

function SquareOrange() {
  return (
    <div className='square-orange-wrapper'>
      <svg
        width='168'
        height='168'
        viewBox='0 0 168 168'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'>
        <rect
          id='square-orange'
          width='168'
          height='168'
          fill='url(#orange-linear-gradient)'
        />
        <defs>
          <linearGradient
            id='orange-linear-gradient'
            x1='36'
            y1='168'
            x2='75'
            y2='-20'
            gradientUnits='userSpaceOnUse'>
            <stop stop-color='#EFA12B' />
            <stop offset='1' stop-color='#EFA12B' stop-opacity='0' />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

export default SquareOrange;
