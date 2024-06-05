import React from "react";
import { useGetDetailQuery } from "../../context/api/productApi";
import { Link, useParams } from "react-router-dom";
import { FaHeart, FaRegHeart } from "react-icons/fa";

import "./singlePage.scss";
import { useDispatch, useSelector } from "react-redux";
import { like } from "../../context/slice/wishlistSlice";

const ProductDetail = () => {
  const { id } = useParams();
  const { data, isLoading, isError } = useGetDetailQuery(id);
  const dispatch = useDispatch();

  const wishlistData = useSelector((state) => state.wishlist.value);

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error loading product details</div>;

  return (
    <div className="productDetail container">
      <div className="productDetail__img">
        <img src={data?.url} alt="" />
      </div>
      <div className="productDetail__info">
        <h3>Title: {data?.title}</h3>
        <p>Price: {data?.price}</p>
        <p>Category: {data?.category}</p>
        <div className="productDetail__btn">
          <button
            className="productDetail__like__btn"
            onClick={() => dispatch(like(data))}
          >
            {wishlistData.some((item) => item.id === data?.id) ? (
              <FaHeart color="crimson" />
            ) : (
              <FaRegHeart />
            )}
          </button>
          <button className="productDetail__back__btn">
            <Link to="/">Back to home</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
