// material-ui
import { useTheme } from '@mui/material/styles';
import { useMediaQuery, Button, Stack } from '@mui/material';

// assets
import Google from 'assets/images/icons/google.svg';
import Twitter from 'assets/images/icons/twitter.svg';
import Facebook from 'assets/images/icons/facebook.svg';
import { GoogleLogin, GoogleOAuthProvider } from '../../../../node_modules/@react-oauth/google/dist/index';
import { googleLogout, useGoogleLogin } from '@react-oauth/google';
import { useDispatch } from 'react-redux';
import { googleSignIn } from 'Slice/googleLoginSlice';
import { useNavigate } from '../../../../node_modules/react-router-dom/dist/index';
import axios from 'axios';

// ==============================|| FIREBASE - SOCIAL BUTTON ||============================== //

const FirebaseSocial = () => {
    const theme = useTheme();
    // const dispatch = useDispatch();
    const matchDownSM = useMediaQuery(theme.breakpoints.down('sm'));
    const navigate = useNavigate();

    const onSuccess = (response) => {
        console.log(response);
        localStorage.setItem('TOKEN', response.access_token);
        if (response) {
            axios
                .get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${response.access_token}`, {
                    headers: {
                        Authorization: `Bearer ${response.access_token}`,
                        Accept: 'application/json'
                    }
                })
                .then((res) => {
                    debugger;
                    console.log(res);
                    if (res) {
                        const gdata = localStorage.getItem('TOKEN');
                        gdata !== null ? navigate('/') : <></>;
                    }

                    localStorage.setItem(
                        'userInfo',
                        JSON.stringify({
                            firstname: res?.data?.family_name,
                            picture: res?.data?.picture,
                            name: res?.data?.name
                        })
                    );

                    // res.status === 200 ? navigate('/') : <></>;
                    // res.data !== null ? navigate('/') : <></>;

                    // logOut();
                    // navigate("/RS_Store");
                });
        }
    };

    const googleHandler = useGoogleLogin({
        onSuccess: (codeResponse) => onSuccess(codeResponse),
        onError: (error) => console.log('Login Failed:', error)
    });

    const twitterHandler = async () => {
        // login || singup
    };

    const facebookHandler = async () => {
        // login || singup
    };

    return (
        <Stack
            direction="row"
            spacing={matchDownSM ? 1 : 2}
            justifyContent={matchDownSM ? 'space-around' : 'space-between'}
            sx={{ '& .MuiButton-startIcon': { mr: matchDownSM ? 0 : 1, ml: matchDownSM ? 0 : -0.5 } }}
        >
            <Button
                variant="outlined"
                color="secondary"
                fullWidth={!matchDownSM}
                startIcon={<img src={Google} alt="Google" />}
                onClick={() => googleHandler()}
            >
                {!matchDownSM && 'Google'}
            </Button>
{/* 
            <Button
                variant="outlined"
                color="secondary"
                fullWidth={!matchDownSM}
                startIcon={<img src={Twitter} alt="Twitter" />}
                onClick={twitterHandler}
            >
                {!matchDownSM && 'Twitter'}
            </Button>
            <Button
                variant="outlined"
                color="secondary"
                fullWidth={!matchDownSM}
                startIcon={<img src={Facebook} alt="Facebook" />}
                onClick={facebookHandler}
            >
                {!matchDownSM && 'Facebook'}
            </Button> */}
        </Stack>
    );
};

export default FirebaseSocial;
