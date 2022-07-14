import { ReactNode, useEffect, useRef, useState } from "react";
import Flippy, { FrontSide, BackSide } from "../lib";
import Rick from "./rick.png";
import "./App.css";
import { FlippyProps } from "../lib/Flippy";

const FlippyStyle: FlippyProps["style"] = {
  width: "200px",
  height: "300px",
  textAlign: "center",
  color: "#FFF",
  fontFamily: "sans-serif",
  fontSize: "30px",
  justifyContent: "center",
};

function DefaultCardContents({ children }: { children: ReactNode }) {
  return (
    <>
      <FrontSide
        style={{
          backgroundColor: "#41669d",
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <img
          src={Rick}
          alt="Ricky"
          style={{ maxWidth: "100%", maxHeight: "100%" }}
        />
        RICK
        <span
          style={{
            fontSize: "12px",
            position: "absolute",
            bottom: "10px",
            width: "100%",
          }}
        >
          {children}
          <br />
          (FRONT SIDE)
        </span>
      </FrontSide>
      <BackSide
        style={{
          backgroundColor: "#175852",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        ROCKS
        <span
          style={{
            fontSize: "12px",
            position: "absolute",
            bottom: "10px",
            width: "100%",
          }}
        >
          {children}
          <br />
          (BACK SIDE)
        </span>
      </BackSide>
    </>
  );
}

function FlippyOnHover({ flipDirection = "vertical" }) {
  return (
    <Flippy flipOnHover flipDirection={flipDirection} style={FlippyStyle}>
      <DefaultCardContents>
        I flip {flipDirection}ly on hover
      </DefaultCardContents>
    </Flippy>
  );
}

function FlippyOnClick({ flipDirection = "vertical" }) {
  return (
    <Flippy flipOnClick flipDirection={flipDirection} style={FlippyStyle}>
      <DefaultCardContents>
        I flip {flipDirection}ly on click
      </DefaultCardContents>
    </Flippy>
  );
}

function ControlledFlippy({ isFlipped }: { isFlipped: boolean }) {
  return (
    <Flippy flipDirection="vertical" isFlipped={isFlipped} style={FlippyStyle}>
      <DefaultCardContents>
        I flip vertically for every 3sec. I am controlling by a upper scope.
      </DefaultCardContents>
    </Flippy>
  );
}

function App() {
  const [isFlipped, setIsFlipped] = useState(false);
  const flippyHorizontal = useRef<{ toggle: () => {} }>(null);
  const flippyVertical = useRef<{ toggle: () => {} }>(null);

  useEffect(() => {
    setInterval(() => {
      setIsFlipped(!isFlipped);
    }, 3000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="App">
      <div
        style={{
          display: "flex",
          flex: "1 0 200px",
          justifyContent: "space-around",
          flexWrap: "wrap",
        }}
      >
        <Flippy ref={flippyHorizontal} flipOnClick={false} style={FlippyStyle}>
          <DefaultCardContents>
            I flip horizontally with an event
            <br />
            <button
              type="button"
              onClick={() => flippyHorizontal.current?.toggle()}
            >
              Toggle Me!
            </button>
          </DefaultCardContents>
        </Flippy>
        <FlippyOnHover flipDirection="horizontal" />
        <FlippyOnClick flipDirection="horizontal" />
        <Flippy
          ref={flippyVertical}
          flipOnClick={false}
          flipDirection="vertical"
          style={FlippyStyle}
        >
          <DefaultCardContents>
            I flip vertically with an event
            <br />
            <button
              type="button"
              onClick={() => flippyVertical.current?.toggle()}
            >
              Toggle Me!
            </button>
          </DefaultCardContents>
        </Flippy>
        <FlippyOnHover />
        <FlippyOnClick />
        <ControlledFlippy isFlipped={isFlipped} />
      </div>
    </div>
  );
}

export default App;
