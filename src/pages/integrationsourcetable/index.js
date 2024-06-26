import React, { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';
// ** MUI Imports
// import {Paper  }from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableRow from '@mui/material/TableRow';
import TableHead from '@mui/material/TableHead';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TablePagination from '@mui/material/TablePagination';
// import Addicon from 'assets/images/icons/icons8-add-48.png';
import { Typography, Paper } from '@mui/material';
// import { Grid } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { deleteIntegretionData, fetchAllintegretionData, getAllintegretionData } from 'Slice/integrationsourcesSlice';
import { dispatch } from 'store/index';
import Grid from '@mui/material/Grid';
import AddIcon from '@mui/icons-material/Add';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import Switch from '@mui/material/Switch';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import DeleteIcon from '@mui/icons-material/Delete';
const columns = [
    { id: 'connectionName', label: 'Connection name', minWidth: 170, align: 'center' },

    { id: 'status', label: 'Status', minWidth: 100, align: 'center' },
    { id: 'connectionSource', label: 'Connection Source ', minWidth: 170, align: 'center' },
    {
        id: 'projectId',
        label: 'ProjectId',
        minWidth: 170,
        align: 'center',
        format: (value) => value.toLocaleString('en-US')
    },
    {
        id: 'tableId',
        label: 'TableId ',
        minWidth: 170,
        align: 'center',
        format: (value) => value.toLocaleString('en-US')
    },
    {
        id: 'autoscan',
        label: 'Auto Scan',
        minWidth: 170,
        align: 'center',
        format: (value) => value.toLocaleString('en-US')
    },
    {
        id: 'action',
        label: 'Action',
        minWidth: 170,
        align: 'center',
        format: (value) => value.toLocaleString('en-US')
    }
];
function createData(connectionName, connectionSource, status, projectId, tableId) {
    const scanallvertical = projectId / tableId;
    return { connectionName, connectionSource, status, projectId, tableId };
}

// const rows = [
//     createData('India', 'IN', 1324171354, 3287263),
//     createData('China', 'CN', 1403500365, 9596961),
//     createData('Italy', 'IT', 60483973, 301340),
//     createData('United States', 'US', 327167434, 9833520),
//     createData('Canada', 'CA', 37602103, 9984670),
//     createData('Australia', 'AU', 25475400, 7692024),
//     createData('Germany', 'DE', 83019200, 357578),
//     createData('Ireland', 'IE', 4857000, 70273),
//     createData('Mexico', 'MX', 126577691, 1972550),
//     createData('Japan', 'JP', 126317000, 377973),
//     createData('France', 'FR', 67022000, 640679),
//     createData('United Kingdom', 'GB', 67545757, 242495),
//     createData('Russia', 'RU', 146793744, 17098246),
//     createData('Nigeria', 'NG', 200962417, 923768),
//     createData('Brazil', 'BR', 210147125, 8515767)
// ];
const handleEdit = () => { };

function Integrationsourcestable() {
    const getdata = useSelector(getAllintegretionData);
    const dispatch = useDispatch();
    const [rows, setrows] = useState();
    const navigate = useNavigate();
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(2);

    useEffect(() => {
        dispatch(fetchAllintegretionData(page))
            .unwrap()
            .then((res) => {
                console.log(res.data);
                setrows(res.data.count);
            });
    }, [dispatch, page, rows, rowsPerPage]);


    useEffect(() => {
        console.log(getdata);
    }, [getdata]);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };
    const handleNavigation = () => {
        navigate("/integrationsources")
    };

    const onDeleteItem = (value) => {
        const apiUrl = 'https://2m2rc19wr6.execute-api.eu-north-1.amazonaws.com/dev/api/analytics/delete';
        const token = localStorage.getItem('TOKEN');
        // Define headers
        const headers = {
            "content-type": "application/json",
            Authorization: `Bearer ${token}`,
        };
        // Make an API call using Axios with headers
        axios.post(apiUrl, { id: value.id }, {
            headers: headers
        })
            .then(response => {
                toast.success('Deleted successfully .', {
                    position: 'top-center'
                })
                dispatch(fetchAllintegretionData(page));
                console.log('Item deleted successfully', response);
            })
            .catch(error => {
                // Handle errors here
                console.error('Error deleting item', error);
            });
    };
    return (
        <><ToastContainer autoClose={1000} />
            <Grid container spacing={2}>
                <Grid item xs={12} sx={{ display: 'flex' }} onClick={handleNavigation}>
                    <AddIcon />
                    <Typography variant="h5">NEW METRIC</Typography>
                </Grid>
                <Paper sx={{ width: '100%', overflow: 'hidden', mt: '2%' }}>
                    <TableContainer sx={{ maxHeight: 440, }}>
                        <Table stickyHeader aria-label="sticky table">
                            <TableHead>
                                <TableRow>
                                    {columns.map((column) => (
                                        <TableCell key={column.id} align={column.align}>
                                            {column.label}
                                        </TableCell>
                                    ))}
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {getdata.map((row) => (
                                    <TableRow key={row.id} hover role="checkbox">
                                        <TableCell style={{ textAlign: 'center' }}>{row.connectionName}</TableCell>
                                        <TableCell style={{ textAlign: 'center' }}>{row.status}</TableCell>
                                        <TableCell style={{ textAlign: 'center' }}>{row.connectionSource}</TableCell>
                                        <TableCell style={{ textAlign: 'center' }}>{row.projectId}</TableCell>
                                        <TableCell style={{ textAlign: 'center' }}>{row.tableId}</TableCell>
                                        <TableCell style={{ textAlign: 'center' }}>  <Switch defaultChecked color="primary" /></TableCell>
                                        <TableCell style={{ textAlign: 'center' }} onClick={() => onDeleteItem(row)}>  <DeleteIcon /></TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>

                    <TablePagination
                        sx={{ mt: '-2%' }}
                        rowsPerPageOptions={[10, 25, 100]}
                        component="div"
                        count={rows ? rows : 0}
                        rowsPerPage={rowsPerPage}
                        page={page}
                        onPageChange={handleChangePage}
                        onRowsPerPageChange={handleChangeRowsPerPage}
                    />
                </Paper>
            </Grid>
        </>
    );
}

export default Integrationsourcestable;
