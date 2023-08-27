import React, { useState, useEffect } from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { logsData } from '../assets/MOCK_DATA (1)';
import { CenterFocusStrong, CenterFocusWeak } from '@mui/icons-material';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },

  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function CustomizedTable({ searchQuery }) {
  const filteredLogs = logsData.filter(log =>
    log.log_message.toLowerCase().includes(searchQuery.toLowerCase()) ||
    log.request_method.toLowerCase().includes(searchQuery.toLowerCase())
  );
  return (
    <TableContainer sx={{paddingTop:1}} component={Paper}>
      <Table sx={{ minWidth:700 }} aria-label="customized table">
      <TableHead sx={{color:'blue'}} className='text-center'>
  <TableRow>
    <StyledTableCell>Log ID</StyledTableCell>
    {/* <StyledTableCell sx={{width:180}}>Response Code</StyledTableCell> */}
    <StyledTableCell>Response Time</StyledTableCell>
    <StyledTableCell>Method</StyledTableCell>
    <StyledTableCell>Byte Sent</StyledTableCell>
    <StyledTableCell>Byte Received</StyledTableCell>
    <StyledTableCell>Error message</StyledTableCell>
    <StyledTableCell>Logs message</StyledTableCell>
    <StyledTableCell>Region</StyledTableCell>
  </TableRow>
</TableHead>
        <TableBody>  
          {filteredLogs.map((log) => (
            <StyledTableRow key={log.log_id}>
              <StyledTableCell component="th" scope="row">
                {log.log_id}
              </StyledTableCell>
              {/* <StyledTableCell>{log.response_code}</StyledTableCell> */}
              <StyledTableCell>{log.response_time}</StyledTableCell>
              <StyledTableCell>{log.request_method}</StyledTableCell>
              <StyledTableCell>{log.bytes_sent}</StyledTableCell>
              <StyledTableCell>{log.bytes_received}</StyledTableCell>
              <StyledTableCell>{log.error_message}</StyledTableCell>
              <StyledTableCell>{log.log_message}</StyledTableCell>
              <StyledTableCell sx={{width:80}}>{log.aws_region}</StyledTableCell>
              
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
export default CustomizedTable;