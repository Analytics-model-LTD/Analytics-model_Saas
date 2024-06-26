import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Card, Paper, Grid, Chip, Typography, Stack } from "@mui/material";
import logo from "assets/images/icons/Analytics Model Playground/1440px/Feed/download 1.jpg";
import spike from "assets/images/icons/spike.svg";
import AddIcon from "@mui/icons-material/Add";
import Divider from "@mui/material/Divider";
import CallMadeIcon from "@mui/icons-material/CallMade";
import ReactApexChart from "react-apexcharts";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { makeStyles } from "@mui/styles";
import { styled } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import SendIcon from "@mui/icons-material/Send";
import InputAdornment from "@mui/material/InputAdornment";
import Send from "assets/images/icons/sendmsg.svg";
import { fetchAllFeedData, getAllFeedData } from "Slice/feedSlice";
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import Avatar from '@mui/material/Avatar';
import axios from "../../../node_modules/axios/index";
const useStyles = makeStyles((theme) => ({
  chartContainer: {
    width: "100%", // By default, occupy full width
    height: "400px", // Default height for larger screens
    [theme.breakpoints.down("sm")]: {
      height: "300px", // Decrease height for screens below 600px width
    },
    [theme.breakpoints.down("xs")]: {
      height: "200px", // Decrease height for screens below 960px width
    },
  },
}));

function Myfeed() {
  const getdata = useSelector(getAllFeedData);
  const dispatch = useDispatch();
  const [feed, setFeed] = useState([]);
  const [allFeed, setAllFeed] = useState([]);
  const [chartData, setChartData] = useState([]);

  const [page, setPage] = useState(0);
  const navigate = useNavigate();
  // const [rows, setrows] = useState();
  // const [rowsPerPage, setRowsPerPage] = useState(10);

  useEffect(() => {
    dispatch(fetchAllFeedData(page))
      .unwrap()
      .then((res) => {
        setFeed(res.data);
        setChartData(res);
        console.log(res.data);
        // console.log(feed.series)
      });
    getAllFeed();
  }, [dispatch]);

  const getAllFeed = () => {
    const apiUrl = 'https://kh0fjnpaqc.execute-api.eu-north-1.amazonaws.com/dev/feed';
    const token = localStorage.getItem('TOKEN');
    // Define headers
    const headers = {
      "content-type": "application/json",
      Authorization: `Bearer ${token}`,
    };
    // Make an API call using Axios with headers
    axios.get(apiUrl, {
      headers: headers
    })
      .then(response => {
        setAllFeed(response.feed ? response.feed : response.data)
        console.log(allFeed);
      })
      .catch(error => {
        // Handle errors here
        console.error('Error item', error);
      });
  };
  const demoChart = {
    series: [{
      data: [400, 430, 448, 470, 540, 580, 690, 1100, 1200, 1380]
    }],
    options: {
      chart: {
        type: 'bar',
        height: 350
      },
      plotOptions: {
        bar: {
          borderRadius: 4,
          horizontal: true,
        }
      },
      dataLabels: {
        enabled: false
      },
      xaxis: {
        categories: ['South Korea', 'Canada', 'United Kingdom', 'Netherlands', 'Italy', 'France', 'Japan',
          'United States', 'China', 'Germany'
        ],
      }
    }
  }
  return (
    <>
      <Grid container sx={{ display: "flex", justifyContent: "center" }}>
        {/* <Grid
          item
          xs={12}
        
          sx={{
            minWidth: {
              xs: "100%",
              sm: "100%",
              md: "100%",
            },
            ml: 4,
            mr: 4,
          }}
        > */}
        {/* <Paper
            elevation={0}
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              p: 2,
            }}
          >
            <img src={logo} alt="logo" style={{ marginRight: "16px" }} />
          
            <Typography variant="h6" color="text.primary">
              Good Morning: TLmedia has recently been sending less quality
              traffic than before, resulting in lower engagement and conversion
              rates. Please take this into consideration when evaluating your
              marketing strategies. {feed.length}
            </Typography>
          </Paper> */}

        {/* </Grid> */}

        {feed.map((item, index) => {
          // const options = {
          //   plotOptions: {
          //     bar: {
          //       horizontal: false,
          //       columnWidth: "55%",
          //       endingShape: "rounded",
          //     },
          //   },
          //   dataLabels: {
          //     enabled: false,
          //   },
          //   stroke: {
          //     show: true,
          //     width: 2,
          //     colors: ["transparent"],
          //   },
          //   fill: {
          //     opacity: 1,
          //   },
          //   tooltip: {
          //     y: {
          //       formatter: function (val) {
          //         return "$ " + val + " thousands";
          //       },
          //     },
          //   },
          //   ...!!item?.ChartCode
          // };
          return (
            <Grid
              item
              key={item.Id}
              xs={11}

            // sx={{
            //   minWidth: {
            //     xs: "100%",
            //     sm: "100%",
            //     md: "100%",
            //   },
            // }}
            >
              <Paper elevation={0} sx={{ p: 2, borderRadius: "10px" }}>
                <Grid container xs={12} >
                  <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'space-between' }}>

                    <Grid item xs={6} sx={{ display: "flex", alignItems: "center", gap: "5px" }}>

                      <Avatar
                        sx={{ bgcolor: "lightblue" }}
                        alt=""
                        src={spike}
                      >
                      </Avatar>
                      <Box sx={{ display: 'flex' }}>
                        <Typography
                          sx={{
                            fontFamily: "Inter",
                            fontSize: "16px",
                            fontStyle: "normal",
                            fontWeight: 600,

                          }}
                        >
                          {item.insightText}
                        </Typography>
                      </Box>
                    </Grid>

                    <Grid item xs={6}>
                      <Box sx={{ display: 'flex', gap: '5px', justifyContent: "flex-end" }} >
                        <Stack
                          direction="row"
                          spacing={2}
                          alignItems="center"
                          sx={{
                            borderRadius: "20%",
                            border: "1px solid lightblue",
                            p: "8px",
                            justifyContent: "end",
                            // ml: "70%",
                          }}
                        >
                          <AddIcon style={{ height: "28px", width: "28px" }} />
                        </Stack>

                        <Stack
                          direction="row"
                          spacing={2}
                          alignItems="center"
                          sx={{
                            borderRadius: "20%",
                            border: "1px solid lightblue",
                            p: "8px",
                            justifyContent: "end",
                            // ml: "1%",
                          }}
                        >
                          {/* <img
                      src={spike}
                      alt="spike"
                      style={{ height: "28px", width: "28px" }}
                    /> */}
                          <ContentCopyIcon style={{ height: "28px", width: "28px" }} />
                        </Stack>
                        <Stack
                          direction="row"
                          spacing={2}
                          alignItems="center"
                          sx={{
                            borderRadius: "20%",
                            border: "1px solid lightblue",
                            p: "8px",
                            justifyContent: "end",
                            // ml: "1%",
                          }}
                        >
                          <MoreVertIcon style={{ height: "28px", width: "28px" }} />
                        </Stack>
                      </Box>
                    </Grid>
                  </Grid>
                </Grid>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  {/* <div
                    style={{
                      marginRight: "16px",
                      backgroundColor: "lightblue",
                      borderRadius: "50%",
                      width: "56px",
                      height: "56px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <img
                      src={spike}
                      alt="spike"
                      style={{
                        height: "28px",
                        width: "28px",
                        borderRadius: "50%",
                      }}
                    />
                  </div> */}

                  {/* <div style={{ display: "flex", flexDirection: "column" }}>
                    <Typography
                      sx={{
                        fontFamily: "Inter",
                        fontSize: "16px",
                        fontStyle: "normal",
                        fontWeight: 600,
                        lineHeight: "100%",
                      }}
                    >
                      Spike
                    </Typography>
                  </div> */}
                  {/* <Stack
                    direction="row"
                    spacing={2}
                    alignItems="center"
                    sx={{
                      borderRadius: "20%",
                      border: "1px solid lightblue",
                      p: "8px",
                      justifyContent: "end",
                      ml: "70%",
                    }}
                  >
                    <AddIcon style={{ height: "28px", width: "28px" }} />
                  </Stack> */}

                  {/* <Stack
                    direction="row"
                    spacing={2}
                    alignItems="center"
                    sx={{
                      borderRadius: "20%",
                      border: "1px solid lightblue",
                      p: "8px",
                      justifyContent: "end",
                      ml: "1%",
                    }}
                  >
                    <img
                      src={spike}
                      alt="spike"
                      style={{ height: "28px", width: "28px" }}
                    />
                    <ContentCopyIcon style={{ height: "28px", width: "28px" }} />
                  </Stack> */}
                  {/* <Stack
                    direction="row"
                    spacing={2}
                    alignItems="center"
                    sx={{
                      borderRadius: "20%",
                      border: "1px solid lightblue",
                      p: "8px",
                      justifyContent: "end",
                      ml: "1%",
                    }}
                  >
                    <MoreVertIcon style={{ height: "28px", width: "28px" }} />
                  </Stack> */}
                </div>
                <Divider sx={{ mt: "2%" }} />

                <Paper elevation={0} sx={{ p: 2, borderRadius: "10px" }}>
                  {/* <ReactApexChart
                    options={options}
                    series={options.series}
                    type="bar"
                    height={250}
                  /> */}
                  {/* {feed.map((item, index) => { */}
                  <ReactApexChart
                    options={{
                      plotOptions: {
                        bar: {
                          horizontal: false,
                          columnWidth: "55%",
                          endingShape: "rounded",
                        },
                      },
                      dataLabels: {
                        enabled: false,
                      },
                      stroke: {
                        show: true,
                        width: 2,
                        colors: ["transparent"],
                      },
                      fill: {
                        opacity: 1,
                      },
                      tooltip: {
                        y: {
                          formatter: function (val) {
                            return "$ " + val + " thousands";
                          },
                        },
                      },
                      chart: {
                        type: item?.ChartCode?.chart?.type,
                        height: 350
                      },
                      // plotOptions: {
                      //   bar: {
                      //     borderRadius: 4,
                      //     horizontal: true,
                      //   }
                      // },
                      // dataLabels: {
                      //   enabled: false
                      // },
                      xaxis: {
                        categories: item?.ChartCode?.xaxis && item?.ChartCode?.xaxis?.categories ? item?.ChartCode?.xaxis?.categories : []
                      }
                    }}
                    series={
                      [{
                        data: item?.ChartCode?.series && item?.ChartCode?.series.length ? item?.ChartCode?.series[0]?.data : []
                      }]
                    }
                    type="bar"
                    height={250}
                  />
                  {/* })} */}
                </Paper>
              </Paper>
            </Grid>
          );
        })}
      </Grid>
    </>
  );
}

export default Myfeed;
