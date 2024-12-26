import { useContext, useEffect, useState } from "react";
import Pizza from "../Pizza.jsx";
import Cart from "../Cart.jsx";
import { CartContext } from "../contexts.jsx";
import { createLazyFileRoute } from "@tanstack/react-router";
import { priceConverter } from "../useCurrency.jsx";

export const Route = createLazyFileRoute("/order")({
  component: Order,
});

// Named functions compared to anonymous functions help with debugging
// by the function name appearing in the stack trace
function Order() {
  const [pizzaTypes, setPizzaTypes] = useState([]);
  const [pizzaType, setPizzaType] = useState("pepperoni");
  const [pizzaSize, setPizzaSize] = useState("M");
  const [loading, setLoading] = useState(true);
  const [cart, setCart] = useContext(CartContext);
  const apiUrl = import.meta.env.VITE_API_URL;
  let price, selectedPizza;

  function addToCart() {
    setCart([...cart, { pizza: selectedPizza, size: pizzaSize, price }]);
  }

  async function checkout() {
    setLoading(true);

    await fetch(`${apiUrl}/api/order`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      // Able to condense the argument here to .stringify() since both property and
      // content name match
      body: JSON.stringify({
        cart,
      }),
    });

    setCart([]);
    setLoading(false);
  }

  async function fetchPizzaTypes() {
    const pizzasRes = await fetch(`${apiUrl}/api/pizzas`);
    const pizzasJson = await pizzasRes.json();
    setPizzaTypes(pizzasJson);
    setLoading(false);
  }

  // useEffects can't directly be async but can call async functions declared elsewhere
  // https://dev.to/sanjampreetsingh/why-async-callback-cannot-happen-in-react-useeffect-hook-ff
  useEffect(() => {
    fetchPizzaTypes();
  }, []);

  if (!loading) {
    selectedPizza = pizzaTypes.find((pizza) => pizzaType === pizza.id);
    price = priceConverter(
      selectedPizza.sizes ? selectedPizza.sizes[pizzaSize] : "",
    );
  }

  return (
    <div className={"order-page"}>
      <div className={"order"}>
        <h2>Create Order</h2>
        <form action={addToCart}>
          <div>
            <div>
              <label htmlFor={"pizza-type"}>Pizza Type</label>
              <select
                onChange={(e) => setPizzaType(e.target.value)}
                name={"pizza-type"}
                value={pizzaType}
              >
                {pizzaTypes.map((pizza) => (
                  <option key={pizza.id} value={pizza.id}>
                    {pizza.name}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor={"pizza-size"}>Pizza Size</label>
              {/* Event bubbling works within JSX the same as it does in raw HTML */}
              <div onChange={(e) => setPizzaSize(e.target.value)}>
                <span>
                  <input
                    checked={pizzaSize === "S"}
                    type={"radio"}
                    name={"pizza-size"}
                    value={"S"}
                    id={"pizza-s"}
                  />
                  <label htmlFor={"pizza-s"}>Small</label>
                </span>
                <span>
                  <input
                    checked={pizzaSize === "M"}
                    type={"radio"}
                    name={"pizza-size"}
                    value={"M"}
                    id={"pizza-m"}
                  />
                  <label htmlFor={"pizza-m"}>Medium</label>
                </span>
                <span>
                  <input
                    checked={pizzaSize === "L"}
                    type={"radio"}
                    name={"pizza-size"}
                    value={"L"}
                    id={"pizza-l"}
                  />
                  <label htmlFor={"pizza-l"}>Large</label>
                </span>
              </div>
            </div>
            <button type={"submit"}>Add to Cart</button>
          </div>
          {loading ? (
            <h3>Loading...</h3>
          ) : (
            <div className={"order-pizza"}>
              <Pizza
                name={selectedPizza.name}
                description={selectedPizza.description}
                image={selectedPizza.image}
              />
              <p>{price}</p>
            </div>
          )}
        </form>
      </div>
      {loading ? <h2>Loading...</h2> : <Cart cart={cart} checkout={checkout} />}
    </div>
  );
}
