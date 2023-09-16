import React from 'react'
import { Card, Paper, Grid, Chip, Typography } from "@mui/material";
import Bigquery from 'assets/images/icons/google_bigquery-ar21.svg';
import Bigquerylogo from 'assets/images/icons/google_bigquery-icon.svg'
import Box from '@mui/material/Box'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import Amezonlogo from 'assets/images/icons/amazon-s3-svgrepo-com.svg';
import Mysql from 'assets/images/icons/mysql-official.svg';
import Cloudstorage from 'assets/images/icons/Google_Storage-Logo.wine.svg';
import Googleadd from 'assets/images/icons/google-ads-icon.svg';
import Googlesheet from 'assets/images/icons/icons8-google-sheets.svg'
import Adsloho from 'assets/images/icons/ads-logo.png'
import FileUploadIcon from 'assets/images/icons/8723141_upload_icon.svg'
import { Link } from 'react-router-dom'
import { useNavigate } from "react-router-dom";


function Integrationsources() {

    const navigate = useNavigate();
    const navigateToRoute = (e) => {
        navigate("integrationsources/add-connection");
    };
    return (
        <Grid container spacing={3}>
            <Grid item xs={12}>
                <Paper elevation={0} sx={{ p: 2 }}>
                    <Typography variant="h5" >
                        Integration sources
                    </Typography>
                </Paper>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
                {/* <Link to='integrationsources/add-connection'> */}
                <Paper elevation={1} sx={{ p: 2, width: "100%" }}>
                    <Box sx={{ display: 'flex', alignItems: 'center' }} onClick={navigateToRoute}>
                        {<img src={Bigquerylogo} alt="Bigquerylogo" />}
                        <Box sx={{ display: 'flex', flexDirection: 'column', ml: '5%' }}>
                            <Typography variant='h5' sx={{ color: '#1E87F0' }}>GOOGLE BIGQUERY
                                <KeyboardArrowRightIcon sx={{ ml: "16px" }} />
                           
                            </Typography>
                            <Typography variant='h6'>by Google</Typography>
                        </Box>

                    </Box>
                </Paper>
                {/* </Link> */}
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
                <Paper elevation={1} sx={{ p: 2, width: "100%", position: "relative" }}>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <img src={Amezonlogo} alt="Amazon Logo" style={{ width: '65px' }} />

                        <Box sx={{ display: 'flex', flexDirection: 'column', ml: '3%' }}>
                            <Typography variant='h5' sx={{ color: '#1E87F0' }}>AMAZON S3
                                <KeyboardArrowRightIcon sx={{ ml: "75px" }} />
                            </Typography>
                            <Typography variant='h6'>by Amazon</Typography>
                        </Box>
                    </Box>
                </Paper>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
                <Paper elevation={1} sx={{ p: 2, width: "100%" }}>

                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        {<img src={Adsloho} alt="Adsloho" style={{ width: '65px', height: '63px' }} />}

                        <Box sx={{ display: 'flex', flexDirection: 'column', ml: '3%' }}>
                            <Typography variant='h5' sx={{ color: '#1E87F0' }}>GOOGLE BIGQUERY

                                <KeyboardArrowRightIcon sx={{ ml: "16px" }} />

                            </Typography>
                            <Typography variant='h6'>by Google</Typography>
                        </Box>

                    </Box>
                </Paper>

            </Grid>
            <Grid item xs={12} sm={6} md={4}>
                <Paper elevation={1} sx={{ p: 2, width: "100%" }}>

                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        {<img src={Mysql} alt="Mysql" style={{ width: '65px', height: '63px' }} />}

                        <Box sx={{ display: 'flex', flexDirection: 'column', ml: '3%' }}>
                            <Typography variant='h5' sx={{ color: '#1E87F0' }}>MY SQL

                                <KeyboardArrowRightIcon sx={{ ml: "110px" }} />

                            </Typography>
                            <Typography variant='h6'>by Oracle</Typography>
                        </Box>

                    </Box>
                </Paper>

            </Grid>
            <Grid item xs={12} sm={6} md={4}>
                <Paper elevation={1} sx={{ p: 2, width: "100%" }}>

                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        {<img src={Cloudstorage} alt="Cloudstorage" style={{ width: '65px', height: '63px' }} />}

                        <Box sx={{ display: 'flex', flexDirection: 'column', ml: '3%' }}>
                            <Typography variant='h5' sx={{ color: '#1E87F0' }}>CLOUD STORAGE

                                <KeyboardArrowRightIcon sx={{ ml: "40px" }} />

                            </Typography>
                            <Typography variant='h6'>by Google</Typography>
                        </Box>

                    </Box>
                </Paper>

            </Grid>
            <Grid item xs={12} sm={6} md={4}>
                <Paper elevation={1} sx={{ p: 2, width: "100%" }}>

                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        {<img src={Googleadd} alt="Googleadd" style={{ width: '55px', height: '63px' }} />}

                        <Box sx={{ display: 'flex', flexDirection: 'column', ml: '3%' }}>
                            <Typography variant='h5' sx={{ color: '#1E87F0' }}>GOOGLE ADS

                                <KeyboardArrowRightIcon sx={{ ml: "75px" }} />

                            </Typography>
                            <Typography variant='h6'>by Google</Typography>
                        </Box>

                    </Box>
                </Paper>

            </Grid>
            <Grid item xs={12} sm={6} md={4}>
                <Paper elevation={1} sx={{ p: 2, width: "100%" }}>

                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        {<img src={FileUploadIcon} alt="FileUploadIcon" className='icon' style={{ width: '55px', height: '63px' }} />}

                        <Box sx={{ display: 'flex', flexDirection: 'column', ml: '3%' }}>
                            <Typography variant='h5' sx={{ color: '#1E87F0' }}>UPLOAD DATA FILE
                      
                                    <KeyboardArrowRightIcon  sx={{ ml: "35px" }}/>
                          
                            </Typography>
                            <Typography variant='h6'>by Google</Typography>
                        </Box>

                    </Box>
                </Paper>

            </Grid>
            <Grid item xs={12} sm={6} md={4}>
                <Paper elevation={1} sx={{ p: 2, width: "100%" }}>

                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        {<img src={Googlesheet} alt="Googlesheet" style={{ width: '55px', height: '63px' }} />}

                        <Box sx={{ display: 'flex', flexDirection: 'column', ml: '3%' }}>
                            <Typography variant='h5' sx={{ color: '#1E87F0' }}>GOOGLE SHEETS
                                    <KeyboardArrowRightIcon sx={{ ml: "50px" }}/>
                            </Typography>
                            <Typography variant='h6'>by Google</Typography>
                        </Box>

                    </Box>
                </Paper>

            </Grid>
        </Grid>
    )
}

export default Integrationsources
