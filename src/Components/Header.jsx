import React from "react";
import { useEffect } from "react";
// import Wishlist from "../pages/wishlist-page";
// import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
// import { fetchUserData } from "./counterSlice";
import { fetchUserData } from "../ReduxTollkit/categorySlice";
// import Electronics from "../pages/electronics-page";

const Header = () => {
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.category);

  console.log("something", data);
  useEffect(() => {
    dispatch(fetchUserData());
  }, []);
  // if (loading) {
  //   return <div></div>;
  // }
  // if (error) {
  //   return <div>Error: {error}</div>;
  // }

  return (
    <header className="bg-gray-800 text-white py-4 ">
      <div className="flex w-full  h-14  items-center  justify-end">
        <nav className="flex w-3/5 gap-20 ml-24  ">
          <NavLink to={"/"}>Home</NavLink>

          {/* <NavLink to={"/productDetails"}>Products</NavLink> */}
          <NavLink to={"/cart"}>Cart</NavLink>

          <NavLink to={"/login"}>Login</NavLink>

          <NavLink to={"/signup"}>Signup</NavLink>

          <NavLink to={"/checkout"}>Checkout</NavLink>

          <NavLink to={"/wishlist"}>Wishlist</NavLink>
        </nav>
      </div>
      <div className="flex w-auto  h-10">
        <div className="flex  w-full gap-10 justify-center ">
          {data.map((category, index) => (
            <NavLink
              to={`/category/${category}`}
              // onClick={() =>
              //   setCount(() => ())
              // }
              key={index}
            >
              {category}
            </NavLink>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;
