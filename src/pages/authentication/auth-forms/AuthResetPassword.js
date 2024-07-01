import React from 'react';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import axios from 'axios';

// material-ui
import {
    Button,
    Checkbox,
    Divider,
    FormControlLabel,
    FormHelperText,
    Grid,
    Link,
    IconButton,
    InputAdornment,
    InputLabel,
    OutlinedInput,
    Stack,
    Typography
} from '@mui/material';

// third party
import * as Yup from 'yup';
import { Formik } from 'formik';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// project import
import FirebaseSocial from './FirebaseSocial';
import AnimateButton from 'components/@extended/AnimateButton';

// assets
import { EyeOutlined, EyeInvisibleOutlined } from '@ant-design/icons';
import { useDispatch } from 'react-redux';
import { useFormik } from 'formik';

// ============================|| FIREBASE - LOGIN ||============================ //

const AuthResetPassword = () => {
    const [checked, setChecked] = React.useState(false);
    const navigate = useNavigate();
    const dispatch = useDispatch()

    const [showPassword, setShowPassword] = React.useState(false);
    const handleClickShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };
    const handleLogin = (values) => {
        // localStorage.setItem('Y_TOKEN', JSON.stringify(true));
        // navigate('/')
        axios
            .put(
                'user/reset-forgot-password',
                values,
                {
                    headers: {
                        'content-type': 'application/json'
                    }
                }
            )
            .then((response) => {
                if (response?.data?.status) {
                    toast.success(response?.data?.message, {
                        position: "top-center",
                    });
                    setTimeout(() => {
                        navigate('/login');
                    }, 2500);
                } else {
                    toast.error("User Not Found", {
                        position: "top-center",
                    });
                }
                // setStatus({ success: false });
                // setSubmitting(false);
                // dispatch(showSuccess('Password reset successfully!'))
                // console.log(response);
                // navigate('/login')
                // event.email = '';
            })

            .catch((err) => {
                // setStatus({ success: false });
                // setErrors({ submit: err.message });
                // setSubmitting(false);
            });
    };

    const validationSchema = Yup.object({
        email: Yup.string()
            .required('New Password is required'),
        new_password: Yup.string()
            .required('New Password is required')
            .min(6, 'Password should be at least 6 characters long'),
        confirm_password: Yup.string()
            .oneOf([Yup.ref('new_password'), null], 'Passwords must match')
            .required('Confirm Password is required')
    });
    const formik = useFormik({
        initialValues: {
            email: '',
            new_password: '',
            confirm_password: ''
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            console.log('Form Values', values);
            handleLogin(values);
        }
    });

    return (
        <>
            <Formik
            // initialValues={{
            //     email: '',
            //     // otp: '',
            //     new_password: '',
            //     confirm_password: ''

            // }}
            // validationSchema={Yup.object().shape({
            //     email: Yup.string().max(255).required('Email is required'),
            //     // otp: Yup.string().max(255).required('OTP is required'),
            //     new_password: Yup.string()
            //         .required('New Password is required')
            //         .min(6, 'Password should be at least 6 characters long'),
            //     confirm_password: Yup.string()
            //         .oneOf([Yup.ref('new_password'), null], 'Passwords must match')
            //         .required('Confirm Password is required')
            // })}
            // onSubmit={async (values, { setErrors, setStatus, setSubmitting }) => {
            //     console.log(values, setErrors, setStatus, setSubmitting);
            //     try {
            //         // handleLogin(values, { setErrors, setStatus, setSubmitting })
            //     } catch (err) {
            //         setStatus({ success: false });
            //         setErrors({ submit: err.message });
            //         setSubmitting(false);
            //     }
            // }}
            >
                {({ errors, handleBlur, handleChange, handleSubmit, isSubmitting, touched, values }) => (
                    <form noValidate onSubmit={formik.handleSubmit}>
                        <Grid container spacing={3}>
                            <Grid item xs={12}>
                                <Stack spacing={1}>
                                    <InputLabel htmlFor="email-login">Email</InputLabel>
                                    {/* <InputLabel htmlFor="email-login"><b></b></InputLabel> */}

                                    <OutlinedInput
                                        id="email"
                                        type="email"
                                        name="email"
                                        onBlur={formik.handleBlur}
                                        onChange={formik.handleChange}
                                        value={formik.values.email}
                                        placeholder="Enter Your Email"
                                        fullWidth
                                        error={Boolean(formik.touched.email && formik.errors.email)}
                                    />
                                    {formik.touched.email && formik.errors.email && (
                                        <FormHelperText error>
                                            {formik.errors.email}
                                        </FormHelperText>
                                    )}
                                </Stack>
                            </Grid>
                            {/* <Grid item xs={12}>
                                <Stack spacing={1}>
                                    <InputLabel htmlFor="otp-login">OTP</InputLabel>
                                    <OutlinedInput
                                        id="otp-login"
                                        type="string"
                                        // value={values.otp}
                                        name="otp"
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        placeholder="OTP"
                                        fullWidth
                                        error={Boolean(touched.otp && errors.otp)}
                                    />
                                    {touched.otp && errors.otp && (
                                        <FormHelperText error id="standard-weight-helper-text-otp-login">
                                            {errors.otp}
                                        </FormHelperText>
                                    )}
                                </Stack>
                            </Grid> */}
                            <Grid item xs={12}>
                                <Stack spacing={1}>
                                    <InputLabel htmlFor="new_password-login">New Password</InputLabel>
                                    <OutlinedInput
                                        id="new_password-login"
                                        type="password"
                                        name="new_password"
                                        onBlur={formik.handleBlur}
                                        onChange={formik.handleChange}
                                        value={formik.values.new_password}
                                        placeholder="Enter New Password"
                                        fullWidth
                                        error={Boolean(formik.touched.new_password && formik.errors.new_password)}
                                    />
                                    {formik.touched.new_password && formik.errors.new_password && (
                                        <FormHelperText error>
                                            {formik.errors.new_password}
                                        </FormHelperText>
                                    )}
                                </Stack>
                            </Grid>

                            <Grid item xs={12}>
                                <Stack spacing={1}>
                                    <InputLabel htmlFor="confirm_password-login">Confirm Password</InputLabel>
                                    <OutlinedInput
                                        id="confirm_password-login"
                                        type="password"
                                        name="confirm_password"
                                        onBlur={formik.handleBlur}
                                        onChange={formik.handleChange}
                                        value={formik.values.confirm_password}
                                        placeholder="Enter Confirm Password"
                                        fullWidth
                                        error={Boolean(formik.touched.confirm_password && formik.errors.confirm_password)}
                                    />
                                    {formik.touched.confirm_password && formik.errors.confirm_password && (
                                        <FormHelperText error>
                                            {formik.errors.confirm_password}
                                        </FormHelperText>
                                    )}
                                </Stack>
                            </Grid>
                            {/* {errors.submit && (
                                <Grid item xs={12}>
                                    <FormHelperText error>{errors.submit}</FormHelperText>
                                </Grid>
                            )} */}
                            <Grid item xs={12}>
                                <AnimateButton>
                                    <Button
                                        disableElevation
                                        disabled={formik.isSubmitting}
                                        fullWidth
                                        size="large"
                                        type="submit"
                                        variant="contained"
                                        color="primary"
                                    >
                                        Submit
                                    </Button>
                                    <ToastContainer autoClose={2000} />
                                </AnimateButton>
                            </Grid>
                        </Grid>
                    </form>
                )}
            </Formik>
        </>
    );
};

export default AuthResetPassword;
