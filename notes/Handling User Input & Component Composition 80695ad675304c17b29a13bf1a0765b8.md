# Handling User Input & Component Composition

Created: December 18, 2022 6:06 AM
Section: Core React Concepts
Materials: https://react-v8.holt.courses/lessons/core-react-concepts/handling-user-input, https://react-v8.holt.courses/lessons/core-react-concepts/component-composition
Reviewed: No

## User Input

- React has its own way of abstracting the complexity of working with user events but it allows the Developers a nice streamlined experience. If you’re curious, here’s a link for more info and another link following that on all of the different kinds of JavaScript events:

[Handling Events - React](https://reactjs.org/docs/handling-events.html)

[Event reference | MDN](https://developer.mozilla.org/en-US/docs/Web/Events)

- Something interesting to note; the event handlers used in React components are “fake” event handlers. Technically, they’re called Synthetic events that are handled in React’s virtual DOM ↙️

[SyntheticEvent - React](https://reactjs.org/docs/events.html#supported-events)

- For more info on React’s implementation of the virtual DOM

[Virtual DOM and Internals - React](https://reactjs.org/docs/faq-internals.html)

## Breaking Things Down

In general, it’s important to adhere to the [Single Responsibility Principle](https://en.wikipedia.org/wiki/Single-responsibility_principle) to account for maintenance and testing. Brian goes on to explain why:

![Untitled](Handling%20User%20Input%20&%20Component%20Composition%2080695ad675304c17b29a13bf1a0765b8/Untitled.png)

[Here’s the embedded page from React on how to think with React regarding UI components](https://reactjs.org/docs/thinking-in-react.html#step-1-break-the-ui-into-a-component-hierarchy)

Here’s the embedded page from React on how to think with React regarding UI components

- In case you’re interested in knowing what a “hero” is regarding UI/UX:

[Unsung Heroes of UI: Look at Hero Images in Web Design](https://uxplanet.org/unsung-heros-of-ui-look-at-hero-images-in-web-design-881e04fe7bd2)

- Brian mentions for a better loading experience to use one of React’s newest features which is concurrency. The suspense API abstracts a lot of complexity it used to take to track API fetching statuses and makes it easier to work with.

[Suspense for Data Fetching (Experimental) - React](https://17.reactjs.org/docs/concurrent-mode-suspense.html)

## Status of Project

[https://github.com/jojotrujillo/frontend-masters-coursework/commit/40911c7514d54ab5abf0d4915fbe29cdf71351ca](https://github.com/jojotrujillo/frontend-masters-coursework/commit/40911c7514d54ab5abf0d4915fbe29cdf71351ca)