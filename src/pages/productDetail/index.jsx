import React, { useState } from "react";
import { Button } from "antd";
import { AiFillHeart } from "react-icons/ai";
import { useLocation, useNavigate } from "react-router-dom";
import { products } from "../../Components/ProductCategory";
import Item from "antd/es/list/Item";
import { ImGift } from "react-icons/im";
import { useDispatch } from "react-redux";
import { addItemToCart } from "../../ReduxTollkit/cartSlice";

export default function ProductdetailPage() {
  let state = useLocation();
  let navigate = useNavigate();
  const dispatch = useDispatch();
  console.log(state, "=================");

  const [isInWishlist, setIsInWishlist] = useState(false);

  const handleWishlistClick = () => {
    setIsInWishlist(!isInWishlist);
  };
  const handleAddToCart = () => {
    dispatch(addItemToCart(state.state));
    navigate("/cart");
  };

  return (
    <>
      <div className="flex">
        <div className="flex w-full h-svh gap-10 m-12">
          <div className="flex w-2/4 h-svh">
            <img src={state.state.image} alt="shirtpic" />
          </div>

          <div className="flex w-2/4 flex-col gap-10 justify-center">
            <h1 className="font-bold text-4xl">Product Description</h1>
            <p className="">
              Slim-fitting style, contrast raglan long sleeve, three-button
              henley placket, light weight & soft fabric for breathable and
              comfortable wearing. And Solid stitched shirts with round neck
              made for durability and a great fit for casual fashion wear and
              diehard baseball fans. The Henley style round neckline includes a
              three-button placket.
            </p>
            <h1 className="font-bold">Rating : 4.9</h1>

            <h2 className="font-bold text-4xl">{state.state.title}</h2>
            <p className="font-bold text-3xl">{state.state.price}</p>

            <div className="flex gap-5">
              <Button type="primary" onClick={handleAddToCart}>
                AddToCart
              </Button>
              <Button type="primary">Buy Now</Button>
              <button onClick={handleWishlistClick}>
                <AiFillHeart
                  className={isInWishlist ? "active" : ""}
                  color={isInWishlist ? "red" : "gray"}
                />
              </button>
            </div>
          </div>
        </div>
        ))
      </div>
    </>
  );
}
