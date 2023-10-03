import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  fetchSmartPhones,
  fetchLaptops,
  fetchSmartWatch,
  fetchHeadphones,
} from "./FilterCategory";

const initialState = {
  filterCategory: {
    all: [],
    SmartPhones: [],
    Laptops: [],
    Headphones: [],
    SmartWatch: [],
  },
};

export const fetchFilterCategoryAsync = createAsyncThunk(
  "filterCategory/fetchSmartPhones",
  async () => {
    const response = await fetchSmartPhones();
    return response.data;
  }
);

// SmartPhones
export const fetchSmartPhonesAsync = createAsyncThunk(
  "SmartPhones/fetchSmartPhones",
  async () => {
    const response = await fetchSmartPhones();
    return response.data;
  }
);

// Laptops
export const fetchLaptopsAsync = createAsyncThunk(
  "Laptops/fetchLaptops",
  async () => {
    const response = await fetchLaptops();
    return response.data;
  }
);

// Laptops
export const fetchHeadphonesAsync = createAsyncThunk(
  "Headphones/fetchHeadphones",
  async () => {
    const response = await fetchHeadphones();
    return response.data;
  }
);

// SmartWatch
export const fetchSmartWatchAsync = createAsyncThunk(
  "SmartWatch/fetchSmartWatch",
  async () => {
    const response = await fetchSmartWatch();
    return response.data;
  }
);

const filterCategory = createSlice({
  name: "filterCategory",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchFilterCategoryAsync.fulfilled, (state, action) => {
        state.filterCategory.all = action.payload;
      })
      .addCase(fetchSmartPhonesAsync.fulfilled, (state, action) => {
        state.filterCategory.SmartPhones = action.payload.filter(
          (item) => item.category === "smartphones"
        );
      })
      .addCase(fetchLaptopsAsync.fulfilled, (state, action) => {
        state.filterCategory.Laptops = action.payload.filter(
          (item) => item.category === "laptops"
        );
      })
      .addCase(fetchHeadphonesAsync.fulfilled, (state, action) => {
        state.filterCategory.Headphones = action.payload.filter(
          (item) => item.category === "headphones"
        );
      })
      .addCase(fetchSmartWatchAsync.fulfilled, (state, action) => {
        state.filterCategory.SmartWatch = action.payload.filter(
          (item) => item.category === "smartwatch"
        );
      });
  },
});

export default filterCategory.reducer;
