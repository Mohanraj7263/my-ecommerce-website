// src/features/category/categorySlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  item: [],
  status: "idle",
  error: null,
};

export const categoryItem = createAsyncThunk(
  "category/categoryItem",
  async (categoryName) => {
    try {
      const response = await axios.get(
        `https://fakestoreapi.com/products/category/${categoryName}`
      );
      console.log("res", response);
      return response.data;
    } catch (error) {
      throw Error(error.response.data);
    }
  }
);

const ProductSlice = createSlice({
  name: "ProductcategoryName",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(categoryItem.pending, (state) => {
        state.status = "loading";
      })
      .addCase(categoryItem.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.item = action.payload;
      })
      .addCase(categoryItem.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});
export const {} = ProductSlice.actions;
export default ProductSlice.reducer;
