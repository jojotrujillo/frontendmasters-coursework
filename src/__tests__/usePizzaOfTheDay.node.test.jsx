import { expect, test, vi } from "vitest";
import createFetchMock from "vitest-fetch-mock";
import usePizzaOfTheDay from "../usePizzaOfTheDay.jsx";
import { renderHook, waitFor } from "@testing-library/react";

const fetchMocker = createFetchMock(vi);
fetchMocker.enableMocks();

const testPizza = {
  id: "calabrese",
  name: "The Calabrese Pizza",
  category: "Supreme",
  description:
    "Salami, Pancetta, Tomatoes, Red Onions, Friggitello Peppers, Garlic",
  image: "/public/pizzas/calabrese.webp",
  sizes: { S: 12.25, M: 16.25, L: 20.25 },
};

test("to be null on initial load", async () => {
  // Arrange
  fetchMocker.mockResponseOnce(JSON.stringify(testPizza));

  // Act
  const { result } = renderHook(() => usePizzaOfTheDay(""));

  // Assert
  expect(result.current).toBeNull();
});

test("to call the API and give back the pizza of the day", async () => {
  // Arrange
  fetchMocker.mockResponseOnce(JSON.stringify(testPizza));

  // Act
  const { result } = renderHook(() => usePizzaOfTheDay(""));

  // Assert
  // waitFor essentially reruns whatever is in its body until it no longer throws an error, which when our
  // expect fails, it throws an error
  await waitFor(() => {
    expect(result.current).toEqual(testPizza);
  });

  expect(fetchMocker).toBeCalledWith("/api/pizza-of-the-day");
});
