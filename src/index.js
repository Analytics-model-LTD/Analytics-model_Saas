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
//axios.defaults.baseURL = "http://localhost:8080/api"
const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(
    <GoogleOAuthProvider clientId="442914944524-87tme4kji7i7l29tu8q7r2aqpomn3c1l.apps.googleusercontent.com">
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
