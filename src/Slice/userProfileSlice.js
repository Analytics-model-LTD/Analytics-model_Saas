import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const getToken = async () => {
    return localStorage.getItem('TOKEN');
};

// let token = localStorage.getItem('TOKEN');

// let config = {
//     headers: {
//         Authorization: `Bearer ${token}`,
//         'Content-Type': 'multipart/form-data'
//     }
// };

export const getuserDetails = createAsyncThunk('userProfile/userDeatils', async () => {
    const token = await getToken();
    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'multipart/form-data'
        }
    };
    const response = await axios.get(`https://2m2rc19wr6.execute-api.eu-north-1.amazonaws.com/dev/api/user/detail`, config);

    return response.data;
});

export const updateUserProfile = createAsyncThunk('userProfile/updateProfile', async (payload) => {
    const token = await getToken();
    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'multipart/form-data'
        }
    };
    try {
        const response = await axios.post(`https://2m2rc19wr6.execute-api.eu-north-1.amazonaws.com/dev/api/user/update`, payload, config);
        return response.data;
    } catch (error) {
        console.error('Error updating user profile:', error); // Log any errors that occur during the update
        throw error;
    }
});
const userProfileSlice = createSlice({
    name: 'userProfile',
    initialState: {
        profileData: [],
        loading: 'idle',
        userData: ''
    },
    reducers: {
        updatedprofile: (state, action) => {
            state.userData = action.payload;
        }
    },
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

export const getAlluserDetails = (state) => {
    return state.userProfile?.profileData?.data;
};
export const { updatedprofile } = userProfileSlice.actions;

export default userProfileSlice.reducer;
