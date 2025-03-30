import React from "react";
import "./Footer.css";
import insta from "../images/insta.png";
import facebook from "../images/facebook.png";
import twitter from "../images/twitter.png";
import youtube from "../images/you tube.png";
import shipping from "../images/shipping.webp";
import return_img from "../images/return.webp";
import guarantee from "../images/guarantee.webp";
import secure from "../images/secure.webp";

const Footer = () => {
  return (
    <>
      <div className="footer-top">
        <div>
          <img className="car" src={shipping} alt="" />
          <h5>Free Shipping</h5>
          <p>Free shipping on all orders</p>
        </div>
        <div>
          <img className="return_img" src={return_img} alt="" />
          <h5>Easy Returns</h5>
          <p>
            Change your mind? No problem. Our free returns process makes it
            easy.
          </p>
        </div>

        <div>
          <img className="guarantee" src={guarantee} alt="" />
          <h5> Gurantee</h5>
          <p>Crocs™ products are covered by a 90-day warranty</p>
        </div>
        <div>
          <img className="secure" src={secure} alt="" />
          <h5>Your Information is Secure</h5>
          <p>100% secured transaction using SSL encrypted connection.</p>
        </div>
      </div>

      <div className="footer">
        <br />
        <div>
          <h5>CUSTOMER POLICIES</h5>
          <p>Contact us</p>
          <p>FAQ</p>
          <p>T&C</p>
          <p>Terms of Use</p>
          <p>Privacy Policy</p>
          <p></p>
        </div>
        <div className="get-app">
          <h5>INSTALL APP ON MOBILE</h5>
          <div>get it on google play store</div>
          <div>app store</div>
        </div>

        <div className="return">
          <div>
            <span>100% Guarantee</span> for all the products
          </div>
          <div>
            <span>Return Within 14 days</span> of receiving your order
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
