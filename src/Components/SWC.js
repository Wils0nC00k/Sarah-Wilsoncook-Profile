import React from 'react';

class SWC extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      x: 0,
      y: 0,
      height: 0,
      width: 0,
      xWalk: 0,
      yWalk: 0,
    };
    this.onMouseMove = this.onMouseMove.bind(this);
  }

  verticalCenter() {
    return window.innerHeight / 3;
  }

  onMouseMove(e) {
    const walk = 100;
    this.setState({
      x: e.screenX,
      y: e.screenY,
      height: window.innerHeight,
      width: window.innerWidth,
    });
    const xWalk = Math.round(
      (this.state.x / this.state.width) * walk - walk / 2,
    );
    const yWalk = Math.round(
      (this.state.y / this.state.height) * walk - walk / 2,
    );
    this.setState({
      xWalk,
      yWalk,
    });
    console.log(xWalk, yWalk);
  }

  render() {
    const styles = {
      wrapper: {
        transform: `translateY(${this.verticalCenter()}px)`,
        perspective: '1000px',
      },
      trippy: {
        fontSize: '5em',
        transform: `translate3d(${this.state.xWalk}px, ${this.state.yWalk}px, ${
          this.state.yWalk
        }px) rotate(${this.state.yWalk}deg)`,
      },
    };

    return (
      <div className='swc-wrapper' onMouseMove={this.onMouseMove}>
        <div style={styles.wrapper}>
          <p className='swc-front-text' style={styles.trippy}>
            SARAH
          </p>
          <p className='swc-front-text' style={styles.trippy}>
            WILSO
          </p>
          <p className='swc-front-text' style={styles.trippy}>
            NCOOK
          </p>
        </div>
      </div>
    );
  }
}

export default SWC;
