import React from 'react'
import { useState } from 'react'

// ** MUI Imports
import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import TableRow from '@mui/material/TableRow'
import TableHead from '@mui/material/TableHead'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TablePagination from '@mui/material/TablePagination'
import Addicon from 'assets/images/icons/icons8-add-48.png'
import { Grid } from "@mui/material";
const columns = [
    { id: 'connectionname', label: 'Connection name', minWidth: 170,   align: 'center', },
    { id: 'status', label: 'Status', minWidth: 100,   align: 'center', },
    {
      id: 'plateform',
      label: 'Platform',
      minWidth: 170,
      align: 'center',
      format: value => value.toLocaleString('en-US')
    },
    {
      id: 'datapath',
      label: 'Data Path',
      minWidth: 170,
      align: 'center',
      format: value => value.toLocaleString('en-US')
    },
    {
      id: 'scanallvertical',
      label: 'Scan All Vertical',
      minWidth: 170,
      align: 'center',
      format: value => value.toFixed(2)
    }
  ]
function createData(connectionname, status, plateform, datapath) {
  const scanallvertical = plateform / datapath

  return { connectionname, status, plateform, datapath, scanallvertical }
}

const rows = [
  createData('India', 'IN', 1324171354, 3287263),
  createData('China', 'CN', 1403500365, 9596961),
  createData('Italy', 'IT', 60483973, 301340),
  createData('United States', 'US', 327167434, 9833520),
  createData('Canada', 'CA', 37602103, 9984670),
  createData('Australia', 'AU', 25475400, 7692024),
  createData('Germany', 'DE', 83019200, 357578),
  createData('Ireland', 'IE', 4857000, 70273),
  createData('Mexico', 'MX', 126577691, 1972550),
  createData('Japan', 'JP', 126317000, 377973),
  createData('France', 'FR', 67022000, 640679),
  createData('United Kingdom', 'GB', 67545757, 242495),
  createData('Russia', 'RU', 146793744, 17098246),
  createData('Nigeria', 'NG', 200962417, 923768),
  createData('Brazil', 'BR', 210147125, 8515767)
]

function Integrationsourcestable() {
    const [page, setPage] = useState(0)
    const [rowsPerPage, setRowsPerPage] = useState(10)
  
    const handleChangePage = (event, newPage) => {
      setPage(newPage)
    }
  
    const handleChangeRowsPerPage = event => {
      setRowsPerPage(+event.target.value)
      setPage(0)
    }
  return (
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
    
    <TableContainer sx={{ maxHeight: 440 }}>
      <Table stickyHeader aria-label='sticky table'>
        <TableHead>
          <TableRow>
            {columns.map(column => (
              <TableCell key={column.id} align={column.align} sx={{ minWidth: column.minWidth }}>
                {column.label}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(row => {
            return (
              <TableRow hover role='checkbox' tabIndex={-1} key={row.status}>
                {columns.map(column => {
                  const value = row[column.id]

                  return (
                    <TableCell key={column.id} align={column.align}>
                      {column.format && typeof value === 'number' ? column.format(value) : value}
                    </TableCell>
                  )
                })}
              </TableRow>
            )
          })}
      
        </TableBody>
       
      </Table>
     
    </TableContainer>
    <Grid sx={{ ml:"75%"}}>
        <img src={Addicon} alt="Addicon" />
   </Grid>
    <TablePagination
    sx={{mt:"-2%"}}
      rowsPerPageOptions={[10, 25, 100]}
      component='div'
      count={rows.length}
      rowsPerPage={rowsPerPage}
      page={page}
      onPageChange={handleChangePage}
      onRowsPerPageChange={handleChangeRowsPerPage}
    />



  </Paper>
  )
}

export default Integrationsourcestable