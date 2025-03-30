import React from "react";
import "./Laptop.css";
import laptop3 from "../images/laptop3.avif";
import Laptops from "../products/Laptops";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, deleteFromCart } from "../store/cartslice/Cartslice";

const Laptop = () => {
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
      <div class="laptop-wrapper">
        <br />
        <h1>All Galaxy Books</h1>
        <br></br>

        <img src={laptop3} class="img-fluid" alt="..."></img>

        <br />
        <br />
        <div class="row">
          {Laptops.map((item) => (
            <div class="col-lg-3 col-md-4 col-sm-6">
              <div class="card">
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

export default Laptop;
