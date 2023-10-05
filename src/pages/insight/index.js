import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import { Paper, Grid, Chip, Stack } from "@mui/material";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import logo from "assets/images/icons/Analytics Model Playground/1440px/Feed/download 1.jpg";
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

const createData = (name, calories, fat, carbs, protein) => {
  return { name, calories, fat, carbs, protein };
};

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
];
function Insight() {
  const [isChecked, setIsChecked] = useState(false);
  const [isdatachecked, setDataischecked] = useState(false);
  const [isChartView, setIsChartView] = useState(false);
  const [instructions, setInstructions] = useState("");
  const query = useSelector((state) => state.query);
  console.log(query);
  const dispatch = useDispatch();
  const cardBackgroundColor = isChecked ? "lightblue" : "";
  const cardcolor = isdatachecked ? "lightblue" : "";
  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
  };
  const handleCheckboxChangedata = (event) => {
    setDataischecked(event.target.checked);
  };
  const toggleView = () => {
    setIsChartView(!isChartView);
  };
  const sendMessage = (message) => {
    dispatch(
      createIntegrationQuery({ integrationId: 24, instructions: message })
    )
      .unwrap()
      .then((res) => {
        setProjects(res.projects);
      });
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

  const mapQueryToComponent = (item, index) => {
    if (item.type === "TEXT") {
      return (
        <Grid container spacing={6} sx={{ mt: "2%" }}>
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
      console.log("item", item);
      console.log("rows", rows);
      return (
        <InsightTableChart
          isChartView={isChartView}
          toggleView={toggleView}
          fields={item.query.fields}
          rows={item.query.result}
          chart={JSON.parse(JSON.stringify(item.query.chartConfig))}
        />
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
        }}
      >
        <div style={{ padding: "16px" }}>
          <Grid container spacing={6}>
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
          </Grid>
          {query.history.map(mapQueryToComponent)}
        </div>
      </div>
      <div
        style={{
          position: "fixed",
          bottom: 0,
          backgroundColor: "white",
          width: "100%",
          borderRadius: "8px",
          borderTop: "1px solid #EBEBEB", // Add a border at the top of the footer
        }}
      >
        {/* Footer with fixed input field and Send button */}
        <Paper elevation={0} sx={{ p: 2 }}>
          <TextField
            size="small"
            placeholder="Type your message here…"
            onChange={(e) => setInstructions(e.target.value)}
            onKeyDown={onEnter}
            value={instructions}
            disabled={query.loading === "pending"}
            sx={{
              width: "75%",
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
                paddingLeft: 0,
              },
            }}
            InputProps={{
              endAdornment:
                query.loading === "pending" ? (
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
            style={{
              marginLeft: "8px", // Add some left margin to the text field
            }}
          />
        </Paper>
      </div>
    </Grid>
  );
}

export default Insight;
