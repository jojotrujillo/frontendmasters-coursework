import { cleanup, render } from "@testing-library/react";
import { afterEach, expect, test } from "vitest";
import Pizza from "../Pizza.jsx";

afterEach(cleanup);

// The asyncs in the test functions are optional depending on whether there's anything asynchronous in the functions.
// However, vitest handles either case regardless, e.g. if there's nothing asynchronous then it runs just fine with the async tags.
test("alt text renders on image", async () => {
  const name = "My Favorite Pizza";
  const src = "https://picsum.photos/200";

  const screen = render(
    <Pizza name={name} description={"super cool pizza"} image={src} />,
  );

  const img = screen.getByRole("img");
  expect(img.src).toBe(src);
  expect(img.alt).toBe(name);
});

test("to have default image if none is provided", async () => {
  const screen = render(
    <Pizza name={"Cool Pizza"} description="super cool pizza" />,
  );

  const img = screen.getByRole("img");
  expect(img.src).not.toBe("");
});
