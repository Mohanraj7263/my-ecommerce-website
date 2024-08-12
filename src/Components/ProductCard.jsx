import React from "react";
import { useNavigate } from "react-router-dom";
import Cart from "../pages/cart-page";

const ProductCard = ({ product }) => {
  const navigate = useNavigate();

  return (
    <>
      <div className="flex flex-col m-8 gap-6 items-center ">
        <div
          className="flex  h-40"
          onClick={() => navigate("/productDetails", { state: product })}
        >
          <img src={product.image} alt="shirtpic" />
        </div>
        <div className="flex w-52 flex-col gap-6">
          <div className="font-bold ">{product.title}</div>
          <p className="text-green-500 ">{product.price}</p>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
