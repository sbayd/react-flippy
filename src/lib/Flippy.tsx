import React, {
  HTMLAttributes,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from "react";
import "./styles.css";

export interface FlippyProps extends HTMLAttributes<HTMLDivElement> {
  flipDirection?: string;
  isFlipped?: boolean;
  flipOnHover?: boolean;
  flipOnClick?: boolean;
}

const Flippy = React.forwardRef(
  (
    {
      className,
      style,
      children,
      flipDirection = "horizontal",
      flipOnHover = false,
      flipOnClick = true,
      isFlipped: _isFlipped = false,
      onMouseEnter = () => {},
      onMouseLeave = () => {},
      onTouchStart = () => {},
      onClick = () => {},
      ...rest
    }: FlippyProps,
    ref
  ) => {
    const simpleFlag = useRef({ isTouchDevice: false });
    const [isTouchDevice, setTouchDevice] = useState(false);
    const [isFlipped, setFlipped] = useState(false);
    const toggle = () => setFlipped(!isFlipped);

    useImperativeHandle(ref, () => ({ toggle }));

    const handleTouchStart = (event: any) => {
      if (!isTouchDevice) {
        simpleFlag.current.isTouchDevice = true;
        setTouchDevice(true);
      }
      onTouchStart(event);
    };

    const handleMouseEnter = (event: any) => {
      if (flipOnHover && !simpleFlag.current.isTouchDevice) {
        setFlipped(true);
      }
      onMouseEnter(event);
    };

    const handleMouseLeave = (event: any) => {
      if (flipOnHover && !simpleFlag.current.isTouchDevice) {
        setFlipped(false);
      }
      onMouseLeave(event);
    };

    const handleClick = (event: any) => {
      switch (true) {
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
      if (typeof _isFlipped === "boolean" && _isFlipped !== isFlipped) {
        setFlipped(_isFlipped);
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [_isFlipped]);

    return (
      <div
        {...rest}
        className={`flippy-container ${className || ""}`}
        style={{
          ...style,
        }}
        onTouchStart={handleTouchStart}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={handleClick}
        onKeyPress={handleClick}
        role="button"
        tabIndex={0}
      >
        <div className={`flippy-cardContainer-wrapper ${flipDirection}`}>
          <div
            className={`flippy-cardContainer ${isFlipped ? "isActive" : ""} ${
              isTouchDevice ? "istouchdevice" : ""
            }`}
          >
            {children}
          </div>
        </div>
      </div>
    );
  }
);

export default Flippy;
