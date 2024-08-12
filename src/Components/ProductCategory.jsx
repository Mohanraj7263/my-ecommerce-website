import React from "react";
import Product from "./ProductCard";
import { shirt1, shirt2, shirtpic, shirt5 } from "../assets";
// import { useNavigate } from "react-router-dom";
// import { AiFillHeart } from "react-icons/ai";

export const products = [
  {
    id: 1,
    name: "Allen Solly",
    price: 1500,
    image: shirtpic,
  },
  {
    id: 2,
    name: "Van Heusen",
    price: 2000,
    image: shirt1,
  },
  {
    id: 3,
    name: "Sumarana satta ",
    price: 1800,
    image: shirt2,
  },
  { id: 4, name: "Normal Baniyan", price: 500, image: shirt5 },
];

export const TShirt = [
  {
    id: 1,
    name: "Allen Solly",
    price: 1500,
    image: shirtpic,
  },
  {
    id: 2,
    name: "Van Heusen",
    price: 2000,
    image: shirt1,
  },
  {
    id: 3,
    name: "Sumarana satta ",
    price: 1800,
    image: shirt2,
  },
  { id: 4, name: "Normal Baniyan", price: 500, image: shirt5 },
];
export const Electronics = [
  {
    id: 1,
    name: "Allen Solly",
    price: 1500,
    image: shirtpic,
  },
  {
    id: 2,
    name: "Van Heusen",
    price: 2000,
    image: shirt1,
  },
  {
    id: 3,
    name: "Sumarana satta ",
    price: 1800,
    image: shirt2,
  },
  { id: 4, name: "Normal Baniyan", price: 500, image: shirt5 },
];
export const jewelery = [
  {
    id: 1,
    name: "Allen Solly",
    price: 1500,
    image: shirtpic,
  },
  {
    id: 2,
    name: "Van Heusen",
    price: 2000,
    image: shirt1,
  },
  {
    id: 3,
    name: "Sumarana satta ",
    price: 1800,
    image: shirt2,
  },
  { id: 4, name: "Normal Baniyan", price: 500, image: shirt5 },
];

const ProductCategory = () => {
  // console.log({ products });

  return (
    <>
      <div className="flex flex-col w-full h-auto gap-10">
        <div className=" flex flex-col gap-5">
          <h2 className="text-3xl font-bold ml-14 ">Shirts</h2>
          <div className="  flex gap-4">
            {products.map((product) => (
              <Product key={product.id} product={product} />
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-5">
          <h2 className="text-3xl font-bold ml-14 ">T shirts</h2>
          <div className="flex gap-4">
            {TShirt.map((Shirt) => (
              <Product key={Shirt.id} product={Shirt} />
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <h2 className="text-3xl font-bold ml-14 ">Electronics</h2>
          <div className="  flex gap-4">
            {Electronics.map((elec) => (
              <Product key={elec.id} product={elec} />
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <h2 className="text-3xl font-bold  ml-14">jewelery</h2>
          <div className="  flex  gap-4">
            {jewelery.map((jewel) => (
              <Product key={jewel.id} product={jewel} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCategory;
