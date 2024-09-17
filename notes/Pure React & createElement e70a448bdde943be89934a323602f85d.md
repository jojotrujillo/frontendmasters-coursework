# Pure React & createElement

Created: October 21, 2022 1:55 PM
Section: Setup & Tooling
Materials: https://react-v8.holt.courses/lessons/no-frills-react/pure-react
Reviewed: No

<aside>
💡 **Notion Tip:** Add more details right in this page, including toggles, images, and webpage links, and more. Break up the page by using our different header options so that it’s easier to read. Learn more about different types of content blocks [here](https://www.notion.so/guides/types-of-content-blocks).

</aside>

## Begin Project

- According to npm, “The react package contains only the functionality necessary to define React components. It is typically used together with a React renderer like react-dom for the web, or react-native for the native environments.”

[react](https://www.npmjs.com/package/react)

- Again, according to npm, “The react-dom package serves as the entry point to the DOM and server renderers for React. It is intended to be paired with the generic React package, which is shipped as react to npm.”

[react-dom](https://www.npmjs.com/package/react-dom)

- The following code snippet shows a basic, pure React component
    - Function components must return markup which is what the createElement function returns
    - Inside of the render function, you cannot modify any sort of state. Put in functional terms, this function must be pure. You don't know how or when the function will be called so it can't modify any ambient state.
    - Think of this as a reusable rubber stamp we’re instantiating. We’re applying one instance of this stamp using ReactDOM’s render function.

```jsx
// You must capitalize component names
const App = () => { // React function component
  return React.createElement(
    "div", // HTML tag to create
    {}, // Any attributes to apply to the tag, e.g. none
    React.createElement("h1", {}, "Adopt Me!")
		// ^ What to include between the tags, e.g. children
  );
};

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(React.createElement(App));
```

## Q & A

Q: Basic usage between const or let regarding React components?

A: const is denoting you don’t plan on reassigning it while let is implying it could get reassigned at some point.

Q: What’s new about the createRoot function in v. 18.x?

A: Basically just opts you in to the updated concurrency features. Refer to this link for more context: [https://reactjs.org/blog/2022/03/08/react-18-upgrade-guide.html#updates-to-client-rendering-apis](https://reactjs.org/blog/2022/03/08/react-18-upgrade-guide.html#updates-to-client-rendering-apis).