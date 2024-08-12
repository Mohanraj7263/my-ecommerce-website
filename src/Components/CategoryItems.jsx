// src/components/CategoryItems.js
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useParams } from "react-router-dom";
import { categoryItem } from "../ReduxTollkit/productSlice";
import ProductCard from "./ProductCard";

const CategoryItems = () => {
  let { category } = useParams();
  let data = useLocation();
  console.log("data", data);

  console.log("cat", category);
  const dispatch = useDispatch();
  const { item, status, error } = useSelector(
    (state) => state.ProductcategoryName
  );

  useEffect(() => {
    dispatch(categoryItem(category));
  }, [category, dispatch]);

  let content;

  if (status === "loading") {
    content = <p>Loading...</p>;
  } else if (status === "succeeded") {
    content = item.map((res) => (
      <>
        <ProductCard product={res} />
        {/* <div key={res.id} className="flex m-10 w-72">
          <div className="flex flex-col">
            <div className="flex size-56">
              <img src={res.image} alt="image" />
            </div>
            <div className="flex flex-col mt-5 gap-4">
              <h2 className="font-bold">{res.title}</h2>
              <p className="text-green-600 font-bold">${res.price}</p>
            </div>
          </div>
        </div> */}
      </>
    ));
  } else if (status === "failed") {
    content = <p>{error}</p>;
  }

  return (
    <>
      <div className="flex w-full h-lvh">
        <div className="flex w-full  flex-wrap">{content}</div>
      </div>
    </>
  );
};

export default CategoryItems;
