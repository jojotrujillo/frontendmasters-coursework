# react-query

Created: December 21, 2022 4:28 PM
Section: React Capabilities
Materials: https://react-v8.holt.courses/lessons/react-capabilities/react-query
Reviewed: No

## Status of Project

[https://github.com/jojotrujillo/frontend-masters-coursework/commit/be13d77334367e814cad6f8ecd2ea2b3c29ae3d3](https://github.com/jojotrujillo/frontend-masters-coursework/commit/be13d77334367e814cad6f8ecd2ea2b3c29ae3d3)

---

The React Query library does caching, fetching, and state management such as loading state for you. It’s easier than implementing cache on your own, using useEffect, and handling loading state. Its cache is stored in-memory much like Redis.

React Query’s primary advantage is doing away with useEffect calls. Brian mentions how too many useEffect calls can be burdensome and bug-prone which is why replacing useEffect calls with react-query is advantageous. He also recommends offloading useEffect calls to a library like react-query, but if you must use useEffect, then do it in small amounts and make it testable to cut down on bugs.

The idea behind React is that you want to cache most of what you fetch from a database. If you fetch the details of pet ID 1, you generally do no want to fetch it again if a user revisits that page: you'd like to cache it. This is what react-query is going to do for you: it's a built in caching layer for these async data stores that works really well within the constraints of React.

[TanStack Query | React Query, Solid Query, Svelte Query, Vue Query](https://tanstack.com/query/v4)

More info on react-query including their docs can be found at this link

```jsx
// useBreedList before react-query refactor. Note the "cache" setup, the useEffect,
// the fetching, and the loading status.
import { useState, useEffect } from "react";

const localCache = {};

export default function useBreedList(animal) {
  const [breedList, setBreedList] = useState([]);
  const [status, setStatus] = useState("unloaded");

  useEffect(() => {
    if (!animal) {
      setBreedList([]);
    } else if (localCache[animal]) {
      setBreedList(localCache[animal]);
    } else {
      requestBreedList();
    }

    async function requestBreedList() {
      setBreedList([]);
      setStatus("loading");

      const res = await fetch(
        `https://pets-v2.dev-apis.com/breeds?animal=${animal}`
      );
      const json = await res.json();

      localCache[animal] = json.breeds || [];

      setBreedList(localCache[animal]);
      setStatus("loaded");
    }
  }, [animal]);

  return [breedList, status];
}
```

```jsx
// We break out the fetching from useBreedList and use a query key we get from react-query
// Breaking the fetch function out from the component makes it testable and reusable
async function fetchBreedList({ queryKey }) {
  const animal = queryKey[1];

  if (!animal) return [];

  const res = await fetch(
    `https://pets-v2.dev-apis.com/breeds?animal=${animal}`
  );

  if (!res.ok) {
    throw new Error(`breeds/${animal} fetch not ok`);
  }

  return res.json();
}

export default fetchBreedList;

// Post react-query implementation of useBreedList. Note how react-query replaces
// the fetching, the useEffect, caching, and loading state with its native function.
import { useQuery } from "@tanstack/react-query";
import fetchBreedList from "./fetchBreedList";

export default function useBreedList(animal) {
  const results = useQuery(["breeds", animal], fetchBreedList);

  return [results?.data?.breeds ?? [], results.status];
}
```

![Untitled](react-query%2045e391787ce14defaa748b66c966b11d/Untitled.png)

ℹ️ If useQuery throws an error it will return the isError property and let you do your error handling with that

[How to Have Fun Building React Apps](https://www.freecodecamp.org/news/have-fun-building-react-apps/)

A better quick synopsis on the newest, best libraries to use with React including a blurb about react-query and Zustand

[Mutations | TanStack Query Docs](https://tanstack.com/query/v4/docs/react/guides/mutations)