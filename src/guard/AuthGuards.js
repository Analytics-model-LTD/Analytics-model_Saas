import React, { useEffect } from 'react';
import { useNavigate } from '../../node_modules/react-router-dom/dist/index';

const AuthGuard = ({ component }) => {
    const navigate = useNavigate();

    useEffect(() => {
        const data = localStorage.getItem('TOKEN');
        // const gdata = localStorage.getItem('gtoken');
        if (!data) {
            navigate('/login');
            // } else if (!gdata) {

            //     navigate('/login');
            // }
        }
    }, [component]);

    return <>{component}</>;
};

export default AuthGuard;
