import React, { useRef, useEffect, useState } from "react";
import "./App.css";

import { TweenMax, Power3 } from "gsap";

function App() {
  let app = useRef(null);
  let circleBlue = useRef(null);
  let circleRed = useRef(null);
  let circleYellow = useRef(null);

  // let [state, setState] = useState(false);

  const handleExpand = () => {
    TweenMax.to(circleRed, 0.8, {
      height: 200,
      width: 200,
      ease: Power3.easeOut,
    });
    // setState(true);
  };

  const handleShrink = () => {
    TweenMax.to(circleRed, 0.8, {
      height: 75,
      width: 75,
      ease: Power3.easeOut,
    });
    // setState(false);
  };

  useEffect(() => {
    TweenMax.to(app, 0, { css: { visibility: "visible" } });
    // TweenMax.from(circleBlue, 0.8, { opacity: 0, x: 40, ease: Power3.easeOut });
    // TweenMax.from(circleRed, 0.8, {
    //   opacity: 0,
    //   x: 40,
    //   ease: Power3.easeOut,
    //   delay: 0.2,
    // });
    // TweenMax.from(circleYellow, 0.8, {
    //   opacity: 0,
    //   x: 40,
    //   ease: Power3.easeOut,
    //   delay: 0.4,
    // });

    TweenMax.staggerFrom(
      [circleBlue, circleRed, circleYellow],
      0.8,
      { opacity: 0, x: 40, ease: Power3.easeOut },
      0.2
    );
  }, []);

  return (
    <div ref={(el) => (app = el)} className="App">
      <header className="App-header">
        <div className="circle-container">
          <div ref={(el) => (circleBlue = el)} className="circle"></div>
          <div
            ref={(el) => (circleRed = el)}
            // onClick={state ? handleShrink : handleExpand}
            onMouseEnter={handleExpand}
            onMouseLeave={handleShrink}
            className="circle red"
          ></div>
          <div
            ref={(el) => (circleYellow = el)}
            className="circle yellow"
          ></div>
        </div>
      </header>
    </div>
  );
}

export default App;
