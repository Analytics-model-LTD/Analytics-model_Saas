// third-party
import { configureStore } from '@reduxjs/toolkit';
import googleLoginReducer from '../Slice/googleLoginSlice';

// project import
import reducers from './reducers';
import userProfileReducer from 'Slice/userProfileSlice';
import integrationsourcesReducer from 'Slice/integrationsourcesSlice';
import feedReducer from 'Slice/feedSlice';

// ==============================|| REDUX TOOLKIT - MAIN STORE ||============================== //

const store = configureStore({
    reducer: {
        menu: reducers,
        googleLogin: googleLoginReducer,
        userProfile: userProfileReducer,
        integrationsources: integrationsourcesReducer,
        feed: feedReducer
    }
});

const { dispatch } = store;

export { store, dispatch };
