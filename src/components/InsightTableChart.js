import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Paper, Grid, Chip, Stack } from "@mui/material";
import Select from '@mui/material/Select';

import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MenuList from "@mui/material/MenuList";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Input from "@mui/material/Input";
import FormHelperText from "@mui/material/FormHelperText";
import TableViewIcon from "@mui/icons-material/TableView";
import ContentCut from "@mui/icons-material/ContentCut";
import ContentCopy from "@mui/icons-material/ContentCopy";
import ContentPaste from "@mui/icons-material/ContentPaste";
import Cloud from "@mui/icons-material/Cloud";
import Typography from "@mui/material/Typography";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import AddIcon from "@mui/icons-material/Add";
import CheckIcon from "@mui/icons-material/Check";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import TuneIcon from "@mui/icons-material/Tune";
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
import { createInsight } from "Slice/insightSlice";
import CircularProgress from "@mui/material/CircularProgress";
import { createIntegrationQuery, tuneIntegrationQuery } from "Slice/querySlice";
// import InputLabel from '@mui/material/InputLabel';
// import MenuItem from '@mui/material/MenuItem';
// import FormControl from '@mui/material/FormControl';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
const InsightTableChart = ({
  index,
  rows,
  fields,
  chart,
  integrationId,
  query,
  instructions,
}) => {
  const insights = useSelector((state) => state.insights);
  const dispatch = useDispatch();
  const [saved, setSaved] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [modalOpen, setModalOpen] = React.useState(false);
  const handleModalOpen = () => setModalOpen(true);
  const handleModalClose = () => setModalOpen(false);
  const [selectedTab, setSelectedTab] = useState(0);
  const [instructionValue, setInstructionValue] = useState('');
  const handleTabChange = (event, newValue) => {
    setSelectedTab(newValue);
  };
  const [isChartView, setIsChartView] = useState(false);
  const toggleView = () => {
    setIsChartView(!isChartView);
  };

  const [tuneQuery, setTuneQuery] = React.useState(query);
  const [tuneInstructions, setTuneInstructions] = React.useState("");

  const menuOpen = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const addToDashboard = () => {
    if (saved) return;

    dispatch(
      createInsight({
        integrationId,
        query,
        instructions,
        insightType: isChartView ? "chart" : "table",
        data: { rows, fields },
        chartConfig: chart,
      })
    );

    setSaved(true);
  };

  const handleTuneSubmit = (event) => {
    event.preventDefault();
    if (!tuneQuery || !tuneInstructions || !integrationId) return;

    dispatch(
      tuneIntegrationQuery({
        index,
        query: tuneQuery,
        instructions: tuneInstructions,
        integrationId,
      })
    );
    setTuneInstructions("");
    handleModalClose();
  };
  function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            {children}
          </Box>
        )}
      </div>
    );
  }
  const handleSendMessage = (message) => {

    console.log(document.getElementById('outlined-disabled').value);
    if (!document.getElementById('outlined-disabled').value) return;

    sendMessage(document.getElementById('outlined-disabled').value);
  };
  const sendMessage = (message) => {
    if (!document.getElementById('outlined-disabled').value) {
      alert("Please insert an integration");
      return;
    }

    dispatch(
      createIntegrationQuery({
        integrationId: 40,
        instructions: message,
      })
    );
    handleModalClose();
  };
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
                  flex: 1,
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
                onClick={addToDashboard}
                sx={{
                  flex: 1,
                  borderRadius: "8px",
                  border: "1px solid lightblue",
                  p: "8px",
                  width: "20%",
                  ml: "2%",
                }}
              >
                <Typography
                  variant="subtitle1"
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    cursor: "pointer",
                  }}
                >
                  {insights.loading === "pending" ? (
                    <CircularProgress size={16} />
                  ) : saved ? (
                    <CheckIcon
                      style={{
                        height: "20px",
                        width: "20px",
                        marginLeft: "4px",
                      }}
                    />
                  ) : (
                    <>
                      Dashboard
                      <AddIcon
                        style={{
                          height: "20px",
                          width: "20px",
                          marginLeft: "4px",
                        }}
                      />
                    </>
                  )}
                </Typography>
              </Stack>
              <Stack
                direction="row"
                spacing={2}
                alignItems="center"
                justifyContent="end"
                sx={{
                  flex: 1,
                  display: "flex",
                }}
              >
                <div
                  style={{
                    cursor: "pointer",
                    display: "flex",
                    borderRadius: "20%",
                    border: "1px solid lightblue",
                    padding: "8px",
                    alignItems: "center",
                  }}
                >
                  <MoreVertIcon
                    style={{ height: "28px", width: "28px" }}
                    onClick={handleModalOpen}
                  />
                  {/* <Menu
                    anchorEl={anchorEl}
                    open={menuOpen}
                    onClose={handleClose}
                  >
                    <MenuList>
                      <MenuItem onClick={handleModalOpen}>
                        <ListItemIcon>
                          <TuneIcon fontSize="small" />
                        </ListItemIcon>
                        <ListItemText>Tune it</ListItemText>
                      </MenuItem>
                    </MenuList>
                  </Menu> */}
                </div>
              </Stack>
            </div>
            {isChartView ? (
              <>
                {" "}
                <Paper elevation={0} sx={{ p: 2, borderRadius: "10px" }}>
                  <ReactApexChart
                    options={chart}
                    series={chart.series}
                    type={chart.chart.type}
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
      <Modal open={modalOpen} onClose={handleModalClose}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 400,
            bgcolor: "background.paper",
            border: "2px solid #000",
            boxShadow: 24,
            p: 4,
          }}
        >
          {/* Add Tabs and TabPanels for Chart and Table */}
          <Tabs value={selectedTab} onChange={handleTabChange}>
            <Tab label="Table" />
            <Tab label="Chart" />
          </Tabs>

          <TabPanel value={selectedTab} index={0}>
            <form onSubmit={handleTuneSubmit}>
              <Stack spacing={4}>
                <FormControl>
                  <TextField
                    label="SQL"
                    multiline
                    rows={6}
                    onChange={(e) => setTuneQuery(e.target.value)}
                    value={tuneQuery}
                    defaultValue={query}
                  />
                  <FormHelperText id="sql-query-input-helper-text">
                    SQL query to select data
                  </FormHelperText>
                </FormControl>
                <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                  <TextField
                    id="outlined-disabled"
                    label="instruction"
                  //  defaultValue="instruction"
                  // onChange={textchange}
                  />
                  <FormHelperText id="sql-query-input-helper-text">
                    instruction for fine tuning the visualization.
                    For example,"Convert the chart to line chart and
                    change the colors to green and red according to the
                    data"
                  </FormHelperText>
                </FormControl>


                <Button type="submit" variant="contained" style={{ backgroundColor: 'black', color: 'white' }} onClick={() => handleSendMessage(instructionValue)}>
                  Save Changes
                </Button>
              </Stack>
            </form>
          </TabPanel>

          <TabPanel value={selectedTab} index={1}>
            <form onSubmit={handleTuneSubmit}>
              <Stack spacing={4}>
                <FormControl>
                  <TextField
                    label="SQL"
                    multiline
                    rows={6}
                    onChange={(e) => setTuneQuery(e.target.value)}
                    value={tuneQuery}
                    defaultValue={query}
                  />
                  <FormHelperText id="sql-query-input-helper-text">
                    SQL query to select data
                  </FormHelperText>
                </FormControl>
                <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                  <TextField
                    id="outlined-disabled"
                    label="instruction"

                  //  defaultValue="instruction"
                  />
                  <FormHelperText id="sql-query-input-helper-text">
                    instruction for fine tuning the visualization.
                    For example,"Convert the chart to line chart and
                    change the colors to green and red according to the
                    data"
                  </FormHelperText>
                </FormControl>


                <Button type="submit" variant="contained" style={{ backgroundColor: 'black', color: 'white' }} >
                  Save Changes
                </Button>
              </Stack>
            </form>
          </TabPanel>


        </Box>
      </Modal>
    </Grid>
  );
};

export default InsightTableChart;
