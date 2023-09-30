import React, { useCallback, useEffect, useMemo } from "react";
import { useState } from "react";
import axios from "axios";

// ** MUI Imports
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import CardHeader from "@mui/material/CardHeader";
import IconButton from "@mui/material/IconButton";
import CardContent from "@mui/material/CardContent";
import FormControl from "@mui/material/FormControl";
import OutlinedInput from "@mui/material/OutlinedInput";
import FormHelperText from "@mui/material/FormHelperText";
import InputAdornment from "@mui/material/InputAdornment";
import { Paper, Typography, Stack } from "@mui/material";

// ** Third Party Imports
import * as yup from "yup";
// import toast from 'react-hot-toast';
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup/dist/yup";
import {
  googleLogout,
  useGoogleLogin,
  hasGrantedAnyScopeGoogle,
} from "@react-oauth/google";

// ** Icons Imports
import EyeOutline from "mdi-material-ui/EyeOutline";
import EyeOffOutline from "mdi-material-ui/EyeOffOutline";
import { useNavigate } from "react-router-dom";
import { dispatch } from "store/index";
import {
  newSaveintegretion,
  getProjects,
  getDatasets,
  getTables,
} from "Slice/integrationsourcesSlice";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { has } from "lodash";

const defaultValues = {
  connectionName: "",
  defaultdatasetid: "",
  projectid: "",
  tableid: "",
};

const showErrors = (field, valueLen, min) => {
  if (valueLen === 0) {
    return `${field} field is required`;
  } else if (valueLen > 0 && valueLen < min) {
    return `${field} must be at least ${min} characters`;
  } else {
    return "";
  }
};

const schema = yup.object().shape({
  defaultdatasetid: yup
    .string()
    .min(3, (obj) => showErrors("defaultdatasetid", obj.value.length, obj.min))
    .required(),
  connectionName: yup
    .string()
    .min(3, (obj) => showErrors("connectionName", obj.value.length, obj.min))
    .required(),
  projectid: yup
    .string()
    .min(3, (obj) => showErrors("projectid", obj.value.length, obj.min))
    .required(),
  tableid: yup
    .string()
    .min(3, (obj) => showErrors("tableid", obj.value.length, obj.min))
    .required(),
});

function Addintegrationsource() {
  // const [state, setState] = useState({
  //     password: '',
  //     showPassword: false
  //   })

  // ** Hook
  const navigate = useNavigate();
  const [hasAccess, setHasAccess] = useState(null);
  const [projects, setProjects] = useState([]);
  const [datasets, setDatasets] = useState([]);
  const [tables, setTables] = useState([]);

  const {
    control,
    handleSubmit,
    formState: { errors, dirtyFields },
    getValues,
  } = useForm({
    defaultValues,
    mode: "onChange",
    resolver: yupResolver(schema),
  });

  const formValues = getValues();

  const allowSubmit = useMemo(
    () => Object.values(formValues).every((value) => !!value),
    [formValues]
  );

  const scopes = useMemo(
    () => [
      "https://www.googleapis.com/auth/cloud-platform.read-only",
      "https://www.googleapis.com/auth/userinfo.email",
      "https://www.googleapis.com/auth/userinfo.profile",
    ],
    []
  );

  useEffect(() => {
    try {
      const token = localStorage.getItem("TOKEN_OBJECT");

      if (token) {
        const hasAccessResponse = hasGrantedAnyScopeGoogle(
          JSON.parse(token),
          ...scopes
        );
        setHasAccess(hasAccessResponse);
      }
    } catch (error) {
      localStorage.removeItem("TOKEN_OBJECT");
      console.error(error);
    }
  }, [scopes]);

  const getProjectsAsync = () => {
    console.log("getProjectsAsync");
    dispatch(getProjects())
      .unwrap()
      .then((res) => {
        setProjects(res.projects);
      });
  };

  const getDatasetsAsync = useCallback((projectId) => {
    console.log("getDatasetsAsync");
    dispatch(getDatasets(projectId))
      .unwrap()
      .then((res) => {
        setDatasets(res.datasets);
      });
  }, []);

  const getTablesAsync = useCallback((projectId, datasetId) => {
    console.log("getTablesAsync", projectId, datasetId);
    dispatch(getTables({ projectId, datasetId }))
      .unwrap()
      .then((res) => {
        setTables(res.tables);
      });
  }, []);

  useEffect(() => {
    if (hasAccess) {
      getProjectsAsync();
    }
  }, [hasAccess]);

  useEffect(() => {
    if (formValues.projectid) {
      getDatasetsAsync(formValues.projectid);
    }
  }, [formValues.projectid, getDatasetsAsync]);

  useEffect(() => {
    if (
      formValues.projectid &&
      formValues.defaultdatasetid &&
      !formValues.tableid
    ) {
      getTablesAsync(formValues.projectid, formValues.defaultdatasetid);
    }
  }, [formValues, getTablesAsync]);

  const onSuccess = async (response) => {
    await axios.post(
      `/user/google_login`,
      { credential: response.code, type: "code" },
      {
        headers: {
          "content-type": "application/json",
        },
      }
    );
    localStorage.setItem("GOOGLE_TOKEN", response.access_token);
    localStorage.setItem("TOKEN_OBJECT", JSON.stringify(response));

    const hasAccessResponse = hasGrantedAnyScopeGoogle(response, ...scopes);

    setHasAccess(hasAccessResponse);
  };

  const grantAccess = useGoogleLogin({
    onSuccess: (codeResponse) => onSuccess(codeResponse),
    onError: (error) => console.log("Login Failed:", error),
    scope: scopes.join(" "),
    flow: "auth-code",
  });

  const navigateToRoute = (e) => {
    navigate("/integrationsources");
  };

  const onSubmit = (data) => {
    console.log(data);
    const formData = new FormData();

    const formDataToObject = (formData) => {
      const object = {};
      formData.forEach((value, key) => {
        object[key] = value;
      });
      return object;
    };

    const formDataObject = formDataToObject(formData);
    console.log(formDataObject);

    const fromdata = {
      connectionName: data.connectionName,
      datasetId: data.defaultdatasetid,
      projectId: data.projectid,
      tableId: data.tableid,
      credentials: JSON.parse(localStorage.getItem("TOKEN_OBJECT")),
      connectionSource: "BIG QUERY",
    };

    console.log(fromdata);
    dispatch(newSaveintegretion(fromdata))
      .unwrap()
      .then((res) => {
        console.log(res);
        if (res.data?.length === 0) {
          toast.error(res.message, {
            position: "top-center",
          });
        }

        if (res.message === "Connection save successfully.") {
          setTimeout(() => {
            navigate("/integrationsources/table");
          }, "1000");

          toast.success("connection successfully .", {
            position: "top-center",
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
            <form onSubmit={handleSubmit(onSubmit, console.log)}>
              <Grid container spacing={5}>
                {!hasAccess && (
                  <Grid item xs={12}>
                    <Button
                      size="large"
                      type="submit"
                      variant="contained"
                      onClick={grantAccess}
                    >
                      Authorize BigQuery
                    </Button>
                  </Grid>
                )}
                <Grid item xs={12}>
                  <FormControl fullWidth>
                    <Controller
                      key="connectionName"
                      name="connectionName"
                      control={control}
                      rules={{ required: true }}
                      disabled={!hasAccess}
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
                      <FormHelperText
                        sx={{ color: "error.main" }}
                        id="validation-schema-first-name"
                      >
                        {errors.connectionName.message}
                      </FormHelperText>
                    )}
                  </FormControl>
                </Grid>

                <Grid item xs={12}>
                  <FormControl fullWidth disabled={!hasAccess}>
                    <Controller
                      key="projectid"
                      name="projectid"
                      control={control}
                      rules={{ required: true }}
                      render={({ field: { value, onChange } }) => (
                        <>
                          <InputLabel id="demo-simple-select-label">
                            Project ID
                          </InputLabel>
                          <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={value}
                            label="Project ID"
                            onChange={(e) => {
                              getDatasetsAsync(e.target.value);
                              onChange(e);
                            }}
                          >
                            {projects.map((project) => (
                              <MenuItem key={project.id} value={project.id}>
                                {project.friendlyName}
                              </MenuItem>
                            ))}
                          </Select>
                        </>
                      )}
                    />
                    {errors.projectid && (
                      <FormHelperText
                        sx={{ color: "error.main" }}
                        id="validation-schema-projectid"
                      >
                        {errors.projectid.message}
                      </FormHelperText>
                    )}
                  </FormControl>
                </Grid>

                <Grid item xs={12}>
                  <FormControl fullWidth disabled={!dirtyFields.projectid}>
                    <Controller
                      key="defaultdatasetid"
                      name="defaultdatasetid"
                      control={control}
                      rules={{ required: true }}
                      render={({ field: { value, onChange } }) => (
                        <>
                          <InputLabel id="demo-simple-select-label">
                            Dataset ID
                          </InputLabel>
                          <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={value}
                            label="Dataset ID"
                            onChange={onChange}
                          >
                            {datasets.map((dataset) => {
                              const id =
                                dataset.datasetReference?.datasetId ||
                                dataset.id;

                              return (
                                <MenuItem key={id} value={id}>
                                  {id}
                                </MenuItem>
                              );
                            })}
                          </Select>
                        </>
                      )}
                    />
                    {errors.defaultdatasetid && (
                      <FormHelperText
                        sx={{ color: "error.main" }}
                        id="validation-schema-defaultdatasetid"
                      >
                        {errors.defaultdatasetid.message}
                      </FormHelperText>
                    )}
                  </FormControl>
                </Grid>

                <Grid item xs={12}>
                  <FormControl
                    fullWidth
                    disabled={!dirtyFields.defaultdatasetid}
                  >
                    <Controller
                      key="tableid"
                      name="tableid"
                      control={control}
                      rules={{ required: true }}
                      render={({ field: { value, onChange } }) => (
                        <>
                          <InputLabel id="demo-simple-select-label">
                            Table ID
                          </InputLabel>
                          <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={value}
                            label="Table ID"
                            onChange={onChange}
                          >
                            {tables.map((table) => {
                              const id =
                                table.tableReference?.tableId || table.id;

                              return (
                                <MenuItem key={table.id} value={id}>
                                  {id}
                                </MenuItem>
                              );
                            })}
                          </Select>
                        </>
                      )}
                    />
                    {errors.tableid && (
                      <FormHelperText
                        sx={{ color: "error.main" }}
                        id="validation-schema-tableid"
                      >
                        {errors.tableid.message}
                      </FormHelperText>
                    )}
                  </FormControl>
                </Grid>

                <Grid item xs={12}>
                  <Button
                    size="large"
                    type="submit"
                    variant="contained"
                    disabled={!allowSubmit}
                  >
                    Save
                  </Button>

                  <Button
                    size="large"
                    type="submit"
                    variant="contained"
                    sx={{ ml: "2%" }}
                    onClick={navigateToRoute}
                  >
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
