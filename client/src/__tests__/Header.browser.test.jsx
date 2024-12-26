import { expect, test } from "vitest";
import {
  createRootRoute,
  createRouter,
  RouterProvider,
} from "@tanstack/react-router";
import { CartContext } from "../contexts.jsx";
import Header from "../Header.jsx";
import { render } from "vitest-browser-react";

test("correctly renders a header with a zero cart count", async () => {
  const rootRoute = createRootRoute({
    component: () => (
      <CartContext value={[[]]}>
        <Header />
      </CartContext>
    ),
  });
  const router = createRouter({ routeTree: rootRoute });

  const screen = render(<RouterProvider router={router}></RouterProvider>);

  const itemsInCart = await screen.getByTestId("cart-number");

  await expect.element(itemsInCart).toBeInTheDocument();
  await expect.element(itemsInCart).toHaveTextContent("0");
});

test("correctly renders a header with a three cart count", async () => {
  const rootRoute = createRootRoute({
    component: () => (
      <CartContext.Provider
        value={[[{ pizza: 1 }, { pizza: 2 }, { pizza: 3 }]]}
      >
        <Header />
      </CartContext.Provider>
    ),
  });

  const router = createRouter({ routeTree: rootRoute });
  const screen = render(<RouterProvider router={router}></RouterProvider>);

  const itemsInCart = await screen.getByTestId("cart-number");

  await expect.element(itemsInCart).toBeInTheDocument();
  await expect.element(itemsInCart).toHaveTextContent("3");
});
