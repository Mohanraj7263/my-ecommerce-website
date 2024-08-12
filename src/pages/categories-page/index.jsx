// src/pages/CategoriesPage.js
import React from "react";
// import ProductList from "../../Components/ProductList";
import CategoryItems from "../../Components/CategoryItems";

const CategoriesPage = () => {
  const categoryName = "jewelery";

  return (
    <div>
      <CategoryItems category={categoryName} />
    </div>
  );
};

export default CategoriesPage;
