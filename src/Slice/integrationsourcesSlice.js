import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const getToken = async () => {
    return localStorage.getItem('TOKEN');
};

const queryApi = axios.create({
    baseURL: 'https://kh0fjnpaqc.execute-api.eu-north-1.amazonaws.com/dev',
    timeout: 10000,
    headers: {'Authorization': `Bearer ${getToken()}`}
});

export const fetchAllintegretionData = createAsyncThunk('integrationsources/integrationData', async (page) => {
    const token = await getToken();
    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'multipart/form-data'
        }
    };

    const response = await axios.get(`/analytics/all/${page}`, config);

    console.log(response.data);
    return response.data;
});

export const getProjects = createAsyncThunk('integrationsources/projects', async () => {
    console.log('getProjects');
    const token = await getToken();
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    };

    const response = await queryApi.get(`/projects`, config);

    return response.data;
});

export const getDatasets = createAsyncThunk('integrationsources/datasets', async (projectId) => {
    console.log('getDatasets');
    const token = await getToken();
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    };

    const response = await queryApi.get(`/projects/${projectId}/datasets`, config);

    return response.data;
});

export const getTables = createAsyncThunk('integrationsources/tables', async ({projectId, datasetId}) => {
    console.log('getTables', projectId, datasetId);
    const token = await getToken();
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    };

    const response = await queryApi.get(`/projects/${projectId}/datasets/${datasetId}/tables`, config);

    return response.data;
});

export const newSaveintegretion = createAsyncThunk('integrationsources/saveintegretion', async (payload) => {
    const token = await getToken();
    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json'
        }
    };
    const response = await axios.post(`/analytics/create`, payload, config);

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
