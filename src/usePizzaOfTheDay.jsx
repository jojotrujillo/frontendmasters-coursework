import { useDebugValue, useEffect, useState } from "react";

// Custom hooks are not magic; simply wrappers around other hooks but good
// at separating out fetching logic from display logic
const usePizzaOfTheDay = () => {
  const [pizzaOfTheDay, setPizzaOfTheDay] = useState(null);

  useEffect(() => {
    async function fetchPizzaOfTheDay() {
      const apiUrl = import.meta.env.VITE_API_URL;
      const response = await fetch(`${apiUrl}/api/pizza-of-the-day`);
      const data = await response.json();
      setPizzaOfTheDay(data);
    }

    fetchPizzaOfTheDay();
  }, []);

  useDebugValue(pizzaOfTheDay ? `${pizzaOfTheDay.id}` : "Loading...");

  return pizzaOfTheDay;
};

export default usePizzaOfTheDay;
