import React from 'react'
import { Card, Paper, Grid, Chip, Typography } from "@mui/material";
import Bigquery from 'assets/images/icons/google_bigquery-ar21.svg';
import Bigquerylogo from 'assets/images/icons/google_bigquery-icon.svg'
import Box from '@mui/material/Box'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

import { Link } from 'react-router-dom'
function Integrationsources() {
  
    return (
        <Grid container spacing={3}>
            <Grid item xs={12}>
                <Paper elevation={0} sx={{ p: 2 }}>
                    <Typography variant="h5" >
                        Integration sources
                    </Typography>
                </Paper>
            </Grid>
            <Grid item xs={12}>
                <Paper elevation={1} sx={{ p: 2,width:"35%" }}>

                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        {<img src={Bigquerylogo} alt="Bigquerylogo" />}
                   
                        <Box sx={{ display: 'flex', flexDirection: 'column', ml: '3%'}}>
                            <Typography variant='h4' sx={{color:'#1E87F0'}}>GOOGLE BIGQUERY
                            <Link to='integrationsources/add-connection'>
                            <KeyboardArrowRightIcon />
                            </Link>
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
