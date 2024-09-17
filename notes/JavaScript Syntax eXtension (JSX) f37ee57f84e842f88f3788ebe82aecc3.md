# JavaScript Syntax eXtension (JSX)

Created: October 21, 2022 1:55 PM
Section: Core React Concepts
Materials: https://react-v8.holt.courses/lessons/core-react-concepts/jsx
Reviewed: No

<aside>
💡 **Notion Tip:** Add more details right in this page, including toggles, images, and webpage links, and more. Break up the page by using our different header options so that it’s easier to read. Learn more about different types of content blocks [here](https://www.notion.so/guides/types-of-content-blocks).

</aside>

## Purpose & Transpilation

- JSX simply makes code readable and React easier to write by relaying intent with HTML and transpiles down to React.createElement calls

[Introducing JSX - React](https://reactjs.org/docs/introducing-jsx.html)

[JSX (JavaScript) - Wikipedia](https://en.wikipedia.org/wiki/JSX_(JavaScript))

[Compiling vs Transpiling](https://stackoverflow.com/a/44932758)

Inquiring minds would like to know the difference between compiling and transpiling

```jsx
const Pet = (props) => {
  return (
    <div>
      <h1>{props.name}</h1>
      <h2>{props.animal}</h2>
      <h2>{props.breed}</h2>
    </div>
  );
};

export default Pet;
```

## Miscellaneous

- With the new version of JSX, you no longer need to explicitly import React. It automagically does it for you.
- Note that component names must start with a capital letter otherwise it’ll translate it as a web component and not a React component.

[DeepSource | The Modern Static Analysis Platform](https://deepsource.io/glossary/code-smell/)

What’s a code smell?

[What does "export default" do in JSX?](https://stackoverflow.com/a/36426988)

An explanation of the different kinds of exports/imports in ES6 modules, e.g. named and default