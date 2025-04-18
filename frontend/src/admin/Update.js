import React, { useEffect, useState } from "react";
import "./Update.css";
import { Link } from "react-router-dom";

const Update = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getAll();
  }, []);

  const getAll = () => {
    fetch("http://localhost:6005/alldevices")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      });
  };

  const deleteItems = (id) => {
    fetch(`http://localhost:6005/delete/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        getAll();
      });
  };

  let count = 0;
  return (
    <>
      <div class="update-container">
        <h1>UPDATE</h1>
        <table>
          <thead>
            <tr>
              <th>No.</th>
              <th>Product ID</th>
              <th>Product Name</th>
              <th>Product Img</th>
              <th>Product description</th>
              <th>Product Category</th>
              <th>Product Price</th>
              <th>edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {products.map((item) => (
              <tr>
                <td>{++count}</td>
                <td>{item._id}</td>
                <td>{item.productName}</td>
                <td>
                  <img
                    class="img-fluid"
                    src={`http://localhost:6005/uploads/${item.productImage}`}
                  />
                </td>
                <td>{item.productDescription}</td>
                <td>{item.productCategory}</td>
                <td>{item.productPrice}</td>
                <td>
                  <Link to={`/edit/${item._id}`}>
                    <button>Edit</button>
                  </Link>
                </td>
                <td>
                  <button onClick={() => deleteItems(item._id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Update;
