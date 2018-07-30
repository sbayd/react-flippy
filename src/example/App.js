import React, { Component } from 'react';
import Flippy, { FrontSide, BackSide } from './../lib';
import Rick from './rick.png';
import './App.css';

const FlippyStyle = {
  width: '200px',
  height: '300px',
  textAlign: 'center',
  color: '#FFF',
  fontFamily: 'sans-serif',
  fontSize: '30px',
  justifyContent: 'center'
}


const DefaultCardContents = ({ children }) => (
  <React.Fragment>
    <FrontSide
      style={{
        backgroundColor: '#41669d',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column'
      }}
    >
      <img
        src={Rick}
        style={{ maxWidth: '100%', maxHeight: '100%' }}
      />
      RICK
      <span 
        style={{
          fontSize:'12px',
          position: 'absolute',
          bottom: '10px',
          width: '100%'
        }}>
        {children}<br />
        (FRONT SIDE)
      </span>
    </FrontSide>
    <BackSide
      style={{
        backgroundColor: '#175852',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column'
      }}>
      ROCKS
      <span 
        style={{
          fontSize:'12px',
          position: 'absolute',
          bottom: '10px',
          width: '100%'
        }}>
        {children}<br />
        (BACK SIDE)
      </span>
    </BackSide>
  </React.Fragment>);

const FlippyOnHover = ({ flipDirection = 'vertical' }) => (
  <Flippy
    flipOnHover={true}
    flipDirection={flipDirection}
    style={FlippyStyle}
  >
    <DefaultCardContents>
    I flip {flipDirection}ly on hover
    </DefaultCardContents>
  </Flippy>
);

const FlippyOnClick = ({ flipDirection = 'vertical' }) => (
  <Flippy
    flipOnClick={true}
    flipDirection={flipDirection}
    style={FlippyStyle}
  >
    <DefaultCardContents>
      I flip {flipDirection}ly on click
    </DefaultCardContents>
  </Flippy>
);

const ControlledFlippy = ({ isFlipped })  => (
  <Flippy
    flipDirection="vertical"
    isFlipped={isFlipped}
    style={FlippyStyle}
  >
    <DefaultCardContents>
      I flip vertically for every 3sec. I am controlling by a upper scope.
    </DefaultCardContents>
  </Flippy>
);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isFlipped: false
    };

    setInterval(() => {
      this.setState({
        isFlipped: !this.state.isFlipped
      });
    }, 3000);
  }

  render() {
    return (
      <div className="App">
        <div style={{ display: 'flex', flex: '1 0 200px', justifyContent: 'space-around', 'flex-wrap': 'wrap' }}>
            <Flippy
              ref={(r) => this.flippyHorizontal = r}
              flipOnClick={false}
              style={FlippyStyle}
            >
            <DefaultCardContents>
              I flip horizontally with an event<br />
              <button type="button" onClick={() => this.flippyHorizontal.toggle()}>Toggle Me!</button>
            </DefaultCardContents>
          </Flippy>
          <FlippyOnHover flipDirection="horizontal"/>
          <FlippyOnClick flipDirection="horizontal"/>
          <Flippy
            ref={(r) => this.flippyVertical = r}
            flipOnClick={false}
            flipDirection="vertical"
            style={FlippyStyle}
          >
            <DefaultCardContents>
              I flip vertically with an event<br />
              <button type="button" onClick={() => this.flippyVertical.toggle()}>Toggle Me!</button>
            </DefaultCardContents>
          </Flippy>
          <FlippyOnHover />
          <FlippyOnClick />
          <ControlledFlippy
            isFlipped={this.state.isFlipped}
          /> 
        </div>
      </div>
    );
  }
}

export default App;
