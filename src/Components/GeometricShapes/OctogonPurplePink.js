import React from 'react';

function OctogonPurplePink() {
  return (
    <div className='octogon-purple-pink-wrapper'>
      <svg
        width='169'
        height='174'
        viewBox='0 0 169 174'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'>
        <path
          id='octogon-purple-pink'
          d='M82.5 0L23.5 25L0 86L26.5 148L86.5 173.5L145.5 148L168.5 86L143 25L82.5 0Z'
          fill='url(#purple-pink-linear)'
        />
        <defs>
          <linearGradient
            id='purple-pink-linear'
            x1='161'
            y1='105'
            x2='-26.5'
            y2='77'
            gradientUnits='userSpaceOnUse'>
            <stop stop-color='#DE3084' />
            <stop offset='1' stop-color='#0023D9' stop-opacity='0' />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

export default OctogonPurplePink;
