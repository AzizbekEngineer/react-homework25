import React, { useEffect, useState } from "react";
import "./createProduct.scss";
import { toast } from "react-toastify";
import { usePostProductMutation } from "../../../context/api/productApi";

let initialState = {
  title: "",
  price: "",
  url: "",
  category: "",
};

const CreateProduct = () => {
  const [formData, setFormData] = useState(initialState);

  const [createProduct, { isLoading, isSuccess, isError, error }] =
    usePostProductMutation();

  const handleChange = (e) => {
    let { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === "price" ? +value : value,
    }));
  };

  useEffect(() => {
    if (isSuccess) {
      setFormData(initialState);
      toast.success("Product created successfully!");
    } else if (isError) {
      toast.error("Failed to create product");
    }
  }, [isSuccess, isError]);

  const handleCreateProduct = (e) => {
    e.preventDefault();
    createProduct(formData);
  };

  return (
    <div className="form">
      <h2 className="form__title">Create Product</h2>
      <form onSubmit={handleCreateProduct} className="form__info" action="">
        <div className="form__card">
          <label htmlFor="name">Product Title:</label>
          <input
            id="name"
            name="title"
            value={formData.title}
            onChange={handleChange}
            type="text"
            placeholder="Title"
          />
        </div>
        <div className="form__card">
          <label htmlFor="price">Product Price:</label>
          <input
            id="price"
            value={formData.price}
            name="price"
            onChange={handleChange}
            type="number"
            placeholder="Price"
          />
        </div>
        <div className="form__card">
          <label htmlFor="url">Product URL:</label>
          <input
            id="url"
            name="url"
            value={formData.url}
            onChange={handleChange}
            type="text"
            placeholder="URL"
          />
        </div>
        <div className="form__card">
          <label htmlFor="desc">Product Category:</label>
          <input
            id="desc"
            name="category"
            value={formData.category}
            onChange={handleChange}
            type="text"
            placeholder="Category"
          />
        </div>
        <button className="form__btn" type="submit" disabled={isLoading}>
          Create
        </button>
      </form>
    </div>
  );
};

export default CreateProduct;
