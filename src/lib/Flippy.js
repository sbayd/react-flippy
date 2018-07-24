import React from 'react';
import FlippyFooter from './FlippyFooter';
import './styles.css';

export default class Flippy extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isFlipped: false,
      isTouchDevice: false
    };
  }

  static getDerivedStateFromProps(props, state) {
    return {
      ...state,
      isFlipped: typeof props.isFlipped === 'boolean' ? props.isFlipped : state.isFlipped
    };
  }

  toggle = () => {
    this.setState({
      isFlipped: !this.state.isFlipped
    });
  }

  handleFooterDotClick = (newCardIndex, event) => {
    this.setState({
      isFlipped: newCardIndex === 0
    });
  }

  handleHoverOn = (event) => {
    this.setState({
      isFlipped: true
    });
    this.props.onMouseEnter(event);
  }

  handleTouchStart = (event) => {
    this.setState({
      isFlipped: true,
      isTouchDevice: true
    });
    this.props.onTouchStart(event);
  }

  handleTouchEnd = (event) => {
    this.setState({
      isFlipped: false
    });
    this.props.onTouchEnd(event);
  }

  handleHoverOff = (event) => {
    this.setState({
      isFlipped: false
    });
    this.props.onMouseLeave(event);
  }

  render() {
    const { children, style, flipDirection, flipOnHover, flipOnClick } = this.props;
    const { isFlipped, activeCardIndex, isTouchDevice } = this.state;
    const methods = !!flipOnHover ? {
      onMouseEnter: this.handleHoverOn,
      onMouseLeave: this.handleHoverOff,
      onTouchStart: this.handleTouchStart,
      onTouchEnd: this.handleTouchEnd
    } : flipOnClick ? {
      onClick: this.toggle
    } : {};
    return (
      <div
        className="flippy-container"
        style={{
          ...style
        }}
        {...methods}
      >
      <div className={`flippy-cardContainer-wrapper ${flipDirection}`}>
        <div
          className={`flippy-cardContainer ${isFlipped ? 'isActive' : ''} ${isTouchDevice ? 'istouchdevice' : ''}`}
        >
          {children}
        </div>
          {this.props.showNavigation && <FlippyFooter
            onDotClick={this.handleFooterDotClick}
            activeCardIndex={activeCardIndex}
            cards={this.props.children}
          />}
        </div>
      </div>
    );
  }
}

Flippy.defaultProps = {
  showNavigation: false,
  flipDirection: 'horizontal',
  flipOnHover: false,
  flipOnClick: true,
  usePrettyStyle: true,
  onMouseEnter: () => {},
  onMouseLeave: () => {},
  onTouchStart: () => {},
  onTouchEnd: () => {},
  onClick: () => {}
};