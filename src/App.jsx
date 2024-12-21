import { StrictMode, useState } from "react";
import { createRoot } from "react-dom/client";
import Order from "./Order.jsx";
import PizzaOfTheDay from "./PizzaOfTheDay.jsx";
import Header from "./Header.jsx";
import { CartContext } from "./contexts.jsx";

const App = () => {
  const cartHook = useState([]);

  return (
    <StrictMode>
      {/* React 19 introduces the ability to drop .Provider. But note that not all components
       in React have to display things. In this case with CartContext, it augments the child
       components it wraps around by providing its passed-in value.*/}
      <CartContext value={cartHook}>
        <div>
          <Header />
          <Order />
          <PizzaOfTheDay />
        </div>
      </CartContext>
    </StrictMode>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
