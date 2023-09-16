import { Card, Paper, Grid, Chip, Typography } from "@mui/material";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { styled } from '@mui/system';

// line-height: 1.5rem;
//     font-family: "Public Sans", sans-serif;
//     display: table-cell;
//     vertical-align: inherit;
//     border-bottom: 1px solid rgb(240, 240, 240);
//     text-align: right;
//     color: rgb(38, 38, 38);
//     flex-direction: row-reverse;
//     padding: 12px 24px 12px 12px;
//     border-top-color: rgb(240, 240, 240);
//     border-right-color: rgb(240, 240, 240);
//     border-left-color: rgb(240, 240, 240);
//     font-size: 0.75rem;
//     font-weight: 700;
//     text-transform: uppercase;

const StyledTableHead = styled(TableHead)`
    display: table-header-group;
    background-color: rgb(250, 250, 250);
    border-top: 1px solid rgb(240, 240, 240);
    border-bottom: 2px solid rgb(240, 240, 240);
`

const StyledTableHeadCell = styled(TableCell)`
    line-height: 1.5rem;
    font-family: "Public Sans", sans-serif;
    display: table-cell;
    vertical-align: inherit;
    border-bottom: 1px solid rgb(240, 240, 240);
    color: rgb(38, 38, 38);
    flex-direction: row-reverse;
    border-top-color: rgb(240, 240, 240);
    border-right-color: rgb(240, 240, 240);
    border-left-color: rgb(240, 240, 240);
    font-size: 0.75rem;
    font-weight: 700;
    text-transform: uppercase;
`

const Billing = () => {

    return <Grid container spacing={3}>
        <Grid item xs={12}>
            <Paper elevation={0} sx={{ p: 2 }}>
                <Typography variant="h6" color="text.primary">
                    Your plan: <Chip sx={{ display: 'inline', fontSize: "inherit", fontWeight: "bold", padding: 0.5, marginLeft: 1 }} label="Advanced" variant="outlined" color="success" />
                </Typography>
            </Paper>
        </Grid>
        <Grid item xs={12}>
            <TableContainer component={Paper} elevation={0}>
                <Table sx={{ border: '1px solid rgb(240, 240, 240)' }}>
                    <StyledTableHead>
                        <TableRow>
                            <StyledTableHeadCell>Month</StyledTableHeadCell>
                            <StyledTableHeadCell>Plan</StyledTableHeadCell>
                            <StyledTableHeadCell align="right">Total Costs</StyledTableHeadCell>
                            <StyledTableHeadCell align="center">Status</StyledTableHeadCell>
                        </TableRow>
                    </StyledTableHead>
                    <TableBody>
                        {
                            [
                                { month: "July 2023", plan: "Advanced", totalCosts: "$200", status: "Open" },
                                { month: "June 2023", plan: "Advanced", totalCosts: "$200", status: "Closed" },
                                { month: "May 2023", plan: "Advanced", totalCosts: "$200", status: "Closed" },
                                { month: "April 2023", plan: "Advanced", totalCosts: "$200", status: "Closed" },
                                { month: "March 2023", plan: "Advanced", totalCosts: "$200", status: "Closed" },
                                { month: "Feb 2023", plan: "Advanced", totalCosts: "$200", status: "Closed" },
                            ].map((row) => (
                                <TableRow
                                    key={row.month}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell component="th" scope="row">
                                        {row.month}
                                    </TableCell>
                                    <TableCell>{row.plan}</TableCell>
                                    <TableCell align="right">{row.totalCosts}</TableCell>
                                    <TableCell align="center">
                                        <Chip
                                            label={row.status}
                                            color={row.status === "Open" ? "success" : "info"}
                                            style={{ backgroundColor: row.status === "Open" ? "" : "#1E87F0" }}
                                        />

                                    </TableCell>
                                </TableRow>
                            ))
                        }
                    </TableBody>
                </Table>
            </TableContainer>
        </Grid>
    </Grid>

}

export default Billing;