import React from "react";
import { RouterProvider } from "react-router-dom";
import router from "./routes";
// import { useEffect } from "react";
// import Header from "./Components/header";

const App = () => {
  // useEffect(() => {
  //   try {
  //     localStorage.setItem("The page is rend");
  //     console.log("Done");
  //   } catch (error) {
  //     console.log("failed");
  //   }
  // }, []);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
