import React, { useState } from "react";
import {
  useDeleteProductMutation,
  useGetProductsQuery,
} from "../../../context/api/productApi";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { like } from "../../../context/slice/wishlistSlice";

const ManageProduct = () => {
  const { data: products, isLoading, isError } = useGetProductsQuery();
  const [deleteProduct, { isLoading: deleteIsLoading }] =
    useDeleteProductMutation();
  const dispatch = useDispatch();
  const wishlistData = useSelector((state) => state.wishlist.value);
  const [selectId, setSelectId] = useState(null);

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error loading products</div>;

  const editProduct = (id) => {
    setSelectId(id);
  };
  console.log(selectId);

  return (
    <div className="product container">
      <div className="product__cards">
        {products?.map((el) => (
          <div className="product__card" key={el?.id}>
            <div className="product__img">
              <Link to={`/product/${el.id}`}>
                <div className="product__img">
                  <img src={el?.url} alt="" />
                </div>
              </Link>
            </div>
            <div className="product__info">
              <h3>Price: {el?.price}$</h3>
              <p>Category: {el?.category}</p>
              <div className="product__buttons">
                <button
                  className="product__like__btn"
                  onClick={() => dispatch(like(el))}
                >
                  {wishlistData.some((item) => item.id === el.id) ? (
                    <FaHeart color="crimson" />
                  ) : (
                    <FaRegHeart />
                  )}
                </button>
                <button
                  className="product__delete__btn"
                  onClick={() => deleteProduct(el.id)}
                  disabled={deleteIsLoading}
                >
                  Delete
                </button>
                <button
                  className="product__edit__btn"
                  onClick={() => editProduct(el.id)}
                  // This should be an edit action, not delete
                >
                  Edit
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ManageProduct;
