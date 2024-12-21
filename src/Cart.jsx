// Components own state is mutable a la useState, whereas props are immutable.
// This Cart component cannot affect cart coming from Order.
// https://react.dev/learn/passing-props-to-a-component#how-props-change-over-time
function Cart({ cart, checkout }) {
  const intl = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });
  let total = 0;

  for (let i = 0; i < cart.length; i++) {
    const current = cart[i];
    total += current.pizza.sizes[current.size];
  }

  return (
    <div className={"cart"}>
      <h2>Cart</h2>
      <ul>
        {cart.map((item, index) => (
          <li key={index}>
            <span className={"size"}>{item.size}</span> -
            <span className={"type"}>{item.pizza.name}</span> -
            <span className={"size"}>{item.price}</span>
          </li>
        ))}
      </ul>
      <p>Total: {intl.format(total)}</p>
      <button onClick={checkout}>Checkout</button>
    </div>
  );
}

export default Cart;
