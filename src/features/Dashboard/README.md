### Problem 0

Hi again! If you didn't do it already, you might want to start the app and take a look at the main page.

There are three cards on the screen. Each one of them corresponds to a problem you have to solve. (Un)fortunately we couldn't think of many problems so the only card that works is the one indicating "Problem 1".

Hmmm... guess that might be too easy, so let's add some requirements to this page you should be able to solve:
* When the user taps the "Problem 1" card, the other cards must fly out of the screen with a stagger effect, while the "Problem 1" card moves to the middle. After a short delay, there should be a "Problem 1" card zoom-in effect, like the user would enter that card. After the card is no longer visible, the content from '/problem1' should fade in.
* When the user taps any of the other cards, the "Problem 1" card should shake up and down, seeking attention. Multiple taps should not interrupt the animation or enqueue other animations.

Anyway, we understand your time is valuable and that's why this problem is **OPTIONAL**. You can take a look at the next one, maybe try implementing something and decide afterwards if you want to solve this one too. Whatever your decision, the first card should at least redirect the user to '/problem1' **without refetching the assets (html, bundle)**.
