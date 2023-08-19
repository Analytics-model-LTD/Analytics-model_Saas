import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

let token = localStorage.getItem('TOKEN');

let config = {
    headers: { Authorization: `Bearer ${token}` }
};

export const getuserDetails = createAsyncThunk('userProfile/userDeatils', async () => {
    const response = await axios.get(`https://2m2rc19wr6.execute-api.eu-north-1.amazonaws.com/dev/api/user/detail`, config);
    return response.data;
});

export const updateUserProfile = createAsyncThunk('userProfile/updateProfile', async (payload) => {
    const response = await axios.post(`https://2m2rc19wr6.execute-api.eu-north-1.amazonaws.com/dev/api/user/update`, payload, config);

    return response.data;
});
const userProfileSlice = createSlice({
    name: 'userProfile',
    initialState: {
        profileData: [],
        loading: 'idle'
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getuserDetails.pending, (state, action) => {
            state.loading = 'pending';
        });
        builder.addCase(getuserDetails.fulfilled, (state, action) => {
            state.loading = 'idle';
            state.profileData = action.payload;
        });
        builder.addCase(updateUserProfile.pending, (state, action) => {
            state.loading = 'pending';
        });

        builder.addCase(updateUserProfile.fulfilled, (state, action) => {
            state.loading = 'idle';
            state.profileData = [];
        });
    }
});

export default userProfileSlice.reducer;
