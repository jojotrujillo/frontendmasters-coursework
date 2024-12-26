import { createRootRoute, Outlet } from "@tanstack/react-router";
import { useState } from "react";
import { CartContext } from "../contexts.jsx";
import Header from "../Header.jsx";
import PizzaOfTheDay from "../PizzaOfTheDay.jsx";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

export const Route = createRootRoute({
  component: () => {
    const cartHook = useState([]);

    return (
      // <></> are fragments and are meant more to appease React, and note that
      // they do not return a div
      <>
        {/* React 19 introduces the ability to drop .Provider. But note that not all components
        in React have to display things. In this case with CartContext, it augments the child
        components it wraps around by providing its passed-in value.*/}
        <CartContext value={cartHook}>
          <div>
            <Header />
            <Outlet />
            <PizzaOfTheDay />
          </div>
        </CartContext>
        <TanStackRouterDevtools />
        <ReactQueryDevtools />
      </>
    );
  },
});
