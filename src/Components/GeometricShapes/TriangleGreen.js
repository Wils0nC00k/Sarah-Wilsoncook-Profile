import React from 'react';

function TriangleGreen() {
  return (
    <div className='triangle-green-wrapper'>
      <svg
        width='176'
        height='152'
        viewBox='0 0 176 152'
        xmlns='http://www.w3.org/2000/svg'>
        <path
          d='M88 0L175.469 151.5H0.531433L88 0Z'
          fill='url(#green-linear-gradient)'
        />
        <defs>
          <linearGradient
            id='green-linear-gradient'
            x1='100'
            y1='64'
            x2='68'
            y2='180'
            gradientUnits='userSpaceOnUse'>
            <stop stop-color='#5DE9BF' />
            <stop offset='1' stop-color='#C4C4C4' stop-opacity='0' />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

export default TriangleGreen;
