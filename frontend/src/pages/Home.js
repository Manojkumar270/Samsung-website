import React, { useState } from "react";
import "./Home.css";
import lap from "../images/GB5-Pre-reserve_684X684.avif";
import banner4 from "../images/banner4.avif";
import banner5 from "../images/banner5.webp";
import mobile1 from "../images/mobile1.avif";
import mobile2 from "../images/mobile2.avif";
import fridge from "../images/fridge.avif";
import monitor from "../images/monitor.avif";
import tail_banner_1 from "../images/tail-banner-1.webp";
import tail_banner_2 from "../images/tail-banner-2.webp";
import tail_banner_3 from "../images/tail-banner-3.webp";
import tail_banner_4 from "../images/tail-banner-4.avif";
import video from "../images/video1.mp4";

const Home = () => {
  return (
    <>
      <div class="home-wrapper">
        <div
          id="carouselExampleControls"
          class="carousel slide"
          data-bs-ride="carousel"
        >
          <div class="carousel-inner">
            <div class="carousel-item active">
              <video src={video} className="d-block " autoPlay muted loop>
                Your browser does not support the video tag.
              </video>
            </div>
            <div class="carousel-item">
              <img src={banner4} class="d-block w-100" alt="..." />
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>

        <br />
        <br />

        <h1>This Week’s Highlights</h1>
        <br />
        <br />

        <div class="grid">
          <div class="row">
            <div class="col-lg-6 container-1">
              <img class="img-fluid" src={lap} alt="" />
            </div>
            <div class="col-lg-6 container-2 ">
              <div class="row">
                <div class="col-lg-6  child-1 ">
                  <img class="img-fluid" src={mobile1} alt="" />
                </div>
                <div class="col-lg-6  child-2">
                  <img class="img-fluid" src={mobile2} alt="" />
                </div>
              </div>
              <div class="row">
                <div class="col-lg-6  child-3">
                  <img class="img-fluid" src={fridge} alt="" />
                </div>
                <div class="col-lg-6  child-4">
                  <img class="img-fluid" src={monitor} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <br />
        <div class="home-tail">
          <h1>Discover the tech behind our next-gen Galaxy devices</h1>
          <br />
          <div class="row">
            <div class="col-lg-6 ">
              <img class="img-fluid" src={tail_banner_2} />
            </div>
            <div class="col-lg-6 container">
              <h2>Capture your best portrait with Object Aware Engine</h2>
              <p>
                Capture more precise skin tone and texture with the newest
                advancements in our object-aware engine. Now, Galaxy S25 Ultra
                is able to not only detect objects, but light — helping deliver
                even more natural skin pigmentation.
              </p>
            </div>
          </div>

          <br />
          <br />

          <div class="row">
            <div class="col-lg-6 container">
              <h2>Capture your best portrait with Object Aware Engine</h2>
              <p>
                Capture more precise skin tone and texture with the newest
                advancements in our object-aware engine. Now, Galaxy S25 Ultra
                is able to not only detect objects, but light — helping deliver
                even more natural skin pigmentation.
              </p>
            </div>
            <div class="col-lg-6 ">
              <img class="img-fluid" src={tail_banner_3} />
            </div>
          </div>

          <br />
          <br />

          <div class="row">
            <div class="col-lg-6">
              <img class="img-fluid" src={tail_banner_4} />
            </div>
            <div class="col-lg-6 container">
              <h2>Capture your best portrait with Object Aware Engine</h2>
              <p>
                Capture more precise skin tone and texture with the newest
                advancements in our object-aware engine. Now, Galaxy S25 Ultra
                is able to not only detect objects, but light — helping deliver
                even more natural skin pigmentation.
              </p>
            </div>
          </div>

          <br />
          <br />

          <div class="row">
            <div class="col-lg-6 container">
              <h2>Capture your best portrait with Object Aware Engine</h2>
              <p>
                Capture more precise skin tone and texture with the newest
                advancements in our object-aware engine. Now, Galaxy S25 Ultra
                is able to not only detect objects, but light — helping deliver
                even more natural skin pigmentation.
              </p>
            </div>
            <div class="col-lg-6">
              <img class="img-fluid" src={tail_banner_1} />
            </div>
          </div>

          <br />
          <br />
        </div>
      </div>
    </>
  );
};

export default Home;
