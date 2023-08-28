import React from 'react';
import { Box, CardContent, Card, CardActions } from '@mui/material';
import { Button, Typography, MainCard, Grid, Stack, AnimateButton } from '../../../node_modules/@mui/material/index';
import { useNavigate, useParams } from '../../../node_modules/react-router-dom/dist/index';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Verification() {
    const navigate = useNavigate();
    const { userId, token } = useParams();

    const Verifications = () => {
        axios
            .get(`https://2m2rc19wr6.execute-api.eu-north-1.amazonaws.com/dev/api/user/verify/${userId}/${token}`)
            .then((res) => {

                res.data.message = 'email verified sucessfully' ? (
                    toast.success('User verified successfully.', {
                        position: 'top-center'
                    })
                ) : (
                    <></>
                );

                setTimeout(function () {
                    navigate('/login');
                }, 2000);
            })
            .catch((er) => {
                er.response.data === 'Invalid link' ? (
                    toast.error(' allready verify..invalid link.', {
                        position: 'top-center'
                    })
                ) : (
                    <></>
                );
            });
    };

    return (
        <div>
            <Card sx={{ textAlign: 'center', alignItems: 'center', margin: '5%' }}>
                <CardContent
                    sx={{
                        display: 'flex',
                        textAlign: 'center',
                        alignItems: 'center',
                        flexDirection: 'column',
                        p: (theme) => `${theme.spacing(9.75, 5, 9.25)} !important`
                    }}
                >
                    <Typography variant="h4" sx={{ mb: 6 }}>
                        User Verification
                    </Typography>
                    <Button variant="contained" sx={{ p: (theme) => theme.spacing(1.75, 5.5) }} onClick={Verifications}>
                        Verify Email and go to Login Page
                    </Button>
                    <ToastContainer autoClose={1000} />
                </CardContent>
            </Card>
        </div>
    );
}

export default Verification;
