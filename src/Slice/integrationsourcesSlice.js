import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

let token = localStorage.getItem('TOKEN');

let config = {
    headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'multipart/form-data'
    }
};

export const fetchAllintegretionData = createAsyncThunk('integrationsources/integrationData', async (page) => {
    const response = await axios.get(`https://2m2rc19wr6.execute-api.eu-north-1.amazonaws.com/dev/api/analytics/all/${page}`, config);

    console.log(response.data);
    return response.data;
});

export const newSaveintegretion = createAsyncThunk('integrationsources/saveintegretion', async (payload) => {
    const response = await axios.post(`https://2m2rc19wr6.execute-api.eu-north-1.amazonaws.com/dev/api/analytics/create`, payload, config);

    return response.data;
});

const integrationsourcesSlice = createSlice({
    name: 'integretion',
    initialState: {
        integretionData: [],
        loading: 'idle'
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchAllintegretionData.pending, (state, action) => {
            state.loading = 'pending';
        });
        builder.addCase(fetchAllintegretionData.fulfilled, (state, action) => {
            state.loading = 'idle';
            state.integretionData = action.payload;
        });

        builder.addCase(newSaveintegretion.pending, (state, action) => {
            state.loading = 'pending';
        });
        builder.addCase(newSaveintegretion.fulfilled, (state, action) => {
            state.loading = 'pending';
            state.integretionData = [];
        });
    }
});
export const getAllintegretionData = (state) =>
    state?.integrationsources?.integretionData?.data?.rows?.length ? state?.integrationsources?.integretionData?.data?.rows : [];

export default integrationsourcesSlice.reducer;
