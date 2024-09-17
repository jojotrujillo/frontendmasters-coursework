# Pure React Components

Created: October 21, 2022 1:55 PM
Section: Setup & Tooling
Materials: https://react-v8.holt.courses/lessons/no-frills-react/components
Reviewed: No

<aside>
💡 **Notion Tip:** Add more details right in this page, including toggles, images, and webpage links, and more. Break up the page by using our different header options so that it’s easier to read. Learn more about different types of content blocks [here](https://www.notion.so/guides/types-of-content-blocks).

</aside>

## Multiple Components

- In React, it’s required to use unique keys in lists of items because React uses those keys as a way of determining what to render when.

[Lists and Keys - React](https://reactjs.org/docs/lists-and-keys.html#keys)

## Properties

- Note that the last two parameters in the createElement function are optional unless you have attributes or content to include. The second parameter can also be used to pass down properties to a child component via “props.” 👇

```jsx
const Pet = (props) => {
  return React.createElement("div", {}, [
		// Pass multiple children in as array
    React.createElement("h1", {}, props.name),
    React.createElement("h2", {}, props.animal),
    React.createElement("h2", {}, props.breed),
  ]);
};

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Adopt Me!"),
		// Properties object passing data into Pet component
    React.createElement(Pet, {
      name: "Luna",
      animal: "Dog",
      breed: "Havanese",
    }),
    React.createElement(Pet, {
      name: "Pepper",
      animal: "Bird",
      breed: "Cockatiel",
    }),
    React.createElement(Pet, { name: "Doink", animal: "Cat", breed: "Mix" }),
  ]);
};
```

- ℹ️ Data flow in React can flow in one direction from parent components to children components by way of props. This is helpful when debugging because children components can only be fed the data in this case.