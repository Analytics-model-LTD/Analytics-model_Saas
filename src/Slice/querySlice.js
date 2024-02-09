import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const getToken = () => {
  return localStorage.getItem("TOKEN");
};

const queryApi = axios.create({
   baseURL: "https://kh0fjnpaqc.execute-api.eu-north-1.amazonaws.com/dev",
  //baseURL: "http://localhost:3000/dev",
  timeout: 100000,
  headers: { Authorization: `Bearer ${getToken()}` },
});

export const createIntegrationQuery = createAsyncThunk(
  "query/createIntegrationQuery",
  async ({ integrationId, instructions }) => {
    console.log("insteuction",instructions);
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

export const tuneIntegrationQuery = createAsyncThunk(
  "query/tuneIntegrationQuery",
  async ({ integrationId, instructions, query }) => {
    const token = await getToken();
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    };
    const response = await queryApi.put(
      `/integrations/${integrationId}/query`,
      { instructions, query },
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
        instructions: action.meta.arg.instructions,
        query: action.payload,
      });
    });
    builder.addCase(createIntegrationQuery.rejected, (state, action) => {
      console.log("rejected", { state, action });
      state.loading = "rejected";
      state.history.push({
        type: "TEXT",
        instructions: "FAILED",
      });
    });
    builder.addCase(tuneIntegrationQuery.pending, (state, action) => {
      console.log("pending", { state, action });
      state.history[action.meta.arg.index] = {
        ...state.history[action.meta.arg.index],
        type: "LOADING",
      };
    });
    builder.addCase(tuneIntegrationQuery.fulfilled, (state, action) => {
      console.log("fulfilled", { state, action });
      state.history[action.meta.arg.index] = {
        type: "INSIGHT",
        instructions: action.meta.arg.instructions,
        query: action.payload,
      };
    });
    builder.addCase(tuneIntegrationQuery.rejected, (state, action) => {
      console.log("rejected", { state, action });
      state.history[action.meta.arg.index] = {
        ...state.history[action.meta.arg.index],
        type: "INSIGHT",
      };
    });
  },
});

export default querySlice.reducer;
