import React from 'react'
import { Card, Paper, Grid, Chip, Typography, Stack } from "@mui/material";
import logo from 'assets/images/icons/Analytics Model Playground/1440px/Feed/download 1.jpg';
import spike from 'assets/images/icons/spike.svg'
import AddIcon from '@mui/icons-material/Add';
import Divider from '@mui/material/Divider';
import CallMadeIcon from '@mui/icons-material/CallMade';
import ReactApexChart from 'react-apexcharts';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { makeStyles } from '@mui/styles';
import { styled } from '@mui/material/styles'
import TextField from '@mui/material/TextField'
import Box from '@mui/material/Box'
import SendIcon from '@mui/icons-material/Send';
import InputAdornment from '@mui/material/InputAdornment';
import Send from 'assets/images/icons/sendmsg.svg'

const useStyles = makeStyles((theme) => ({
  chartContainer: {
    width: '100%', // By default, occupy full width
    height: '400px', // Default height for larger screens
    [theme.breakpoints.down('sm')]: {
      height: '300px', // Decrease height for screens below 600px width
    },
    [theme.breakpoints.down('xs')]: {
      height: '200px', // Decrease height for screens below 960px width
    },
  },
}));
function Myfeed() {
  const classes = useStyles();
  const options = {
    series: [
      {
        name: 'Net Profit',
        data: [44, 55, 57, 56, 61, 58, 63, 60, 66],
      },
      {
        name: 'Revenue',
        data: [76, 85, 101, 98, 87, 105, 91, 114, 94],
      },
      {
        name: 'Free Cash Flow',
        data: [35, 41, 36, 26, 45, 48, 52, 53, 41],
      },
    ],
    chart: {
      type: 'bar',
      height: 350,
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '55%',
        endingShape: 'rounded',
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: true,
      width: 2,
      colors: ['transparent'],
    },
    xaxis: {
      categories: ['01', '02', '03', '04', '05', '06', '07', '08', '09'],
    },

    fill: {
      opacity: 1,
    },
    tooltip: {
      y: {
        formatter: function (val) {
          return '$ ' + val + ' thousands';
        },
      },
    },
  };
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}  sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', p: 2 }}>
        <img src={logo} alt="logo" style={{ marginRight: '16px', }} />
        {/* <Paper elevation={0} sx={{ p: 2 }}> */}
        <Typography variant="h6" color="text.primary">
          Good Morning: TLmedia has recently been sending less quality traffic than before, resulting in lower engagement and conversion rates. Please take this into consideration when evaluating your marketing strategies.
        </Typography>
        {/* </Paper> */}
      </Grid>
      <Grid item xs={12} sx={{ alignItems: 'center', p: 2 }}>
        <Paper elevation={0} sx={{ p: 2, borderRadius: '10px' }}>
          <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
            <div style={{ marginRight: '16px', backgroundColor: 'lightblue', borderRadius: '50%', width: '56px', height: '56px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <img src={spike} alt="spike" style={{ height: '28px', width: '28px', borderRadius: '50%' }} />
            </div>

            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <Typography sx={{
                fontFamily: 'Inter',
                fontSize: '16px',
                fontStyle: 'normal',
                fontWeight: 600,
                lineHeight: '100%',
              }}>
                Spike
              </Typography>

          

            </div>
            <Stack direction="row" spacing={2} alignItems="center" sx={{ borderRadius: '20%', border: '1px solid lightblue', p: '8px', justifyContent: 'end', ml: '70%' }}>
              <AddIcon style={{ height: '28px', width: '28px' }} />
            </Stack>

            <Stack direction="row" spacing={2} alignItems="center" sx={{ borderRadius: '20%', border: '1px solid lightblue', p: '8px', justifyContent: 'end', ml: '1%' }}>
              <img src={spike} alt="spike" style={{ height: '28px', width: '28px', }} />
            </Stack>
            <Stack direction="row" spacing={2} alignItems="center" sx={{ borderRadius: '20%', border: '1px solid lightblue', p: '8px', justifyContent: 'end', ml: '1%' }}>
              <MoreVertIcon style={{ height: '28px', width: '28px' }} />
            </Stack>
          </div>
          <Divider sx={{ mt: '2%' }} />

          <Paper elevation={0} sx={{ p: 2, borderRadius: '10px' }}>
            <ReactApexChart options={options} series={options.series} type="bar" height={250} />
         </Paper>

          <Divider sx={{ mt: '2%' }} />
          <div style={{ display: 'flex' }}>
            <Stack
              direction="row"
              spacing={2}
              alignItems="center"
              sx={{
                display: 'flex',
                width: '36px',
                height: '36px',
                padding: '11.7px 0px 11.3px 0px',
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: '6.75px',
                border: '1px solid #1F1F1F', // You can use the color directly here
                mt: "2%"
              }}
            >
              <Typography
                sx={{
                  color: '#1F1F1F', // You can use the color directly here
                  textAlign: 'center',
                  fontFamily: 'Work Sans',
                  fontSize: '12.6px',
                  fontStyle: 'normal',
                  fontWeight: 600,
                  lineHeight: '12.6px',
                  letterSpacing: '0.504px',
                  textTransform: 'capitalize',
                }}
              >
                IM
              </Typography>
            </Stack>
            {/* <ChatFormWrapper sx={{ mt: "1%", ml: "1%" }}> */}
            <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center', mt: '2%', ml: '2%' }}>
      <TextField
        fullWidth
        size='small'
        placeholder='Type your message here…'
        sx={{
          borderRadius: '8px',
          border: '1px solid #EBEBEB',
          background: '#FAFAFA', // You can use the color directly here
          '& .MuiOutlinedInput-root': {
            borderRadius: '8px',
            '& fieldset': {
              border: '0 !important',
            },
          },
          '& .MuiOutlinedInput-input': {
            paddingLeft: 0,
          },
        }}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
             
             <img src={Send} alt="Send"  />
            </InputAdornment>
          ),
        }}
      />
    </Box>
              {/* <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <IconButton size='small' sx={{ color: 'text.primary' }}>
            <Microphone sx={{ fontSize: '1.375rem' }} />
          </IconButton>
          <IconButton size='small' component='label' htmlFor='upload-img' sx={{ mr: 4, color: 'text.primary' }}>
            <Attachment sx={{ fontSize: '1.375rem' }} />
            <input hidden type='file' id='upload-img' />
          </IconButton>
          <Button type='submit' variant='contained'>
            Send
          </Button>
        </Box> */}
            {/* </ChatFormWrapper> */}
          </div>
        </Paper>

      </Grid>
    </Grid>

  )
}

export default Myfeed