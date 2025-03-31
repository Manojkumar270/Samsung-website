import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Mobile from "./pages/Mobile.js";
import Laptop from "./pages/Laptop.js";
import Monitor from "./pages/Monitor.js";
import Cart from "./pages/Cart.js";
import Upload from "./admin/Upload.js";
import Update from "./admin/Update.js";
import Edit from "./admin/Edit.js";
import Register from "./pages/Register.js";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/mobile" element={<Mobile />}></Route>
          <Route path="/laptop" element={<Laptop />}></Route>
          <Route path="/monitor" element={<Monitor />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
          <Route path="/upload" element={<Upload />}></Route>
          <Route path="/update" element={<Update />}></Route>
          <Route
            path="/edit/:id"
            element={<Edit />}
            // loader={({ params }) => {
            //   fetch("http://localhost:6005/update/" + params.id);
            // }}
          ></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/login" element={""}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
