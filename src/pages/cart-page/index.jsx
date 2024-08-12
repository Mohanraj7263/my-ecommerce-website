import React, { useState, useEffect } from "react";
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";
import { TiMinus } from "react-icons/ti";
import { useSelector } from "react-redux";
// import { useLocation } from "react-router-dom";

const Cart = () => {
  const cart = useSelector((state) => state?.cart.items);
  // const someData = location.state || {};
  console.log("Location State:", cart);

  const [count, setCount] = useState(0);

  // const cartItems = useSelector((state) => state.cart.items);
  // console.log("Cart Items:", cartItems);

  return (
    <div className="flex p-8 w-full flex-col">
      {/* <h1 className="text-2xl font-bold">Shopping Cart</h1> */}
      {cart?.map((state, index) => (
        <div key={index} className=" flex w-full border p-4 ">
          <div className="flex w-full justify-between ">
            <div className="flex flex-col gap-5">
              <h1 className="text-2xl font-bold">product</h1>
              <img src={state.image} height={100} width={100} alt="shirtpic" />
            </div>
            <div className="flex flex-col gap-5">
              <h1 className="text-2xl font-bold">Product Name</h1>
              <h2 className="text-xl ">{state.title}</h2>
            </div>
            <div className="flex flex-col gap-5">
              <h1 className="text-2xl font-bold">Total</h1>
              <p className="text-lime-500 items-center">
                Price: {state?.price}
              </p>
            </div>
            <div className="flex items-center border border-gray-300 p-3 gap-4 rounded">
              <FaPlus
                onClick={() => setCount((prevState) => prevState + 1)}
                className="cursor-pointer"
              />
              {/* <div className="mx-2 items-center  h-10"> */}
              {/* <div className="flex flex-col gap-5"> */}
              {/* <h1 className="text-2xl font-bold">No Of Product</h1> */}
              {count}
              {/* </div> */}
              {/* </div> */}
              <TiMinus
                onClick={() =>
                  setCount((prevState) => (prevState > 1 ? prevState - 1 : 1))
                }
                className="cursor-pointer"
              />
            </div>
            <div className="flex flex-col gap-8 items-center">
              <FaEdit className="text-gray-500" />
              <MdDelete className="text-red-500" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cart;
