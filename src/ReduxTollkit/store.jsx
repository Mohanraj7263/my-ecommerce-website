import { configureStore } from "@reduxjs/toolkit";
import categoryReducer from "./categorySlice";
import productsReducer from "./productSlice";
import cartReducer from "./cartSlice";
const store = configureStore({
  reducer: {
    category: categoryReducer,
    ProductcategoryName: productsReducer,
    cart: cartReducer,
  },
});

export default store;
