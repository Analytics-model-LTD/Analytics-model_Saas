// third-party
import { configureStore } from '@reduxjs/toolkit';
import googleLoginReducer from '../Slice/googleLoginSlice';

// project import
import reducers from './reducers';
import userProfileReducer from 'Slice/userProfileSlice';
import integrationsourcesReducer from 'Slice/integrationsourcesSlice';

// ==============================|| REDUX TOOLKIT - MAIN STORE ||============================== //

const store = configureStore({
    reducer: {
        menu: reducers,
        googleLogin: googleLoginReducer,
        userProfile: userProfileReducer,
        integrationsources: integrationsourcesReducer
    }
});

const { dispatch } = store;

export { store, dispatch };
