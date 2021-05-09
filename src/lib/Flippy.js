import React, { useEffect, useImperativeHandle, useRef, useState } from 'react';
import './styles.css';

const Flippy = React.forwardRef(({
  isFlipped: _isFlipped,
  className,
  flipDirection,
  style,
  children,
  flipOnHover,
  flipOnClick,
  onClick,
  onTouchStart,
  onMouseEnter,
  onMouseLeave,
  ...rest
}, ref) => {
  const simpleFlag = useRef({ isTouchDevice: false });
  const [isTouchDevice, setTouchDevice] = useState(false);
  const [isFlipped, setFlipped] = useState(false);
  const toggle = () => setFlipped(!isFlipped);

  useImperativeHandle(ref, () => ({ toggle }));

  const handleTouchStart = event => {
    if (!isTouchDevice) {
      simpleFlag.current.isTouchDevice = true;
      setTouchDevice(true);
    }
    onTouchStart(event);
  }
  
  const handleMouseEnter = event => {
    if (flipOnHover && !simpleFlag.current.isTouchDevice) { setFlipped(true); }
    onMouseEnter(event);
  };

  const handleMouseLeave = event => {
    if (flipOnHover && !simpleFlag.current.isTouchDevice) { setFlipped(false); }
    onMouseLeave(event);
  };

  const handleClick = event => {
    switch(true) {
      case flipOnHover && !simpleFlag.current.isTouchDevice:
      case !flipOnClick && !flipOnHover:
        break;
      default:
        setFlipped(!isFlipped);
        break;
    }
    onClick(event);
  };

  useEffect(() => {
    if (typeof _isFlipped === 'boolean' && _isFlipped !== isFlipped) {
      setFlipped(_isFlipped);
    }
  }, [_isFlipped]);

  return (
    <div
      {...rest}
      className={`flippy-container ${className || ''}`}
      style={{
        ...style
      }}
      onTouchStart={handleTouchStart}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
    >
      <div className={`flippy-cardContainer-wrapper ${flipDirection}`}>
        <div
          className={`flippy-cardContainer ${isFlipped ? 'isActive' : ''} ${isTouchDevice ? 'istouchdevice' : ''}`}
        >
          {children}
        </div>
      </div>
    </div>
  );
});

export default Flippy;

Flippy.defaultProps = {
  flipDirection: 'horizontal',
  flipOnHover: false,
  flipOnClick: true,
  isFlipped: false,
  onMouseEnter: () => {},
  onMouseLeave: () => {},
  onTouchStart: () => {},
  onClick: () => {}
};