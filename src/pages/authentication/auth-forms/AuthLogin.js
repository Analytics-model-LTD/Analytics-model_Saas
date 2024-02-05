import React, { useState, useEffect } from "react";
import { Link as RouterLink } from "react-router-dom";
import axios from "axios";

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
  Typography,
} from "@mui/material";
import GoogleButton from "react-google-button";

// third party
import * as Yup from "yup";
import { Formik } from "formik";

// project import
import FirebaseSocial from "./FirebaseSocial";
import AnimateButton from "components/@extended/AnimateButton";
import { useNavigate } from "../../../../node_modules/react-router-dom/dist/index";

// assets
import { EyeOutlined, EyeInvisibleOutlined } from "@ant-design/icons";
import jwt from "jwt-decode";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useSelector } from "react-redux";
import { getuserDetails } from "Slice/userProfileSlice";
import { dispatch } from "store/index";
import { GoogleLogin, GoogleOAuthProvider } from "@react-oauth/google";
// ============================|| FIREBASE - LOGIN ||============================ //

const AuthLogin = () => {
  const navigate = useNavigate();
  const [checked, setChecked] = React.useState(false);

  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  useEffect(() => {
    dispatch(getuserDetails());
  }, [dispatch]);

  const handleSubmit = (val) => {
    axios
      .post(
        "/user/login",
        {
          email: val.email,
          password: val.password,
        },
        {
          headers: {
            "content-type": "application/json",
          },
        }
      )
      .then((res) => {
        localStorage.setItem("TOKEN", res.data.access_token);
        const user = jwt(res.data.access_token);
        localStorage.setItem(
          "userInfo",
          JSON.stringify({
            firstname: user?.user?.firstname,
            picture: res?.data?.profile_image,
          })
        );

        const data = localStorage.getItem("TOKEN");
        res.data.access_token != null ? navigate("/") : <></>;
      })

      .catch((err) => {
        if (err.response.data.message === "Incorrect Email or Password.") {
          toast.error(" Incorrect Email or Password ", {
            position: "top-center",
          });
        } else if (err.response.data.message === "Wrong Password") {
          toast.error("  Incorrect Password", {
            position: "top-center",
          });
        }
      });
  };

  const handleLoginSuccess = (credentialResponse) => {
    console.log(credentialResponse);
    axios
      .post(
        `https://2m2rc19wr6.execute-api.eu-north-1.amazonaws.com/dev/api/user/google_login`,
        { credential: credentialResponse.credential },
        {
          headers: {
            "content-type": "application/json",
          },
        }
      )
      .then((res) => {
        if (res) {
          console.log(res?.user?.firstname);
          localStorage.setItem("TOKEN", res.data.access_token);
          const user = jwt(res.data.access_token);
          localStorage.setItem(
            "userInfo",
            JSON.stringify({
              firstname: user?.user?.firstname,
              picture: res?.data?.profile_image,
            })
          );
          res.data.access_token != null ? navigate("/") : <></>;
          // res.status === 200 ? navigate('/') : <></>;
          // res.data !== null ? navigate('/') : <></>;
        }
        // logOut();
        // navigate("/RS_Store");
      });
    //setIsLoggedIn(false); // Reset the flag when login is successful
  };

  return (
    <>
      <Formik
        initialValues={{
          email: "",
          password: "",
          submit: null,
        }}
        validationSchema={Yup.object().shape({
          email: Yup.string()
            .matches(/\S+@\S+\.\S+/, "Please Enter Valid Email")
            .max(255)
            .required("Email is required"),
          password: Yup.string()
            .max(16, "Password can only contain 16 Digit")
            .required("Password  is Required"),
        })}
        onSubmit={async (values, { setErrors, setStatus, setSubmitting }) => {
          try {
            handleSubmit(values);
            setStatus({ success: false });
            setSubmitting(false);
          } catch (err) {
            setStatus({ success: false });
            setErrors({ submit: err.message });
            setSubmitting(false);
          }
        }}
      >
        {({
          errors,
          handleBlur,
          handleChange,
          isSubmitting,
          touched,
          handleSubmit,
          values,
        }) => (
          <form noValidate onSubmit={handleSubmit}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <Stack spacing={1}>
                  <InputLabel htmlFor="email-login">Email Address</InputLabel>
                  <OutlinedInput
                    id="email-login"
                    type="email"
                    value={values.email}
                    name="email"
                    onBlur={handleBlur}
                    // onChange={handleChange}
                    onChange={handleChange}
                    placeholder="Enter email address"
                    fullWidth
                    error={Boolean(touched.email && errors.email)}
                  />

                  {touched.email && errors.email && (
                    <FormHelperText error>{errors.email}</FormHelperText>
                  )}
                </Stack>
              </Grid>
              <Grid item xs={12}>
                <Stack spacing={1}>
                  <InputLabel htmlFor="password-login">Password</InputLabel>
                  <OutlinedInput
                    fullWidth
                    error={Boolean(touched.password && errors.password)}
                    id="-password-login"
                    type={showPassword ? "text" : "password"}
                    value={values.password}
                    name="password"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    // onChange={(e) => {
                    //     setpassword(e.target.value);
                    // }}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                          edge="end"
                          size="large"
                        >
                          {showPassword ? (
                            <EyeOutlined />
                          ) : (
                            <EyeInvisibleOutlined />
                          )}
                        </IconButton>
                      </InputAdornment>
                    }
                    placeholder="Enter password"
                  />
                  {touched.password && errors.password && (
                    <FormHelperText error id="helper-text-password-signup">
                      {errors.password}
                    </FormHelperText>
                  )}
                </Stack>
              </Grid>

              <Grid item xs={12} sx={{ mt: -1 }}>
                <Stack
                  direction="row"
                  justifyContent="space-between"
                  alignItems="center"
                  spacing={2}
                >
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={checked}
                        onChange={(event) => setChecked(event.target.checked)}
                        name="checked"
                        color="primary"
                        size="small"
                      />
                    }
                    label={
                      <Typography variant="h6">Keep me sign in</Typography>
                    }
                  />
                  <Link
                    variant="h6"
                    component={RouterLink}
                    to="/forgot-password"
                    color="text.primary"
                  >
                    Forgot Password?
                  </Link>
                </Stack>
              </Grid>
              {errors.submit && (
                <Grid item xs={12}>
                  <FormHelperText error>{errors.submit}</FormHelperText>
                </Grid>
              )}
              <Grid item xs={12}>
                <AnimateButton>
                  <Button
                    disableElevation
                    disabled={isSubmitting}
                    fullWidth
                    size="large"
                    type="submit"
                    variant="contained"
                    color="primary"
                  >
                    Login
                  </Button>
                  <ToastContainer autoClose={1000} />
                </AnimateButton>
              </Grid>
              <Grid item xs={12}>
                <Divider>
                  <Typography variant="caption"> Login with</Typography>
                </Divider>
              </Grid>
              <Grid item xs={12}>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <GoogleOAuthProvider clientId="442914944524-87tme4kji7i7l29tu8q7r2aqpomn3c1l.apps.googleusercontent.com">
                    <GoogleLogin
                      onSuccess={(credentialResponse) =>
                        handleLoginSuccess(credentialResponse)
                      }
                      onError={() => {
                        console.log("Login Failed");
                      }}
                    />
                  </GoogleOAuthProvider>
                </div>
              </Grid>
            </Grid>
          </form>
        )}
      </Formik>
    </>
  );
};

export default AuthLogin;
