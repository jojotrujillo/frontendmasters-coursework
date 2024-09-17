# useEffect & Custom Hooks

Created: December 16, 2022 1:51 PM
Section: Core React Concepts
Materials: https://react-v8.holt.courses/lessons/core-react-concepts/effects, https://react-v8.holt.courses/lessons/core-react-concepts/custom-hooks
Reviewed: No

## useEffect

According to the React docs, useEffect tells React that your component needs to do something after render. React will remember the useEffect function and call it after performing the DOM updates. You can have it look at pieces of state to determine when to run. For example, if you have a form with updated pieces of state and a user clicks submit, then the useEffect function would run again. When working with useEffect, managing when it fires off becomes a secondary task behind what it should be doing. More info in the following link:

[Using the Effect Hook - React](https://reactjs.org/docs/hooks-effect.html#example-using-hooks)

```jsx
import { useEffect, useState } from "react";
import Pet from "./Pet";

const [pets, setPets] = useState([]);

// add inside component, beneath all the `useState` setup
useEffect(() => {
  requestPets();
}, []); // eslint-disable-line react-hooks/exhaustive-deps

async function requestPets() {
  const res = await fetch(
    `http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`
  );
  const json = await res.json();

  setPets(json.pets);
}

// in jsx, under form
{
  pets.map((pet) => (
    <Pet name={pet.name} animal={pet.animal} breed={pet.breed} key={pet.id} />
  ));
}
```

- The primary use case for useEffect is to fetch from APIs, local storage, or some other external entity
- We define the requestPets function in the component so that is has scope with the outer functions within the component. This takes advantage of the closure feature in JavaScript 👇

[Closures - JavaScript | MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures#:~:text=A%20closure%20is%20the%20combination,scope%20from%20an%20inner%20function)

- ESLint in this case is being proactive by showing you warnings in the editor on what state could change, but Brian noted you’ll end up silencing this warning fairly often.

## Status of Project

- Our first use of the useEffect hook to fetch from an API

[https://github.com/jojotrujillo/frontend-masters-coursework/commit/9ecc7ec695252572c7ee25f727350368e538b00c](https://github.com/jojotrujillo/frontend-masters-coursework/commit/9ecc7ec695252572c7ee25f727350368e538b00c)

- We made our own custom hook to populate our breed list

[https://github.com/jojotrujillo/frontend-masters-coursework/commit/1fa40b3a9de7182d26933997a0eac3b7766d136c](https://github.com/jojotrujillo/frontend-masters-coursework/commit/1fa40b3a9de7182d26933997a0eac3b7766d136c)

## Custom Hooks

- You’re able to use the OOTB hooks and custom logic to create one reusable custom hook. More info here:

[Building Your Own Hooks - React](https://reactjs.org/docs/hooks-custom.html#extracting-a-custom-hook)

```jsx
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
		// Note we're including the function definition in useEffect since React
		// encourages you to do it this way. Has to do with scope and recreation
		// on rerendering...
    async function requestBreedList() {
      setBreedList([]);
      setStatus("loading");
      const res = await fetch(
        `http://pets-v2.dev-apis.com/breeds?animal=${animal}`
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

I don’t think we’re actually using the “cache” in the above example, but the following link to Twilio’s blog post about this explains further if you’re wanting to really use local caching. There’s also local storage and ETags.

[Understanding Local Caching in React](https://www.twilio.com/blog/local-cache-react-redux)

[HTTP ETag - Wikipedia](https://en.wikipedia.org/wiki/HTTP_ETag)