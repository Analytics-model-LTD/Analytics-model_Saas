// third-party
import { configureStore } from '@reduxjs/toolkit';
import googleLoginReducer from '../Slice/googleLoginSlice';

// project import
import reducers from './reducers';

// ==============================|| REDUX TOOLKIT - MAIN STORE ||============================== //

const store = configureStore({
    reducer: {
        menu: reducers,
        googleLogin: googleLoginReducer
    }
});

const { dispatch } = store;

export { store, dispatch };
