import React, { useState } from "react";
import "./Upload.css";

const Upload = () => {
  const [image, setImage] = useState(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const productName = form.productName.value;
    const productDescription = form.productDescription.value;
    const productPrice = form.productPrice.value;
    const productCategory = form.productCategory.value;

    const formdata = new FormData();
    formdata.append("productName", productName);
    formdata.append("productDescription", productDescription);
    formdata.append("image", image);
    formdata.append("productPrice", productPrice);
    formdata.append("productCategory", productCategory);

    console.log(formdata);

    fetch("http://localhost:6005/upload", {
      method: "POST",
      body: formdata,
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
          <input
            type="file"
            name="image"
            onChange={(e) => setImage(e.target.files[0])}
          />
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
