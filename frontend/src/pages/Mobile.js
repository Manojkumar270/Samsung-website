import React from "react";
import "./Mobile.css";
import galaxy1 from "../images/galaxy1.avif";
import samsung_1 from "../images/samsung-1.avif";
import samsung_2 from "../images/samsung-2.avif";
import samsung_3 from "../images/samsung-3.avif";
import samsung_4 from "../images/samsung-4.webp";
import samsung_5 from "../images/samsung-5.avif";
import Mobiles from "../products/Mobiles";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, deleteFromCart } from "../store/cartslice/Cartslice";

const Mobile = () => {
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
      <div class="mobile-wrapper">
        <div class="mobile-nav">
          <h4>
            <em>MOBILES</em>
          </h4>
          <div class="mobile-nav-links">
            <h6>Smartphones</h6>
            <h6>Tablets</h6>
            <h6>Galaxy Books</h6>
            <h6>Watches</h6>
            <h6>Galaxy Buds</h6>
            <h6>Galaxy Ring</h6>
          </div>
        </div>

        <div class="row mobile-model-container">
          <div class="col-lg-2   mobile-container">
            <img class="img-fluid" src={samsung_1} />
            <p>Galaxy S</p>
          </div>
          <div class="col-lg-2 mobile-container">
            <img class="img-fluid" src={samsung_2} />
            <p>Galaxy Z</p>
          </div>
          <div class="col-lg-2 mobile-container">
            <img class="img-fluid" src={samsung_3} />
            <p>Galaxy A</p>
          </div>
          <div class="col-lg-2 mobile-container">
            <img class="img-fluid" src={samsung_4} />
            <p>Galaxy M</p>
          </div>

          <div class="col-lg-2 mobile-container">
            <img class="img-fluid" src={samsung_5} />
            <p>Galaxy F</p>
          </div>
        </div>
        <br></br>

        <img src={galaxy1} class="img-fluid" alt="..."></img>
        <br />
        <div class="row">
          {Mobiles.map((item) => (
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

export default Mobile;
