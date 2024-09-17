# Routing & useParams

Created: December 18, 2022 9:01 AM
Section: React Capabilities
Materials: https://react-v8.holt.courses/lessons/react-capabilities/react-router
Reviewed: No

Brian decided to use React Router in our example app since it’s full of excellent features. These are the same folks that develop React Router and Remix. The following bookmarks are for their respective websites to learn more.

[Home v6.5.0](https://reacttraining.com/react-router/)

[Reach Router: Next Generation Routing for React](https://reach.tech/router/)

[Remix - Build Better Websites](https://remix.run/)

- Brian claims React Router is a popular client library for routing and according to NPM Trends.com, he is correct:

[react-router-dom | npm trends](https://npmtrends.com/react-router-dom)

```jsx
// In App.jsx
<BrowserRouter>
	<header>
	  <Link to="/">Adopt Me!</Link>
  </header>
  <Routes>
	  <Route path="/details/:id" element={<Details />} />
    <Route path="/" element={<SearchParams />} />
  </Routes>
</BrowserRouter>

// In Pet.jsx
// at top
import { Link } from "react-router-dom";

// change wrapping <a>
<Link to={`/details/${id}`} className="pet">
  […]
</Link>
```

- In the Route component, the element prop explained:

[](https://reactrouter.com/docs/en/v6/upgrading/v5#advantages-of-route-element)

![More explanations of what’s changed with React Router and why it’s good 👍](Routing%20&%20useParams%20c528bb8d3e04457787a326e30e44359f/Untitled.png)

More explanations of what’s changed with React Router and why it’s good 👍

## useParams

```jsx
// Details.jsx
import { useParams } from "react-router-dom";

const Details = () => {
  const { id } = useParams();
  return <h2>{id}</h2>;
};

export default Details;
```

- Brian talks a little about React Context and React Router’s useParams hook, but the definition on React Router’s site is pretty good to sum up what useParams does:

[useParams v6.5.0](https://reactrouter.com/en/main/hooks/use-params)

- You can also look in the Components explorer in React’s Dev Tools to see how/where the id prop is coming from out of BrowserRouter via Context for visuals.

## Status of Project

[https://github.com/jojotrujillo/frontend-masters-coursework/commit/5cbd363d0d3523f03dac4ec21a0b92cc2001afb1](https://github.com/jojotrujillo/frontend-masters-coursework/commit/5cbd363d0d3523f03dac4ec21a0b92cc2001afb1)