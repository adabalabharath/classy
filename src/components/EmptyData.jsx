import { Grid, Typography } from '@mui/material'
import React from 'react'

const EmptyData = () => {
  return (
    <Grid container alignItems={'center'} direction='column'>
        <Typography variant='h4' fontWeight={'bold'} color='error'>Seems like our vendor is in lunch break like SBI!!!!</Typography>
        <Grid item>
        <img src='https://media.tenor.com/uUqm-NBftk0AAAAM/knocking-head-stupid.gif'/>
        </Grid>
    </Grid>
  )
}

export default EmptyData