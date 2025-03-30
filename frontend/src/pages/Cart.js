import React from "react";
import "./Cart.css";
import { useDispatch, useSelector } from "react-redux";
import { deleteFromCart, updateQuantity } from "../store/cartslice/Cartslice";

const Cart = () => {
  const cartProducts = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();
  const deleteCart = (item) => {
    dispatch(deleteFromCart(item));
  };
  const increment = (id, quantity) => {
    dispatch(updateQuantity({ id, quantity: quantity + 1 }));
  };
  const decrement = (id, quantity) => {
    if (quantity > 1) {
      dispatch(updateQuantity({ id, quantity: quantity - 1 }));
    }
  };
  let count = 1;
  return (
    <>
      <h1>BAG</h1>
      <br />
      <table class="table-container">
        <tr class="table-head-row">
          <th>No.</th>
          <th>Product</th>
          <th>Quantity</th>
          <th>Name</th>
          <th>Price</th>
          <th>Remove</th>
        </tr>
        <tbody>
          {cartProducts.map((item) => (
            <>
              <tr class="table-body-row">
                <td>{count++}</td>
                <td>
                  <img src={item.img} alt="" />
                </td>
                <td>
                  <button
                    class="btn btn-dark update-btn"
                    onClick={() => increment(item.id, item.quantity)}
                  >
                    +
                  </button>
                  {item.quantity}
                  <button
                    class="btn btn-dark update-btn"
                    onClick={() => decrement(item.id, item.quantity)}
                  >
                    -
                  </button>
                </td>
                <td>{item.name}</td>
                <td>₹{item.price * item.quantity}.00</td>
                <td>
                  <button class="btn btn-dark" onClick={() => deleteCart(item)}>
                    Remove
                  </button>
                </td>
              </tr>
            </>
          ))}
        </tbody>
      </table>

      <div class="total-container">
        <p>
          Grand Total :
          <span class="total-amount">
            ₹
            {cartProducts.reduce(
              (total, product) => total + product.price * product.quantity,
              0
            )}
            .00
          </span>
        </p>
        <button class="btn btn-success">Proceed To Checkout</button>
      </div>
    </>
  );
};
export default Cart;
