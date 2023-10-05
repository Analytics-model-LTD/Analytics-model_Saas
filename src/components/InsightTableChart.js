import React from "react";
import { Paper, Grid, Chip, Stack } from "@mui/material";
import Box from "@mui/material/Box";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import TableViewIcon from "@mui/icons-material/TableView";
import Typography from "@mui/material/Typography";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import AddIcon from "@mui/icons-material/Add";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Table from "@mui/material/Table";
import TableRow from "@mui/material/TableRow";
import TableHead from "@mui/material/TableHead";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import Divider from "@mui/material/Divider";
import ReactApexChart from "react-apexcharts";
import logo from "assets/images/icons/Analytics Model Playground/1440px/Feed/download 1.jpg";
import Send from "assets/images/icons/sendmsg.svg";

const InsightTableChart = ({ isChartView, toggleView, rows, fields, chart }) => {
  return (
    <Grid container spacing={1} sx={{ my: "2%" }}>
      <Grid
        item
        xs={12}
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
        }}
      >
        <img src={logo} alt="logo" style={{ marginRight: "16px" }} />

        <Grid item xs={12} sx={{ alignItems: "center" }}>
          <Paper elevation={0} sx={{ p: 2, borderRadius: "10px" }}>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <div
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
                {/* <img src={spike} alt="spike" style={{ height: '28px', width: '28px', borderRadius: '50%' }} /> */}
                {isChartView ? (
                  <>
                    {" "}
                    <TrendingUpIcon />
                  </>
                ) : (
                  <>
                    <TableViewIcon />
                  </>
                )}
              </div>

              <div style={{ display: "flex", flexDirection: "column" }}>
                <Typography
                  sx={{
                    fontFamily: "Inter",
                    fontSize: "16px",
                    fontStyle: "normal",
                    fontWeight: 600,
                    lineHeight: "100%",
                  }}
                >
                  {isChartView ? "Chart" : "Table"}
                </Typography>
              </div>
              <Stack
                direction="row"
                spacing={2}
                alignItems="center"
                justifyContent="center"
                sx={{
                  borderRadius: "8px",
                  border: "1px solid lightblue",
                  p: "8px",
                  width: "20%",
                  ml: "25%",
                  cursor: "pointer", // Optional: Change cursor to pointer to indicate it's clickable
                }}
                onClick={toggleView}
              >
                {!isChartView ? (
                  <>
                    <Typography
                      variant="subtitle1"
                      sx={{ display: "flex", alignItems: "center" }}
                    >
                      Chart
                      <TrendingUpIcon sx={{ marginLeft: "8px" }} />
                    </Typography>
                  </>
                ) : (
                  <>
                    <Typography
                      variant="subtitle1"
                      sx={{ display: "flex", alignItems: "center" }}
                    >
                      Table
                      <TableViewIcon sx={{ marginLeft: "8px" }} />
                    </Typography>
                  </>
                )}
              </Stack>
              <Stack
                direction="row"
                spacing={2}
                alignItems="center"
                justifyContent="center"
                sx={{
                  borderRadius: "8px",
                  border: "1px solid lightblue",
                  p: "8px",
                  width: "20%",
                  ml: "2%",
                }}
              >
                <Typography
                  variant="subtitle1"
                  sx={{ display: "flex", alignItems: "center" }}
                >
                  Dashboard
                  <AddIcon
                    style={{
                      height: "20px",
                      width: "20px",
                      marginLeft: "4px",
                    }}
                  />
                </Typography>
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
                  ml: "10%",
                }}
              >
                <MoreVertIcon style={{ height: "28px", width: "28px" }} />
              </Stack>
            </div>
            {isChartView ? (
              <>
                {" "}
                <Paper elevation={0} sx={{ p: 2, borderRadius: "10px" }}>
                  <ReactApexChart
                    options={chart}
                    series={chart.series}
                    type="bar"
                    height={250}
                  />
                </Paper>{" "}
              </>
            ) : (
              <>
                {" "}
                <TableContainer component={Paper} sx={{ my: "2%" }}>
                  <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                      <TableRow>
                        {fields.map((field) => (
                          <TableCell key={field.name}>
                            {field.name} ({field.type})
                          </TableCell>
                        ))}
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {rows.map((row) => (
                        <TableRow
                          key={row[fields[0].name]}
                          sx={{
                            "&:last-of-type td, &:last-of-type th": {
                              border: 0,
                            },
                          }}
                        >
                          {Object.keys(row).map((key) => (
                            <TableCell component="th" scope="row">
                              {row[key]}
                            </TableCell>
                          ))}
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </>
            )}
            {/* <Divider sx={{ mt: "2%" }} />
            <div style={{ display: "flex" }}>
              <Stack
                direction="row"
                spacing={2}
                alignItems="center"
                sx={{
                  display: "flex",
                  width: "36px",
                  height: "36px",
                  padding: "11.7px 0px 11.3px 0px",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: "6.75px",
                  border: "1px solid #1F1F1F", // You can use the color directly here
                  mt: "2%",
                }}
              >
                <Typography
                  sx={{
                    color: "#1F1F1F", // You can use the color directly here
                    textAlign: "center",
                    fontFamily: "Work Sans",
                    fontSize: "12.6px",
                    fontStyle: "normal",
                    fontWeight: 600,
                    lineHeight: "12.6px",
                    letterSpacing: "0.504px",
                    textTransform: "capitalize",
                  }}
                >
                  IM
                </Typography>
              </Stack>
              <Box
                sx={{
                  flexGrow: 1,
                  display: "flex",
                  alignItems: "center",
                  mt: "2%",
                  ml: "2%",
                }}
              >
                <TextField
                  fullWidth
                  size="small"
                  placeholder="Type your message here…"
                  sx={{
                    borderRadius: "8px",
                    border: "1px solid #EBEBEB",
                    background: "#FAFAFA", // You can use the color directly here
                    "& .MuiOutlinedInput-root": {
                      borderRadius: "8px",
                      "& fieldset": {
                        border: "0 !important",
                      },
                    },
                    "& .MuiOutlinedInput-input": {
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
            </div> */}
          </Paper>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default InsightTableChart;
