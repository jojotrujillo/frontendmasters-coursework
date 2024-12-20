import { useEffect, useState } from "react";
import Pizza from "./Pizza.jsx";

// Named functions compared to anonymous functions help with debugging
// by the function name appearing in the stack trace
function Order() {
  const [pizzaTypes, setPizzaTypes] = useState([]);
  const [pizzaType, setPizzaType] = useState("pepperoni");
  const [pizzaSize, setPizzaSize] = useState("M");
  const [loading, setLoading] = useState(true);
  const intl = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });
  let price, selectedPizza;

  async function fetchPizzaTypes() {
    await new Promise((resolve) => setTimeout(resolve, 3000));

    const pizzasRes = await fetch("/api/pizzas");
    const pizzasJson = await pizzasRes.json();
    setPizzaTypes(pizzasJson);
    setLoading(false);
  }

  useEffect(() => {
    fetchPizzaTypes();
  }, []);

  if (!loading) {
    selectedPizza = pizzaTypes.find((pizza) => pizzaType === pizza.id);
    price = intl.format(
      selectedPizza.sizes ? selectedPizza.sizes[pizzaSize] : "",
    );
  }

  return (
    <div className={"order"}>
      <h2>Create Order</h2>
      <form>
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
        <div className={"order-pizza"}>
          <Pizza
            name={"Pepperoni"}
            description={"Mozzarella Cheese, Pepperoni"}
            image={"/public/pizzas/pepperoni.webp"}
          />
          <p>$13.37</p>
        </div>
      </form>
    </div>
  );
}

export default Order;
