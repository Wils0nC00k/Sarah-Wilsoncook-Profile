import React from 'react';

class Canvas extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isPainting: false,
      line: [],
      lastX: 0,
      lastY: 0,
      hue: 1,
    };
    this.canvasRef = React.createRef();
    this.onMouseOver = this.onMouseOver.bind(this);
    this.onMouseMove = this.onMouseMove.bind(this);
    this.endPaintEvent = this.endPaintEvent.bind(this);
  }

  prevPos = {offsetX: 0, offsetY: 0};

  onMouseOver({nativeEvent}) {
    const {offsetX, offsetY} = nativeEvent;
    this.setState({
      isPainting: true,
    });
    this.prevPos = {offsetX, offsetY};
  }

  onMouseMove({nativeEvent}) {
    if (this.state.isPainting) {
      const {offsetX, offsetY} = nativeEvent;
      const offSetData = {offsetX, offsetY};
      const positionData = {
        start: {...this.prevPos},
        stop: {...offSetData},
      };
      this.ctx.strokeStyle = '#64a4f7';
      this.ctx.lineWidth = 200;
      this.line = this.state.line.concat(positionData);
      this.paint(this.prevPos, offSetData, this.state.strokeStyle);
    }
  }
  endPaintEvent() {
    if (this.state.isPainting) {
      this.setState({
        isPainting: false,
      });
    }
  }
  paint(prevPos, currPos) {
    const {offsetX, offsetY} = currPos;
    const {offsetX: x, offsetY: y} = prevPos;
    this.ctx.beginPath();
    this.ctx.moveTo(x, y);
    this.ctx.lineTo(offsetX, offsetY);
    this.ctx.stroke();
    this.prevPos = {offsetX, offsetY};
  }

  componentDidMount() {
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
    this.ctx = this.canvas.getContext('2d');
    this.ctx.lineJoin = 'round';
    this.ctx.lineCap = 'round';
  }

  render() {
    return (
      <div>
        <canvas
          ref={ref => (this.canvas = ref)}
          onMouseOver={this.onMouseOver}
          onMouseLeave={this.endPaintEvent}
          onMouseUp={this.endPaintEvent}
          onMouseMove={this.onMouseMove}
        />
      </div>
    );
  }
}
export default Canvas;
