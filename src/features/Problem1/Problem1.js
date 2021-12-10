import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import React, { memo, useRef, useEffect } from "react";
import Link from "../../shared/Link";
import { gsap } from "gsap";

const STROKE_WIDTH = 3;

const Circle = ({ radius, idx }) => (
  <circle
    r={radius}
    cx={STROKE_WIDTH + radius + 4 * radius * idx}
    cy="190"
    fill="none"
    stroke="black"
    strokeWidth={STROKE_WIDTH}
  />
);

const MySvg = memo(({ circleRadius }) => {
  return (
    <svg width="800" height="400">
      {[...Array(10).keys()].map((idx) => (
        <Circle key={idx} radius={circleRadius} idx={idx} />
      ))}
    </svg>
  );
});

const Problem1 = () => {
  let problem1 = useRef(null);
  let circleRef = useRef(null);
  let handleReverseAnimation_ref = useRef(null);

  useEffect(() => {
    const Circles = circleRef.firstElementChild.childNodes;
    const CirclesArr = Array.from(Circles);

    let flagPause = false;
    let flagReverse = false;

    gsap.to(problem1, {
      css: { opacity: 1 },

      duration: 4,
      ease: "sine.out",
    });

    // Circle animations with gsap library
    const tl = gsap.timeline({
      repeat: -2,
      overwrite: "none",
      repeatDelay: 0.01,
    });
    tl.to([...CirclesArr], {
      y: -100,
      duration: 0.5,
      stagger: 0.2,
      ease: "sine.out",
    })
      .to(
        [...CirclesArr],
        {
          y: 100,
          duration: 0.5,
          stagger: 0.2,
          ease: "sine.out",
        },
        "<+=1"
      )
      .to(
        [...CirclesArr],
        {
          y: 0,
          duration: 0.3,
          stagger: 0.2,
          ease: "sine.out",
        },
        "<+=1.2"
      );

    // Pause animation on Tab keypress
    const handlePauseAnimation = (event) => {
      if (event.code === "Space") {
        if (!flagPause) {
          tl.pause();
          flagPause = true;
        } else {
          tl.play();
          flagPause = false;
        }
      }
    };
    document.addEventListener("keyup", handlePauseAnimation);

    // Reverse animation on screen click
    const handleReverseAnimation = () => {
      if (!flagReverse) {
        tl.reverse();
        flagReverse = true;
      } else {
        tl.play();
        flagReverse = false;
      }
    };
    handleReverseAnimation_ref = handleReverseAnimation;

    return () => {
      document.removeEventListener("keyup", handlePauseAnimation);
    };
  }, []);

  return (
    <Box
      display="flex"
      flexDirection="column"
      height="100vh"
      className="problem1-hero"
      ref={(el) => (problem1 = el)}
      onClick={() => handleReverseAnimation_ref()}
    >
      <Box p={3}>
        <Link to="/">
          <Button variant="outlined" color="primary">
            Back to Dashboard
          </Button>
        </Link>
      </Box>

      <Box
        flexGrow={1}
        display="flex"
        justifyContent="center"
        alignItems="center"
        ref={(el) => (circleRef = el)}
      >
        <MySvg circleRadius={20} />
      </Box>
    </Box>
  );
};

export default Problem1;
