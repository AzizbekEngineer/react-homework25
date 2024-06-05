import React from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { like } from "../../context/slice/wishlistSlice";
import "./ProductWrapper.css";

const ProductItem = ({ data }) => {
  const dispatch = useDispatch();

  return (
    <div className="product__wrapper container">
      {data?.map((el) => (
        <div className="product__card" key={el?.id}>
          <div className="product__img">
            <img src={el?.url} alt="" />
          </div>
          <div className="product__info">
            <h3>Price:{el?.price}$</h3>
            <p>Category:{el?.category}</p>
            <div className="product__buttons">
              <button onClick={() => dispatch(like(el))}>
                {data.some((item) => item.id === el.id) ? (
                  <FaHeart color="crimson" />
                ) : (
                  <FaRegHeart />
                )}
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductItem;
