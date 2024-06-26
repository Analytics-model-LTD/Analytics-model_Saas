import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const getToken = () => {
  return localStorage.getItem("TOKEN");
};

const queryApi = axios.create({
  //  baseURL: "https://kh0fjnpaqc.execute-api.eu-north-1.amazonaws.com/dev",
  baseURL: "https://2m2rc19wr6.execute-api.eu-north-1.amazonaws.com/dev",
 // baseURL: "http://localhost:3000/dev",
  timeout: 10000,
  headers: { Authorization: `Bearer ${getToken()}` },
});

export const fetchAllFeedData = createAsyncThunk(
  "feed/feedData",
  async (page) => {
    // const response = await queryApi.get(`/feed/${page}`, config);
    const response = await queryApi.get(`/api/feed/all/0/0`);

    console.log(response.data);
    return response.data;
  }
);

const feedSlice = createSlice({
  name: "feed",
  initialState: {
    feed: [],
    loading: "idle",
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchAllFeedData.pending, (state, action) => {
      state.loading = "pending";
    });
    builder.addCase(fetchAllFeedData.fulfilled, (state, action) => {
      state.loading = "idle";
      state.feed = action.payload;
    });
  },
});
export const getAllFeedData = (state) =>
  state?.feed?.rows?.length ? state?.feed?.rows : [];

export default feedSlice.reducer;
