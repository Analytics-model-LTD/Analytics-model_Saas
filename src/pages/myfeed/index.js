import React from 'react'
import { Card, Paper, Grid, Chip, Typography, Stack } from "@mui/material";
import logo from 'assets/images/icons/Analytics Model Playground/1440px/Feed/download 1.jpg';
import spike from 'assets/images/icons/spike.svg'
import AddIcon from '@mui/icons-material/Add';
import Divider from '@mui/material/Divider';
import CallMadeIcon from '@mui/icons-material/CallMade';
import ReactApexChart from 'react-apexcharts';
import MoreVertIcon from '@mui/icons-material/MoreVert';
function Myfeed() {
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
            <Grid item xs={12} sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', p: 2 }}>
                <img src={logo} alt="logo" style={{ marginRight: '16px', }} />
                {/* <Paper elevation={0} sx={{ p: 2 }}> */}
                <Typography variant="h6" color="text.primary">
                    Good Morning: TLmedia has recently been sending less quality traffic than before, resulting in lower engagement and conversion rates. Please take this into consideration when evaluating your marketing strategies.
                </Typography>
                {/* </Paper> */}
            </Grid>
            <Grid item xs={12} sx={{ alignItems: 'center', p: 2 }}>
                <Paper elevation={0} sx={{ p: 2, borderRadius: '8px' }}>
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

                            <Typography sx={{
                                mt: '2px',
                                fontFamily: 'Inter',
                                fontSize: '12px',
                                fontStyle: 'normal',
                                fontWeight: 400, // Change the font weight to 400
                                lineHeight: '100%', // Change the line height to 100%
                                letterSpacing: '0.24px', // Add letter spacing
                                overflow: 'hidden', // Add overflow hidden
                                color: 'var(--carbon-400, #969696)', // Add color
                                textOverflow: 'ellipsis',
                            }}>
                                Drop in revenues that was caused by decrease of US, UK and FR’s RPM.
                            </Typography>

                        </div>
                        <Stack direction="row" spacing={2} alignItems="center" sx={{ borderRadius: '20%', border: '1px solid lightblue', p: '8px', justifyContent: 'end', ml: '27%' }}>
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
                    <Typography sx={{
                        mt: '4%',
                        color: 'var(--carbon-400, #969696)',
                        fontFeatureSettings: "'calt' off",
                        fontFamily: 'Inter',
                        fontSize: '12px',
                        fontStyle: 'normal',
                        fontWeight: 400,
                        lineHeight: 'normal',
                        letterSpacing: '0.24px',
                        textTransform: 'capitalize',
                    }}>
                        Metric #1
                    </Typography>
                    <div>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        
                        <Typography sx={{
                            mt: '2%',
                            color: 'var(--carbon-900, #1F1F1F)',
                            fontFeatureSettings: "'ss02' on, 'calt' off",
                            fontFamily: 'Work Sans',
                            fontSize: '64px',
                            fontStyle: 'normal',
                            fontWeight: 500,
                            lineHeight: '100%',
                        }}>
                            705
                        </Typography>
                        
                        <div style={{ display: 'flex', flexDirection: 'row',justifyContent:'center' }}>
                        <CallMadeIcon sx={{ ml: '8%', width: '15px', color: 'lightgreen',mt:'32%' }} />
                        <Typography sx={{ color: 'lightgreen' ,mt:'32%' }}>0.5%</Typography>


                        </div>
                       
                    </div>
                    <Typography sx={{ ml: '105px', mt: '-25px', color: 'var(--carbon-200, #C8C8C8)', fontFeatureSettings: "'calt' off", fontFamily: 'Inter', fontSize: '8px', fontStyle: 'normal', fontWeight: 500, lineHeight: '100%', textTransform: 'capitalize' }}>Last month</Typography>
                    
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <Typography sx={{
                                width: '125px',
                            mt: '10%',
                            borderRadius: '20px',
                            background: 'var(--carbon-0, #FAFAFA)',
                            display: 'flex',
                            padding: '6px 8px',
                            justifyContent: 'center',
                            alignItems: 'center',
                            gap: '8px'
                        }}>
                            Non-fiction
                            </Typography>
                            <Typography sx={{
                                ml:'2%',
                                mt: '10%',
                                width: '125px',
                                borderRadius: '20px',
                                background: 'var(--carbon-0, #FAFAFA)',
                                display: 'flex',
                                padding: '6px 8px',
                                justifyContent: 'center',
                                alignItems: 'center',
                                gap: '8px'
                            }}>
                                Event
                            </Typography>
                            <div style={{ flex: 1, marginLeft: '2%' }}> {/* Added a container for the chart */}
                            <ReactApexChart options={options} series={options.series} type="bar" height={250} />
                            </div>
                         
                        </div>

                    </div>

                </Paper>

            </Grid>
        </Grid>

    )
}

export default Myfeed