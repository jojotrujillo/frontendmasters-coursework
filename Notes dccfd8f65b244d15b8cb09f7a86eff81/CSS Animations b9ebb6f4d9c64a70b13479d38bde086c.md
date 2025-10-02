# CSS Animations

Created: November 3, 2022 8:00 AM
Type: Section - CSS
Materials: https://btholt.github.io/complete-intro-to-web-dev-v3/lessons/css/animations
Reviewed: No

ℹ️

[animation - CSS&colon; Cascading Style Sheets | MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/animation)

An example of what CSS animations can do 👇

[https://codepen.io/juliangarnier/pen/krNqZO](https://codepen.io/juliangarnier/pen/krNqZO)

![Untitled](CSS%20Animations%20b9ebb6f4d9c64a70b13479d38bde086c/Untitled.png)

- The `@keyframes` part allows you to define a reusable animation. We could throw `spin` on anything now.
- We just define `to` which is what you want the end state of your animation to be. We could define `from` too which is where you want your animation to start from. Implicitly, if you don't define a from, your animation starts from where it is already. In this case, the `spinny-boi` isn't rotated at all, or `transform: rotate(0deg)`. So it will rotate from 0 to 360, or a full revolution.
- `animation` is the property to *use* a defined keyframe. Here we just say "do what spin defines, the whole animation should take a half second, do it infinitely (aka never stop), and do it in a linear fashion (so there's no speed-up or speed-down in the animation). You can define the properties separately. [See the MDN here](https://developer.mozilla.org/en-US/docs/Web/CSS/easing-function).

## Easing

```html
<style>
  @keyframes move {
    to {
      translate: 50px;
    }
  }
  .dancer {
    position: relative;
    display: inline-block;
    font-size: 30px;
    position: absolute;
    right: 0;

    /*
    this is the log way of doing:
    animation: move 1s infinite alternate;
    */
    animation-name: move;
    animation-duration: 1s;
    animation-iteration-count: infinite;
    animation-direction: alternate;
  }

  .dancers-list {
    width: 100%;
    max-width: 300px;
    position: relative;
  }

  .linear {
    animation-timing-function: linear;
  }
  .ease {
    animation-timing-function: ease;
  }
  .ease-in-out {
    animation-timing-function: ease-in-out;
  }
  .ease-in {
    animation-timing-function: ease-in;
  }
  .ease-out {
    animation-timing-function: ease-out;
  }
  .cubic-bezier {
    animation-timing-function: cubic-bezier(0,1,.5,1);
  }
</style>

<ul class="dancers-list">
  <li>linear: <span class="dancer linear">💃</li>
  <li>ease: <span class="dancer ease">💃</li>
  <li>ease-in-out: <span class="dancer ease-in-out">💃</li>
  <li>ease-in: <span class="dancer ease-in">💃</li>
  <li>ease-out: <span class="dancer ease-out">💃</li>
  <li>cubic-bezier: <span class="dancer cubic-bezier">💃</li>
</ul>
```

Notice all of them sort of do what we'd call "rubber-banding" where it speeds up and slows down in some way. Imagine we could use ease-out to simulate the gravity of a bouncing ball or something like that.

The last one, cubic-bezier allows you to define your own curve via mathematics. [Read more on the MDN here](https://developer.mozilla.org/en-US/docs/Web/CSS/easing-function).

## Beyond Positioning

```html
<style>
  @keyframes rainbow {
    100%,
    0% {
      color: rgb(255, 0, 0);
    }
    8% {
      color: rgb(255, 127, 0);
    }
    16% {
      color: rgb(255, 255, 0);
    }
    25% {
      color: rgb(127, 255, 0);
    }
    33% {
      color: rgb(0, 255, 0);
    }
    41% {
      color: rgb(0, 255, 127);
    }
    50% {
      color: rgb(0, 255, 255);
    }
    58% {
      color: rgb(0, 127, 255);
    }
    66% {
      color: rgb(0, 0, 255);
    }
    75% {
      color: rgb(127, 0, 255);
    }
    83% {
      color: rgb(255, 0, 255);
    }
    91% {
      color: rgb(255, 0, 127);
    }
  }
  .rainbow-boi {
    animation: rainbow 4s infinite linear;
    font-size: 30px;
  }
</style>
<div class="rainbow-boi">Rainbow</div>
```

• `from` is an alias for `0%` and `to` is an alias for `100%`. You can define percentages like we did above.