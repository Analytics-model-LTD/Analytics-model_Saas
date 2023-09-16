import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

// scroll bar
import 'simplebar/src/simplebar.css';

// third-party
import { Provider as ReduxProvider } from 'react-redux';

// apex-chart
import 'assets/third-party/apex-chart.css';

// project import
import App from './App';
import { store } from 'store';
import reportWebVitals from './reportWebVitals';
import { GoogleOAuthProvider } from '@react-oauth/google';
import axios from 'axios'
// ==============================|| MAIN - REACT DOM RENDER  ||============================== //
axios.defaults.baseURL = "https://2m2rc19wr6.execute-api.eu-north-1.amazonaws.com/dev/api"
const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(
    <GoogleOAuthProvider clientId="1707393391-8qee74bq6137hdjb3qb0ntq9megb4cqf.apps.googleusercontent.com">
        <ReduxProvider store={store}>
            <BrowserRouter basename="/">
                <App />
            </BrowserRouter>
        </ReduxProvider>
    </GoogleOAuthProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
