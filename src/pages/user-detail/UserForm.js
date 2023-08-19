import React, { useEffect, useRef } from 'react';
import { useState } from 'react';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

import { styled } from '@mui/material/styles';

import TextField from '@mui/material/TextField';

import CardContent from '@mui/material/CardContent';

import Button from '@mui/material/Button';
import * as Yup from 'yup';
import { Formik } from 'formik';

import { useDispatch, useSelector } from 'react-redux';
import { getuserDetails, updateUserProfile } from 'Slice/userProfileSlice';

const ImgStyled = styled('img')(({ theme }) => ({
    width: 120,
    height: 120,
    marginRight: theme.spacing(6.25),
    borderRadius: theme.shape.borderRadius
}));

const ButtonStyled = styled(Button)(({ theme }) => ({
    [theme.breakpoints.down('sm')]: {
        width: '100%',
        textAlign: 'center'
    }
}));

const ResetButtonStyled = styled(Button)(({ theme }) => ({
    marginLeft: theme.spacing(4.5),
    [theme.breakpoints.down('sm')]: {
        width: '100%',
        marginLeft: 0,
        textAlign: 'center',
        marginTop: theme.spacing(4)
    }
}));

const User = () => {
    const formikRef = useRef();
    const [openAlert, setOpenAlert] = useState(true);
    const [imgSrc, setImgSrc] = useState('/images/avatars/1.png');
    const dispatch = useDispatch();

    const onChange = (file) => {
        const reader = new FileReader();
        const { files } = file.target;
        if (files && files.length !== 0) {
            reader.onload = () => setImgSrc(reader.result);
            reader.readAsDataURL(files[0]);
        }
    };
    const [initValues, setInitValues] = useState({
        firstname: '',
        lastname: '',
        email: '',
        phone: '',
        matrix_of_intrest: '',
        querylimit: ''
    });

    let data = null;

    useEffect(() => {
        setInitValues(null);
        if (data === null) {
            dispatch(getuserDetails())
                .unwrap()
                .then((res) => {
                    console.log(res);
                    data = res.data;
                    formikRef.current.setValues(data);
                })
                .catch((error) => console.log(error));
        }
    }, []);

    const handlesubmit = (val) => {
        debugger;
        dispatch(updateUserProfile(val))
            .unwrap()
            .then((res) => {
                debugger;
                console.log(res);
            });
    };

    return (
        <CardContent>
            <Formik
                innerRef={formikRef}
                initialValues={initValues}
                // validationSchema={Yup.object().shape({
                //     userId: Yup.string().max(255).required('Employee Name required'),
                //     category: Yup.string().max(255).required('Category is required')
                //     // assetId: Yup.string().required('Category AssetID is required'),
                //     // Asset: Yup.string().max(255).required(' Asset is required')
                // })}
                onSubmit={async (values, { setErrors, setStatus, setSubmitting }) => {
                    try {
                        handlesubmit(values);
                        console.log(values);
                        setStatus({ success: false });
                        setSubmitting(false);
                    } catch (err) {
                        setStatus({ success: false });
                        setErrors({ submit: err.message });
                        setSubmitting(false);
                    }
                }}
            >
                {({ errors, handleBlur, handleChange, handleSubmit, isSubmitting, touched, values }) => (
                    <form noValidate onSubmit={handleSubmit}>
                        <Grid container spacing={7}>
                            <Grid item xs={12} sx={{ mt: 4.8, mb: 3 }}>
                                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                    <ImgStyled src={imgSrc} alt="Profile Pic" />
                                    <Box>
                                        <ButtonStyled component="label" variant="contained" htmlFor="account-settings-upload-image">
                                            Upload New Photo
                                            <input
                                                hidden
                                                type="file"
                                                onChange={onChange}
                                                accept="image/png, image/jpeg"
                                                id="account-settings-upload-image"
                                            />
                                        </ButtonStyled>
                                        <ResetButtonStyled
                                            color="error"
                                            variant="outlined"
                                            onClick={() => setImgSrc('/images/avatars/1.png')}
                                        >
                                            Reset
                                        </ResetButtonStyled>
                                    </Box>
                                </Box>
                            </Grid>

                            <Grid item xs={12} sm={6}>
                                <TextField
                                    fullWidth
                                    label="Firstname"
                                    placeholder="Firstname"
                                    // defaultValue="patel"
                                    onChange={handleChange}
                                    value={values.firstname}
                                    name="firstname"
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    fullWidth
                                    label="Lastname"
                                    placeholder="Lastname"
                                    // defaultValue="milan"
                                    onChange={handleChange}
                                    value={values.lastname}
                                    name="lastname"
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    fullWidth
                                    type="email"
                                    label="Email"
                                    placeholder="Enter your Email"
                                    // defaultValue="milanpatel@example.com"
                                    onChange={handleChange}
                                    value={values.email}
                                    name="email"
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    fullWidth
                                    type="phone"
                                    label="phone"
                                    placeholder="Enter your phone number"
                                    // defaultValue="1234567890"
                                    onChange={handleChange}
                                    value={values.phone}
                                    name="phone"
                                />
                            </Grid>

                            <Grid item xs={12} sm={6}>
                                <TextField
                                    fullWidth
                                    label="matrix_of_intrest"
                                    placeholder="matrix_of_intrest"
                                    // defaultValue="ABC Pvt. Ltd."
                                    onChange={handleChange}
                                    value={values.matrix_of_intrest}
                                    name="matrix_of_intrest"
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    fullWidth
                                    label="querylimit"
                                    placeholder="querylimit"
                                    // defaultValue="ABC Pvt. Ltd."
                                    onChange={handleChange}
                                    value={values.querylimit}
                                    name="querylimit"
                                />
                            </Grid>

                            <Grid item xs={12}>
                                <Button variant="contained" sx={{ mr: 3.5 }} type="submit">
                                    Save Changes
                                </Button>
                                <Button
                                    type="reset"
                                    variant="outlined"
                                    color="secondary"
                                    onClick={() => {
                                        formikRef.current.resetForm({
                                            Firstname: '',
                                            Lastname: '',
                                            email: '',
                                            number: '',
                                            matrix: '',
                                            Querylimit: ''
                                        });
                                    }}
                                >
                                    Reset
                                </Button>
                            </Grid>
                        </Grid>
                    </form>
                )}
            </Formik>
        </CardContent>
    );
};

export default User;
