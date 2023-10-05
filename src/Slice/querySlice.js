import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const getToken = () => {
  return localStorage.getItem("TOKEN");
};

const queryApi = axios.create({
  baseURL: "https://kh0fjnpaqc.execute-api.eu-north-1.amazonaws.com/dev",
  timeout: 10000,
  headers: { Authorization: `Bearer ${getToken()}` },
});

export const createIntegrationQuery = createAsyncThunk(
  "query/createIntegrationQuery",
  async ({ integrationId, instructions }) => {
    const token = await getToken();
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    };
    const response = await queryApi.post(
      `/integrations/${integrationId}/query`,
      { instructions },
      config
    );

    return response.data;
  }
);

const querySlice = createSlice({
  name: "query",
  initialState: {
    history: [],
    loading: "idle",
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(createIntegrationQuery.pending, (state, action) => {
      console.log("pending", { state, action });
      state.history.push({
        type: "TEXT",
        instructions: action.meta.arg.instructions,
      });
      state.loading = "pending";
    });
    builder.addCase(createIntegrationQuery.fulfilled, (state, action) => {
      console.log("fulfilled", { state, action });
      state.loading = "fulfilled";
      state.history.push({
        type: "INSIGHT",
        query: action.payload,
      });
    });
  },
});

export default querySlice.reducer;
