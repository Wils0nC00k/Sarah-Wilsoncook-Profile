import React from 'react';
import {ReactComponent as SWCvector} from './svg/SWCvector.svg';
import CirclePurple from '../Components/GeometricShapes/CirclePurple';
import TriangleGreen from '../Components/GeometricShapes/TriangleGreen';
import SquareOrange from '../Components/GeometricShapes/SquareOrange';
import CircleYellowBlue from '../Components/GeometricShapes/CircleYellowBlue';
import OctogonPurplePink from '../Components/GeometricShapes/OctogonPurplePink';

class LandingGridWarp extends React.Component {
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
      gridWarp: {
        perspective: '1000px',
        display: 'grid',
        gridTemplateColumns: '50px repeat(8, 1fr) 50px',
        gridTemplateRows: '50px repeat(4, 1fr) 50px',
        gridGap: '20px',
        width: '100vw',
        height: '100vh',
      },
      trippy: {
        gridColumn: '5 / 6',
        gridRow: '3 / 4',
        transform: `translate3d(${this.state.xWalk}px, ${this.state.yWalk}px, ${
          this.state.yWalk
        }px)`,
      },
    };

    return (
      <div style={styles.gridWarp} onMouseMove={this.onMouseMove}>
        <div style={styles.trippy}>
          <SWCvector />
        </div>
        <CirclePurple style={styles.circlePurple} />
        <TriangleGreen style={styles.triangleGreen} />
        <SquareOrange style={styles.squareOrange} />
        <CircleYellowBlue style={styles.circleYellowBlue} />
        <OctogonPurplePink style={styles.octogonPurplePink} />
      </div>
    );
  }
}

export default LandingGridWarp;
