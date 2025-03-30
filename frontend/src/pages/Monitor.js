import React from "react";
import "./Monitor.css";
import monitor1 from "../images/monitor1.webp";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, deleteFromCart } from "../store/cartslice/Cartslice";

import Monitors from "../products/Monitors";

const Monitor = () => {
  const cartProducts = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();
  const addCart = (item) => {
    dispatch(addToCart(item));
  };

  const deleteCart = (item) => {
    dispatch(deleteFromCart(item));
  };
  return (
    <>
      <div class="monitor-wrapper">
        <div class="banner-container">
          <h1>Odyssey</h1>
          <h3>Discover the next level of gaming</h3>
          <img src={monitor1} class="img-fluid banner" alt="image" />
        </div>

        <div class="row">
          {Monitors.map((item) => (
            <div class="col-lg-3 col-md-4 col-sm-6">
              <div class="card" key={item.id}>
                <img src={item.img} class="card-img-top" alt="..." />
                <div class="card-body">
                  <h5 class="card-title">{item.title}</h5>
                  <p class="card-text">{item.description}</p>
                  <p class="card-text">₹{item.price}</p>
                  {cartProducts.find((Items) => Items.id === item.id) ? (
                    <button
                      class="btn btn-dark"
                      onClick={() => {
                        deleteCart(item);
                      }}
                    >
                      Remove From Cart
                    </button>
                  ) : (
                    <button
                      class="btn btn-dark"
                      onClick={() => {
                        addCart(item);
                      }}
                    >
                      Add To Cart
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Monitor;
