import { lazy } from 'react';

// project import
import Loadable from 'components/Loadable';
import MinimalLayout from 'layout/MinimalLayout';
import Verification from 'pages/verfication/index';

// render - login
const AuthLogin = Loadable(lazy(() => import('pages/authentication/Login')));
const AuthRegister = Loadable(lazy(() => import('pages/authentication/Register')));
const AuthForgetPassword = Loadable(lazy(()=> import('pages/authentication/forgetpassword')));
const AuthResetPassword = Loadable(lazy(()=> import('pages/authentication/ResetPassword')))
// ==============================|| AUTH ROUTING ||============================== //

const LoginRoutes = {
    path: '/',
    element: <MinimalLayout />,
    children: [
        {
            path: 'login',
            element: <AuthLogin />
        },
        // {
        //     path: 'login/:userId/:token',
        //     element: <AuthLogin />
        // },
        {
            path: 'register/verification/:userId/:token',
            element: <Verification />
        },

        {
            path: 'register',
            element: <AuthRegister />
        },
        {
            path: 'forgot-password',
            element: <AuthForgetPassword />
        },
          
        {
            path: 'reset-password',
            element: <AuthResetPassword />
        },
        
    ]
};

export default LoginRoutes;
