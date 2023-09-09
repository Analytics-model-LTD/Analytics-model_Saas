import React from 'react'
import TextField from '@mui/material/TextField'
import IconButton from '@mui/material/IconButton'
import Box from '@mui/material/Box'
import { styled } from '@mui/material/styles'
import InputAdornment from '@mui/material/InputAdornment';
import Send from 'assets/images/icons/sendmsg.svg'
import { Card, Paper, Grid, Chip, Typography, Stack } from "@mui/material";
function Insight() {
    return (

        <div style={{ position: 'relative', height: '100vh', overflow: 'hidden' }}>
        <div
          style={{
            overflowY: 'auto',
            height: 'calc(100% - 56px)', // Subtract the height of the fixed text field
          }}
        >
          {/* Upper container with scrollable content */}
          <div style={{ padding: '16px' }}>
            {/* Place your chat content here */}
            {/* Example: */}
            <div>Message 1</div>
            <div>Message 2</div>
            {/* ... more messages ... */}
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
                width:'75%',
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