import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const getToken = () => {
  return localStorage.getItem("TOKEN");
};

const insightsApi = axios.create({
  baseURL:
    "https://2m2rc19wr6.execute-api.eu-north-1.amazonaws.com/dev/api/insights",
  timeout: 10000,
  headers: { Authorization: `Bearer ${getToken()}` },
});

export const createInsight = createAsyncThunk(
  "insight/createInsight",
  async ({
    integrationId,
    query,
    instructions,
    insightType,
    data,
    chartConfig,
  }) => {
    console.log("createInsight");
    const token = await getToken();
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    };
    const response = await insightsApi.post(
      "/",
      { integrationId, query, instructions, insightType, data, chartConfig },
      config
    );

    console.log("response", response);

    return response.data;
  }
);

const insightSlice = createSlice({
  name: "insight",
  initialState: {
    loading: "idle",
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(createInsight.pending, (state, action) => {
      console.log("pending", { state, action });
      state.loading = "pending";
    });
    builder.addCase(createInsight.fulfilled, (state, action) => {
      console.log("fulfilled", { state, action });
      state.loading = "fulfilled";
    });
    builder.addCase(createInsight.rejected, (state, action) => {
      console.log("rejected", { state, action });
      state.loading = "rejected";
    });
  },
});

export default insightSlice.reducer;
