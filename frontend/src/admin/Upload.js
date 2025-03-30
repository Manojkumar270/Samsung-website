import React from "react";
import "./Upload.css";

const Upload = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const productName = form.productName.value;
    const productDescription = form.productDescription.value;
    const productImage = form.productImage.value;
    const productPrice = form.productPrice.value;
    const productCategory = form.productCategory.value;

    const productObj = {
      productName,
      productDescription,
      productImage,
      productPrice,
      productCategory,
    };
    console.log(productObj);

    fetch("http://localhost:6005/upload", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify(productObj),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        form.reset();
        window.location.href = "/update";
      });
  };

  return (
    <>
      <div class="upload-container">
        <h1>UPLOAD</h1>
        <form onSubmit={handleSubmit}>
          <label>Product Name</label>
          <input type="text" name="productName" />
          <br />
          <label>Product description</label>
          <input type="text" name="productDescription" />
          <br />

          <label>Product image</label>
          <input type="text" name="productImage" />
          <br />

          <label>Product Price</label>
          <input type="number" name="productPrice" />
          <br />

          <label>Product category</label>
          <input type="text" name="productCategory" />
          <br />

          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
};

export default Upload;
