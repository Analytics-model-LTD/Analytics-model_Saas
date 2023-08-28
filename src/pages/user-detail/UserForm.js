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
import { result } from 'lodash';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Navigate, json, useNavigate } from '../../../node_modules/react-router-dom/dist/index';

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
    const [imgSrc, setImgSrc] = useState(null);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    // const [bitmapSrc, setBitmapSrc] = useState(null);

    const [selectedFile, setselectedFile] = useState();

    const inputElement = useRef();

    const onChange = (e) => {
        const reader = new FileReader();
        const files = e.target.files[0];

        if (files) {
            reader.onload = () => {
                setImgSrc(reader.result); // Update the image display
                setselectedFile(files, () => {
                    ('After setselectedFile:', selectedFile);console.log
                }); // Update the selected file
            };
            reader.readAsDataURL(files);
        }
    };

    useEffect(() => {
        console.log('selectedFile has changed:', selectedFile);
    }, [selectedFile]);

    const [initValues, setInitValues] = useState({
        firstname: '',
        lastname: '',
        email: '',
        phone: '',
        matrix_of_intrest: '',
        querylimit: '',
        profile_image: ''
    });

    let data = null;

    useEffect(() => {
        setInitValues(null);
        if (data === null) {
            dispatch(getuserDetails())
                .unwrap()
                .then((res) => {
                    data = res.data;
                    let imgs = res.data.profile_image;
                    setImgSrc(imgs);

                    formikRef.current.setValues(data);
                })
                .catch((error) => console.log(error));
        }
    }, []);

    const handlesubmit = (val) => {
        const formData = new FormData();
        formData.append('profile_image', selectedFile);

        const formDataToObject = (formData) => {
            const object = {};
            formData.forEach((value, key) => {
                object[key] = value;
            });
            return object;
        };

        const formDataObject = formDataToObject(formData);

        const Fileimg = formDataObject.profile_image;

        const form = {
            firstname: val.firstname,
            lastname: val.lastname,

            phone: val.phone,
            matrix_of_intrest: val.matrix_of_intrest,
            querylimit: val.querylimit,
            profile_image: Fileimg,

            birthdate: '2000-12-12'
        };

        dispatch(updateUserProfile(form))
            .unwrap()
            .then((res) => {
                console.log(res.data);
                res.message = 'updated successfully.' ? (
                    toast.success('updated successfully .', {
                        position: 'top-center'
                    })
                ) : (
                    <></>
                );

                localStorage.setItem(
                    'userInfo',
                    JSON.stringify({
                        picture: res?.data?.profile_image,
                        firstname: res?.data?.firstname
                    })
                );
            })
            .catch((error) => console.log('error', error));
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
                        await handlesubmit(values);
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
                                                ref={inputElement}
                                                type="file"
                                                name="profile_image"
                                                onChange={(e) => {
                                                    onChange(e);
                                                }}
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
                                    disabled
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
                                    <ToastContainer autoClose={1000} />
                                </Button>

                                <Button
                                    type="reset"
                                    variant="outlined"
                                    color="secondary"
                                    onClick={() => {
                                        navigate('/dashboard/default');
                                    }}
                                >
                                    Cancle
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
