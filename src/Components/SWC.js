import React from 'react';
import {ReactComponent as SWCvector} from './svg/SWCvector.svg';

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
        perspective: '1000px',
      },
      trippy: {
        transform: `translate3d(${this.state.xWalk}px, ${this.state.yWalk}px, ${
          this.state.yWalk
        }px)`,
      },
    };

    return (
      <div className='swc-wrapper' onMouseMove={this.onMouseMove}>
        <div style={styles.wrapper} />
        <div style={styles.trippy}>
          <SWCvector />
        </div>
      </div>
    );
  }
}

export default SWC;
