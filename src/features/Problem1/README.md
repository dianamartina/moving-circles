### Problem 1

Given a SVG containing a sequence of circles, use DOM manipulation functions from [the gsap library](https://greensock.com/docs/v3/GSAP/Timeline) to achieve the following behaviour:

- The circles must go up and down the way they do in [the following video](../../../public/circles_moving.mp4) (the offset is 100px);
- Clicking on the screen must change the direction of the animation (like a movie playing backwards);
- Pressing space s running and start the animation if it's paused;
- Changing the direction of the animation when it's paused should work. So, if the animation direction is forward and the animation is paused, if the user clicks the screen once, the moment the user presses "space" the animation should play backwards (and vice versa);
- Don't alter the behaviour of the other pages (switching between Dashboard and this page shouldn't break anything).
