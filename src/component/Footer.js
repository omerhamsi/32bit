import React from 'react'
import Dummy from "../images/dummy.png"
import "../style/Footer.css"
import { Box,Typography } from '@mui/material'
function Footer() {
  return (
    <Box className='Footer'>
        <img src={Dummy} alt="" />
        <Typography variant="h4" component="h5" style={{marginLeft:"20px"}}>Dummy Footer</Typography>
    </Box>
  )
}
export default Footer
