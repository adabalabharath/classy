import { Card, Grid, Typography } from '@mui/material';
import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const SearchCard = () => {
    const searched = useSelector((store) => store?.searched);
  return (
    <Card sx={{position:'absolute',width:'250px'}}>
        {searched?.map(x=>x.models.map(y=>{return(<>
          <Link to='/'>
            <Typography >{y}</Typography>
          </Link>
        </>)}))}
    </Card>
  )
}

export default SearchCard