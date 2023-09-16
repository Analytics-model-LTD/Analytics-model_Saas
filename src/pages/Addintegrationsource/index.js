import React from 'react';
import { useState } from 'react';

// ** MUI Imports
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import CardHeader from '@mui/material/CardHeader';
import InputLabel from '@mui/material/InputLabel';
import IconButton from '@mui/material/IconButton';
import CardContent from '@mui/material/CardContent';
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import FormHelperText from '@mui/material/FormHelperText';
import InputAdornment from '@mui/material/InputAdornment';
import { Paper, Typography, Stack } from '@mui/material';

// ** Third Party Imports
import * as yup from 'yup';
// import toast from 'react-hot-toast';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup/dist/yup';

// ** Icons Imports
import EyeOutline from 'mdi-material-ui/EyeOutline';
import EyeOffOutline from 'mdi-material-ui/EyeOffOutline';
import { useNavigate } from 'react-router-dom';
import { dispatch } from 'store/index';
import { newSaveintegretion } from 'Slice/integrationsourcesSlice';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const defaultValues = {
    credentialJson: '',
    connectionName: '',
    dataSourceName: '',
    defaultdatasetid: '',
    projectId: '',
    tableid: ''
};

const showErrors = (field, valueLen, min) => {
    if (valueLen === 0) {
        return `${field} field is required`;
    } else if (valueLen > 0 && valueLen < min) {
        return `${field} must be at least ${min} characters`;
    } else {
        return '';
    }
};

const schema = yup.object().shape({
    // credentialJson: yup
    //     .string()
    //     .min(3, (obj) => showErrors('credentialJson', obj.value.length, obj.min))
    //     .required(),
    dataSourceName: yup
        .string()
        .min(3, (obj) => showErrors('dataSourceName', obj.value.length, obj.min))
        .required(),
    defaultdatasetid: yup
        .string()
        .min(3, (obj) => showErrors('defaultdatasetid', obj.value.length, obj.min))
        .required(),
    connectionName: yup
        .string()
        .min(3, (obj) => showErrors('connectionName', obj.value.length, obj.min))
        .required(),
    projectId: yup
        .string()
        .min(3, (obj) => showErrors('projectId', obj.value.length, obj.min))
        .required(),
    tableid: yup
        .string()
        .min(3, (obj) => showErrors('tableid', obj.value.length, obj.min))
        .required()
});

function Addintegrationsource() {
    // const [state, setState] = useState({
    //     password: '',
    //     showPassword: false
    //   })

    // ** Hook
    const navigate = useNavigate();
    const [selectedFile, setselectedFile] = useState();
    const navigateToRoute = (e) => {
        navigate('/integrationsources');
    };
    const {
        control,
        handleSubmit,
        formState: { errors }
    } = useForm({
        defaultValues,
        mode: 'onChange',
        resolver: yupResolver(schema)
    });

    //   const handleClickShowPassword = () => {
    //     setState({ ...state, showPassword: !state.showPassword })
    //   }

    //   const handleMouseDownPassword = event => {
    //     event.preventDefault()
    //   }

    const handleResumeUpload = (e) => {
        const reader = new FileReader();
        const files = e.target.files[0];
        if (files) {
            reader.onload = () => {
                // Update the image display
                setselectedFile(files, () => {
                    console.log('After setselectedFile:', selectedFile);
                }); // Update the selected file
            };
            reader.readAsDataURL(files);
        }
        console.log(selectedFile);
    };
    const onSubmit = (data) => {
        const formData = new FormData();
        formData.append('credentialJson', selectedFile);

        const formDataToObject = (formData) => {
            const object = {};
            formData.forEach((value, key) => {
                object[key] = value;
            });
            return object;
        };

        const formDataObject = formDataToObject(formData);
        console.log(formDataObject);

        const Filesource = formDataObject.credentialJson;

        console.log(Filesource);
        const fromdata = {
            credentialJson: Filesource,
            connectionName: data.connectionName,
            dataSourceName: data.dataSourceName,
            datasetId: data.defaultdatasetid,
            projectId: data.projectId,
            tableId: data.tableid,
            connectionSource: 'BIG QUERY'
        };

        console.log(fromdata);
        dispatch(newSaveintegretion(fromdata))
            .unwrap()
            .then((res) => {
                console.log(res);
                if (res.data?.length === 0) {
                    toast.error(res.message, {
                        position: 'top-center'
                    });
                }

                if (res.message === 'Connection save successfully.') {
                    setTimeout(() => {
                        navigate('/integrationsources/table');
                    }, '1000');

                    toast.success('connection successfully .', {
                        position: 'top-center'
                    });
                }
            })
            .catch((error) => {
                console.log(error);
            });
    };
    return (
        <Grid container spacing={3}>
            <Grid item xs={12}>
                <Paper elevation={0} sx={{ p: 2 }}>
                    <Typography variant="h5">Data source Connection</Typography>
                </Paper>
            </Grid>
            <Grid item xs={12}>
                <Card>
                    <CardContent>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <Grid container spacing={5}>
                                <Grid item xs={12}>
                                    <FormControl fullWidth>
                                        <Controller
                                            name="connectionName"
                                            control={control}
                                            rules={{ required: true }}
                                            render={({ field: { value, onChange } }) => (
                                                <TextField
                                                    value={value}
                                                    label="Connection Name"
                                                    onChange={onChange}
                                                    // placeholder="Leonard"
                                                    error={Boolean(errors.connectionName)}
                                                    aria-describedby="validation-schema-first-name"
                                                />
                                            )}
                                        />
                                        {errors.connectionName && (
                                            <FormHelperText sx={{ color: 'error.main' }} id="validation-schema-first-name">
                                                {errors.connectionName.message}
                                            </FormHelperText>
                                        )}
                                    </FormControl>
                                </Grid>

                                <Grid item xs={12}>
                                    <FormControl fullWidth>
                                        <Controller
                                            name="dataSourceName"
                                            control={control}
                                            rules={{ required: true }}
                                            render={({ field: { value, onChange } }) => (
                                                <TextField
                                                    value={value}
                                                    label="Data Source"
                                                    onChange={onChange}
                                                    // placeholder="Carter"
                                                    error={Boolean(errors.dataSourceName)}
                                                    aria-describedby="validation-schema-dataSource"
                                                />
                                            )}
                                        />
                                        {errors.dataSourceName && (
                                            <FormHelperText sx={{ color: 'error.main' }} id="validation-schema-dataSource">
                                                {errors.dataSourceName.message}
                                            </FormHelperText>
                                        )}
                                    </FormControl>
                                </Grid>

                                <Grid item xs={12}>
                                    <FormControl fullWidth>
                                        <Controller
                                            name="defaultdatasetid"
                                            control={control}
                                            rules={{ required: true }}
                                            render={({ field: { value, onChange } }) => (
                                                <TextField
                                                    value={value}
                                                    label="Default Dataset ID"
                                                    onChange={onChange}
                                                    // placeholder="Carter"
                                                    error={Boolean(errors.defaultdatasetid)}
                                                    aria-describedby="validation-schema-defaultdatasetid"
                                                />
                                            )}
                                        />
                                        {errors.defaultdatasetid && (
                                            <FormHelperText sx={{ color: 'error.main' }} id="validation-schema-defaultdatasetid">
                                                {errors.defaultdatasetid.message}
                                            </FormHelperText>
                                        )}
                                    </FormControl>
                                </Grid>
                                <Grid item xs={12}>
                                    <FormControl fullWidth>
                                        <Controller
                                            name="projectId"
                                            control={control}
                                            rules={{ required: true }}
                                            render={({ field: { value, onChange } }) => (
                                                <TextField
                                                    value={value}
                                                    label="Project ID"
                                                    onChange={onChange}
                                                    // placeholder="Carter"
                                                    error={Boolean(errors.projectId)}
                                                    aria-describedby="validation-schema-projectid"
                                                />
                                            )}
                                        />
                                        {errors.projectId && (
                                            <FormHelperText sx={{ color: 'error.main' }} id="validation-schema-projectid">
                                                {errors.projectId.message}
                                            </FormHelperText>
                                        )}
                                    </FormControl>
                                </Grid>
                                <Grid item xs={12}>
                                    <FormControl fullWidth>
                                        <Controller
                                            name="tableid"
                                            control={control}
                                            rules={{ required: true }}
                                            render={({ field: { value, onChange } }) => (
                                                <TextField
                                                    value={value}
                                                    label="Table ID"
                                                    onChange={onChange}
                                                    // placeholder="Carter"
                                                    error={Boolean(errors.tableid)}
                                                    aria-describedby="validation-schema-tableid"
                                                />
                                            )}
                                        />
                                        {errors.tableid && (
                                            <FormHelperText sx={{ color: 'error.main' }} id="validation-schema-tableid">
                                                {errors.tableid.message}
                                            </FormHelperText>
                                        )}
                                    </FormControl>
                                </Grid>

                                <Grid item xs={12}>
                                    <FormControl fullWidth>
                                        <Stack spacing={2}>
                                            <label htmlFor="upload-image">
                                                <input
                                                    id="upload-image"
                                                    hidden
                                                    accept="image/*,.pdf,.json"
                                                    type="file"
                                                    name="file"
                                                    onChange={(e) => handleResumeUpload(e)}
                                                />
                                                <Button
                                                    variant="contained"
                                                    component="span"
                                                    // startIcon={<CloudUploadIcon />} // You can replace this with an appropriate icon
                                                    sx={{
                                                        backgroundColor: 'primary.main', // Customize the background color
                                                        color: 'white', // Customize the text color
                                                        '&:hover': {
                                                            backgroundColor: 'primary.dark' // Customize hover color
                                                        }
                                                    }}
                                                >
                                                    Upload File
                                                </Button>
                                            </label>
                                            {selectedFile && <Typography variant="body2">Selected File: {selectedFile.name}</Typography>}
                                        </Stack>

                                        {/* {touched.file && errors.file && (
                                            <FormHelperText error id="standard-weight-helper-text-file">
                                                {errors.file}
                                            </FormHelperText>
                                        )} */}

                                        {errors.credentialJson && (
                                            <FormHelperText sx={{ color: 'error.main' }} id="validation-schema-credentialJson">
                                                {errors.credentialJson.message}
                                            </FormHelperText>
                                        )}
                                    </FormControl>
                                </Grid>

                                <Grid item xs={12}>
                                    <Button size="large" type="submit" variant="contained">
                                        Test Connection
                                        <ToastContainer autoClose={1000} />
                                    </Button>

                                    <Button size="large" type="submit" variant="contained" sx={{ ml: '2%' }} onClick={navigateToRoute}>
                                        Back
                                    </Button>
                                </Grid>
                            </Grid>
                        </form>
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    );
}

export default Addintegrationsource;
