import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import { Paper, Grid, Chip, Stack } from "@mui/material";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Card from "@mui/material/Card";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import logo from "assets/images/icons/Analytics Model Playground/1440px/Feed/download 1.jpg";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Divider from "@mui/material/Divider";
import TableViewIcon from "@mui/icons-material/TableView";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import InputAdornment from "@mui/material/InputAdornment";
import Send from "assets/images/icons/sendmsg.svg";
import AddIcon from "@mui/icons-material/Add";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import ReactApexChart from "react-apexcharts";
import CircularProgress from "@mui/material/CircularProgress";
import Table from "@mui/material/Table";
import TableRow from "@mui/material/TableRow";
import TableHead from "@mui/material/TableHead";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import InsightTableChart from "components/InsightTableChart";
import { createIntegrationQuery } from "Slice/querySlice";
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import {
  fetchAllintegretionData,
  getAllintegretionData,
} from "Slice/integrationsourcesSlice";

function Insight() {
  const [isChecked, setIsChecked] = useState(false);
  const [isdatachecked, setDataischecked] = useState(false);
  const [instructions, setInstructions] = useState("");
  const [integration, setIntegration] = useState();
  const queryLoading = useSelector((state) => state.query.loading);
  const queryHistory = useSelector((state) => state.query.history);
  const integrationsources = useSelector(getAllintegretionData);
  const dispatch = useDispatch();
  const cardBackgroundColor = isChecked ? "lightblue" : "";
  const cardcolor = isdatachecked ? "lightblue" : "";
  const navigate = useNavigate();
  const [typographyContent, setTypographyContent] = useState('');
  const [typography, setTypography] = useState('');
  useEffect(() => {
    dispatch(fetchAllintegretionData(0));
  }, [dispatch]);




  console.log("integrationsources", integrationsources.length > 0);
  const sendMessage = (message) => {
    if (!integration) {
      alert("Please select an integration");
      return;
    }

    dispatch(
      createIntegrationQuery({
        integrationId: integration,
        instructions: message,
      })
    );
  };

  const handleSendMessage = (message) => {
    if (!message) return;

    sendMessage(message);
    setInstructions("");
  };

  const onEnter = (e) => {
    if (e.keyCode == 13) {
      handleSendMessage(e.target.value);
    }
  };
  const textchange = (e) => {
    setTypographyContent('');
    setTypography('');
    // setIsChecked(false);

    setInstructions(e.target.value)
  }
  const handleCheckboxChange = () => {
    setTypography('');
    setIsChecked(!isChecked);
    if (!isChecked) {
      setDataischecked(false);
      setTypographyContent(
        'Display the revenue from the top three categories over the past three days'
      );
    } else {
      setTypographyContent('');
    }
  };
  // const handleCheckboxChangedata = (event) => {
  //   setDataischecked(event.target.checked);
  // };
  const handleClicked = () => {
    navigate('/integrationsources');
  }
  const handleCheckboxChangedata = () => {
    setTypographyContent('');
    setDataischecked(!isdatachecked);
    if (!isdatachecked) {
      setIsChecked(false);
      setTypography(
        'Display the revenue from the top three'
      );
    } else {

      setTypography('');
    }
  };
  const mapQueryToComponent = (item, index) => {
    console.log(item);
    if (item.type === "TEXT") {
      return (
        <Grid
          container
          spacing={6}
          sx={{ mt: "2%" }}
          key={`${item.instructions}-${index}`}
        >
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
                <Typography variant="h6" color="text.primary">
                  {item.instructions}
                </Typography>
              </Paper>
            </Grid>
          </Grid>
        </Grid>
      );
    }

    if (item.type === "INSIGHT") {
      return (
        <InsightTableChart
          index={index}
          fields={item.query.fields}
          rows={item.query.result}
          chart={JSON.parse(JSON.stringify(item.query.chartConfig))}
          integrationId={integration}
          query={item.query.query}
          instructions={item.instructions}
        />
      );
    }

    if (item.type === "LOADING") {
      return (
        <Grid
          container
          spacing={6}
          sx={{ mt: "2%" }}
          key={`${item.type}-${index}`}
        >
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
                <Stack alignItems="center">
                  <CircularProgress size={128} />
                </Stack>
              </Paper>
            </Grid>
          </Grid>
        </Grid>
      );
    }

    return null;
  };

  return (
    <Grid container spacing={3}>
      <div
        style={{
          overflowY: "auto",
          // height: '100%', // Set the height to 100% to fill the entire viewport
          // padding: '16px',
          margin: "32px 34px ",
          marginLeft: "52px"
        }}
      >
        <div style={{ padding: "16px" }}>
          {integrationsources?.length > 0 ? <> <Grid container spacing={6}>
            <Grid item xs={12}>
              <Paper
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
                  Hii there! tell me how can I help you? You can also choose
                  from the preset suggestions
                </Typography>
              </Paper>
            </Grid>
            <Grid
              item
              xs={12}
              sm={6}
              md={3}
              sx={{ pt: (theme) => `${theme.spacing(2)} !important`, ml: "6%" }}
            >
              <Card
                sx={{
                  overflow: "visible",
                  position: "relative",
                  backgroundColor: cardBackgroundColor,
                }}
              >
                <CardContent>
                  <Typography variant="h6" color="text.primary">
                    "Display the revenue from the top three categories over the
                    past three days"
                  </Typography>
                  <FormControlLabel
                    required
                    control={
                      <Checkbox
                        checked={isChecked}
                        onChange={handleCheckboxChange}
                      />
                    }
                  />
                </CardContent>
              </Card>
            </Grid>

            <Grid
              item
              xs={12}
              sm={6}
              md={3}
              sx={{ pt: (theme) => `${theme.spacing(2)} !important` }}
            >
              <Card
                sx={{
                  overflow: "visible",
                  position: "relative",
                  backgroundColor: cardcolor,
                }}
              >
                <CardContent>
                  <Typography variant="h6" color="text.primary">
                    "Display the revenue from the top three categories over the
                    past three days"
                  </Typography>
                  <FormControlLabel
                    required
                    control={
                      <Checkbox
                        checked={isdatachecked}
                        onChange={handleCheckboxChangedata}
                      />
                    }
                  />
                </CardContent>
              </Card>
            </Grid>
          </Grid></> : <>

            <Card sx={{ minWidth: 275 }}>
              <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                  You do not have tracking metrics enabled yet.<br />
                  Please select your data connection first.
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" onClick={handleClicked}>connection</Button>
              </CardActions>
            </Card>
          </>}

          {queryHistory.map(mapQueryToComponent)}
        </div>
      </div>
      <div
        style={{
          position: "fixed",
          bottom: 0,
          backgroundColor: "white",
          width: "100%",
          borderRadius: "8px",
          borderTop: "1px solid #EBEBEB",
        }}
      >
        {/* Footer with fixed input field and Send button */}
        <Paper elevation={0} sx={{ p: 2, maxWidth: '100%' }}>
          <Grid container sx={{ display: "flex" }}>
            <Grid item xs={8} >
              <TextField

                placeholder="Type your message here…"
                onChange={textchange}
                // onChange={(e) => setInstructions(e.target.value)}
                onKeyDown={onEnter}
                value={instructions || typographyContent || typography}
                disabled={!integration || queryLoading === "pending"}
                sx={{
                  width: "98%",
                  borderRadius: "8px",
                  border: "1px solid #EBEBEB",
                  background: "#FAFAFA",
                  "& .MuiOutlinedInput-root": {
                    borderRadius: "8px",
                    "& fieldset": {
                      border: "0 !important",
                    },
                  },
                  "& .MuiOutlinedInput-input": {
                    paddingRight: 0,
                  },
                }}
                InputProps={{
                  endAdornment:
                    queryLoading === "pending" ? (
                      <CircularProgress size={16} />
                    ) : (
                      <InputAdornment
                        style={{ cursor: "pointer" }}
                        position="end"
                        onClick={() => handleSendMessage(instructions)}
                      >
                        <img src={Send} alt="Send" />
                      </InputAdornment>
                    ),
                }}
              />
            </Grid>
            <Grid item xs={4}   >
              <FormControl fullWidth >
                <InputLabel id="demo-simple-select-label">
                  Connection
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={integration}
                  label="Connection"
                  onChange={(e) => setIntegration(e.target.value)}
                  sx={{


                    borderRadius: "8px",
                    border: "1px solid #EBEBEB",
                    background: "#FAFAFA",
                    "& .MuiOutlinedInput-root": {
                      borderRadius: "8px",
                      "& fieldset": {
                        border: "0 !important",
                      },
                    },
                    "& .MuiOutlinedInput-input": {
                      paddingRight: 0,
                    },
                  }}
                >
                  {integrationsources.map(({ id, connectionName }) => (
                    <MenuItem key={`${connectionName}-${id}`} value={id}>
                      {connectionName}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
          </Grid>
        </Paper>
      </div>
    </Grid>
  );
}

export default Insight;
