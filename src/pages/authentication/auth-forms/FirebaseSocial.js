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

// ==============================|| FIREBASE - SOCIAL BUTTON ||============================== //

const FirebaseSocial = () => {
    const theme = useTheme();
    const dispatch = useDispatch();
    const matchDownSM = useMediaQuery(theme.breakpoints.down('sm'));

    const googleHandler = () => {
        dispatch(googleSignIn());
    };

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
            </Button>
        </Stack>
    );
};

export default FirebaseSocial;