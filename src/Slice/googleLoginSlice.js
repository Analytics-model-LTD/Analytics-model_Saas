import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
export const googleSignIn = createAsyncThunk('googleLogin/signIn', async () => {t 
    try {
        // Load the Google SDK
        await new Promise((resolve) => {
            window.gapi.load('auth2', resolve);
        });

        const auth2 = await window.gapi.auth2.init({
          //  client_id: '529194712210-st50mcevrkq97s51kpdf1lhse606tsep.apps.googleusercontent.com' // Replace with your actual Client ID
            client_id: '442914944524-87tme4kji7i7l29tu8q7r2aqpomn3c1l.apps.googleusercontent.com' // Replace with your actual Client ID
        });
        //commit

        const googleUser = await auth2.signIn();

        const profile = googleUser.getBasicProfile();
        const user = {
            id: profile.getId(),
            name: profile.getName(),
            email: profile.getEmail(),
            imageUrl: profile.getImageUrl()
        };

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
