import { useDebugValue, useEffect, useState } from "react";

const usePizzaOfTheDay = () => {
  const [pizzaOfTheDay, setPizzaOfTheDay] = useState(null);

  useEffect(() => {
    async function fetchPizzaOfTheDay() {
      const response = await fetch("/api/pizza-of-the-day");
      const data = await response.json();
      setPizzaOfTheDay(data);
    }

    fetchPizzaOfTheDay();
  }, []);

  useDebugValue(pizzaOfTheDay ? `${pizzaOfTheDay.id}` : "Loading...");

  return pizzaOfTheDay;
};

export default usePizzaOfTheDay;
