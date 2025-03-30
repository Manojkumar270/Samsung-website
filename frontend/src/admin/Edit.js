import React, { useEffect, useState } from "react";
import "./Edit.css";
import { useParams } from "react-router-dom";

const Edit = () => {
  const { id } = useParams();

  const [data, setData] = useState({
    productName: "",
    productDescription: "",
    productImage: "",
    productPrice: "",
    productCategory: "",
  });

  useEffect(() => {
    fetch("http://localhost:6005/getone/" + id)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        console.log(data);
      });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const productName = form.productName.value;
    const productDescription = form.productDescription.value;
    const productImage = form.productImage.value;
    const productPrice = form.productPrice.value;
    const productCategory = form.productCategory.value;

    const dataObj = {
      productName,
      productDescription,
      productImage,
      productPrice,
      productCategory,
    };
    setData(dataObj);
    console.log(data);

    fetch("http://localhost:6005/update/" + id, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dataObj),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);

        console.log("updated");
        window.location.href = "/update";
      });
  };
  return (
    <>
      <div class="edit-container">
        <h1>EDIT</h1>
        <form onSubmit={handleSubmit}>
          <label value={data.productName}>Product Name</label>
          <input
            type="text"
            name="productName"
            defaultValue={data.productName}
          />
          <br />
          <label value={data.productDescription}>Product description</label>
          <input
            type="text"
            name="productDescription"
            defaultValue={data.productDescription}
          />
          <br />

          <label value={data.productImage}>Product image</label>
          <input
            type="text"
            name="productImage"
            defaultValue={data.productImage}
          />
          <br />

          <label value={data.productPrice}>Product Price</label>
          <input
            type="number"
            name="productPrice"
            defaultValue={data.productPrice}
          />
          <br />

          <label value={data.productCategory}>Product category</label>
          <input
            type="text"
            name="productCategory"
            defaultValue={data.productCategory}
          />
          <br />

          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
};

export default Edit;
