import React, { useEffect, useState } from "react";
import "./Edit.css";
import { useParams } from "react-router-dom";

const Edit = () => {
  const { id } = useParams();

  const [image, setImage] = useState("");

  const [data, setData] = useState({
    productName: "",
    productDescription: "",
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
    const productPrice = form.productPrice.value;
    const productCategory = form.productCategory.value;

    const formdata = new FormData();
    formdata.append("productName", productName);
    formdata.append("productDescription", productDescription);
    formdata.append("image", image);
    formdata.append("productPrice", productPrice);
    formdata.append("productCategory", productCategory);
    console.log(formdata);

    fetch("http://localhost:6005/update/" + id, {
      method: "PATCH",
      body: formdata,
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
            type="file"
            name="image"
            onChange={(e) => setImage(e.target.files[0])}
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
