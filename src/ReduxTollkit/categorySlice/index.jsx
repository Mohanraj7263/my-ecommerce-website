import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
export const fetchUserData = createAsyncThunk(
  "user/fetchUserData",
  async () => {
    const response = await fetch(
      "https://fakestoreapi.com/products/categories"
    );
    const jsonData = await response.json();
    console.log("jsonData", jsonData);
    return jsonData;
  }
);
export const categorySlice = createSlice({
  name: "category",
  initialState: { data: [], loading: false, error: null, list: [] },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserData.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchUserData.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchUserData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const {} = categorySlice.actions;

export default categorySlice.reducer;
