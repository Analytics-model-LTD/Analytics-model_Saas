import React, { useState } from 'react'
import TextField from '@mui/material/TextField'
import IconButton from '@mui/material/IconButton'

import { Paper, Grid, Chip, Stack } from "@mui/material";
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import { styled } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import logo from 'assets/images/icons/Analytics Model Playground/1440px/Feed/download 1.jpg';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Divider from '@mui/material/Divider';
import TableViewIcon from '@mui/icons-material/TableView';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import InputAdornment from '@mui/material/InputAdornment';
import Send from 'assets/images/icons/sendmsg.svg'
import AddIcon from '@mui/icons-material/Add';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import ReactApexChart from 'react-apexcharts';

import Table from '@mui/material/Table'
import TableRow from '@mui/material/TableRow'
import TableHead from '@mui/material/TableHead'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
const createData = (name, calories, fat, carbs, protein) => {
  return { name, calories, fat, carbs, protein }
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9)
]
function Insight() {
  const [isChecked, setIsChecked] = useState(false);
  const [isdatachecked, setDataischecked] = useState(false);
  const [isChartView, setIsChartView] = useState(false);
  const cardBackgroundColor = isChecked ? 'lightblue' : '';
  const cardcolor = isdatachecked ? 'lightblue' : '';
  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
  };
  const handleCheckboxChangedata = (event) => {
    setDataischecked(event.target.checked);
  };
  const toggleView = () => {
    setIsChartView(!isChartView);
  };
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

    <div style={{ position: 'relative', height: '100vh', overflow: 'hidden' }}>
      <div
        style={{
          overflowY: 'auto',
          height: 'calc(100% - 56px)', // Subtract the height of the fixed text field
        }}
      >
        <div style={{ padding: '16px' }}>
          <Grid container spacing={6}>
            <Grid item xs={12} sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', p: 2 }}>
              <img src={logo} alt="logo" style={{ marginRight: '16px' }} />
              <Typography variant="h6" color="text.primary">
                Hii there! tell me how can I help you?
                You can also choose from the preset suggestions
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6} md={3} sx={{ pt: theme => `${theme.spacing(2)} !important`, ml: '6%' }}>
              <Card sx={{ overflow: 'visible', position: 'relative', backgroundColor: cardBackgroundColor }}>
                <CardContent>
                  <Typography variant="h6" color="text.primary">
                    "Display the revenue from the top three categories over the past three days"
                  </Typography>
                  <FormControlLabel
                    required
                    control={<Checkbox checked={isChecked} onChange={handleCheckboxChange} />}
                  />
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={12} sm={6} md={3} sx={{ pt: theme => `${theme.spacing(2)} !important` }}>
              <Card sx={{ overflow: 'visible', position: 'relative', backgroundColor: cardcolor }}>
                <CardContent>
                  <Typography variant="h6" color="text.primary">
                    "Display the revenue from the top three categories over the past three days"
                  </Typography>
                  <FormControlLabel
                    required
                    control={<Checkbox checked={isdatachecked} onChange={handleCheckboxChangedata} />}
                  />
                </CardContent>
              </Card>
            </Grid>

          </Grid>
          <Grid container spacing={6} sx={{ mt: '5%' }}>
            <Grid item xs={12} sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', p: 2 }}>
            <img src={logo} alt="logo" style={{ marginRight: '16px', marginTop: '-50%' }} />

              <Grid item xs={12} sx={{ alignItems: 'center', p: 2 }}>
                <Paper elevation={0} sx={{ p: 2, borderRadius: '10px' }}>
                  <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                    <div style={{ marginRight: '16px', backgroundColor: 'lightblue', borderRadius: '50%', width: '56px', height: '56px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      {/* <img src={spike} alt="spike" style={{ height: '28px', width: '28px', borderRadius: '50%' }} /> */}
                      {isChartView ? <> <TrendingUpIcon  /></> : <><TableViewIcon /></>} 
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                      <Typography sx={{
                        fontFamily: 'Inter',
                        fontSize: '16px',
                        fontStyle: 'normal',
                        fontWeight: 600,
                        lineHeight: '100%',
                      }}>
                       {isChartView ? 'Chart' : 'Table'}
                      </Typography>



                    </div>
                    <Stack
                      direction="row"
                      spacing={2}
                      alignItems="center"
                      justifyContent="center"
                      sx={{
                        borderRadius: '8px',
                        border: '1px solid lightblue',
                        p: '8px',
                        width: '20%',
                        ml: '25%',
                        cursor: 'pointer', // Optional: Change cursor to pointer to indicate it's clickable
                      }}
                      onClick={toggleView}
                    >
                      {isChartView ? <> 
                        <Typography variant="subtitle1" sx={{ display: 'flex', alignItems: 'center' }}>
                        Chart
                        <TrendingUpIcon sx={{ marginLeft: '8px' }} />
                      </Typography>
                    </>
                       : <> 
                      <Typography variant="subtitle1" sx={{ display: 'flex', alignItems: 'center' }}>
                        Table
                        <TableViewIcon sx={{ marginLeft: '8px' }} />
                      </Typography>
                      </>}
                     

                    </Stack>



                    <Stack direction="row" spacing={2} alignItems="center" justifyContent="center" sx={{ borderRadius: '8px', border: '1px solid lightblue', p: '8px', width: '20%' ,ml:'2%'}}>
                      <Typography variant="subtitle1" sx={{ display: 'flex', alignItems: 'center' }}>
                        Dashboard
                        <AddIcon style={{ height: '20px', width: '20px', marginLeft: '4px' }} />
                      </Typography>
                    </Stack>




                    <Stack direction="row" spacing={2} alignItems="center" sx={{ borderRadius: '20%', border: '1px solid lightblue', p: '8px', justifyContent: 'end', ml: '10%' }}>
                      <MoreVertIcon style={{ height: '28px', width: '28px' }} />
                    </Stack>
                  </div>
                  {isChartView ? <>          <Paper elevation={0} sx={{ p: 2, borderRadius: '10px' }}>
            <ReactApexChart options={options} series={options.series} type="bar" height={250} />
         </Paper>  </> : <> <TableContainer component={Paper} sx={{mt:'2%'}}>
      <Table sx={{ minWidth: 650 }} aria-label='simple table'>
        <TableHead>
          <TableRow>
            <TableCell>Dessert (100g serving)</TableCell>
            <TableCell align='right'>Calories</TableCell>
            <TableCell align='right'>Fat (g)</TableCell>
            <TableCell align='right'>Carbs (g)</TableCell>
            <TableCell align='right'>Protein (g)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow
              key={row.name}
              sx={{
                '&:last-of-type td, &:last-of-type th': {
                  border: 0
                }
              }}
            >
              <TableCell component='th' scope='row'>
                {row.name}
              </TableCell>
              <TableCell align='right'>{row.calories}</TableCell>
              <TableCell align='right'>{row.fat}</TableCell>
              <TableCell align='right'>{row.carbs}</TableCell>
              <TableCell align='right'>{row.protein}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer></>} 
         
      
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

                              <img src={Send} alt="Send" />
                            </InputAdornment>
                          ),
                        }}
                      />
                    </Box>

                  </div>



                </Paper>

              </Grid>
        
            </Grid>
         
          </Grid>
        </div>

      </div>
      <div
        style={{
          position: 'fixed',
          bottom: 0,
          backgroundColor: 'white',
          width: '100%',
          borderRadius: '8px',
          borderTop: '1px solid #EBEBEB', // Add a border at the top of the footer
        }}
      >
        {/* Footer with fixed input field and Send button */}
        <Paper elevation={0} sx={{ p: 2 }}>
          <TextField

            size='small'
            placeholder='Type your message here…'
            sx={{
              width: '75%',
              borderRadius: '8px',
              border: '1px solid #EBEBEB',
              background: '#FAFAFA',
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
                  <img src={Send} alt="Send" />
                </InputAdornment>
              ),
            }}
            style={{
              marginLeft: '8px', // Add some left margin to the text field
            }}
          />
        </Paper>
      </div>
    </div>


  )
}

export default Insight