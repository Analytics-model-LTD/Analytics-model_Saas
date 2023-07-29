import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const googleSignIn = createAsyncThunk('googleLogin/signIn', async () => {
    try {
        // Load the Google SDK
        await new Promise((resolve) => {
            window.gapi.load('auth2', resolve);
            console.log(resolve);
        });

        const auth2 = await window.gapi.auth2.init({
            client_id: '529194712210-st50mcevrkq97s51kpdf1lhse606tsep.apps.googleusercontent.com' // Replace with your actual Client ID
        });

        const googleUser = await auth2.signIn();

        const profile = googleUser.getBasicProfile();
        console.log(profile);
        const user = {
            id: profile.getId(),
            name: profile.getName(),
            email: profile.getEmail(),
            imageUrl: profile.getImageUrl()
        };
        console.log(user);

        return user;
    } catch (error) {
        throw error;
    }
});

const googleLoginSlice = createSlice({
    name: 'googleLogin',
    initialState: {
        user: null,
        isLoggedIn: false,
        loading: false,
        error: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(googleSignIn.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(googleSignIn.fulfilled, (state, action) => {
                console.log(action.payload);
                state.loading = false;
                state.error = null;
                state.user = action.payload;
                state.isLoggedIn = true;
            })
            .addCase(googleSignIn.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    }
});

export default googleLoginSlice.reducer;
