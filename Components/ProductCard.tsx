import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActions } from '@mui/material';
import Box from '@mui/material/Box';
import { useState } from 'react'

export default function ProductCard({data, handleSelected}) {

  const [ cart, setCart ] = useState(false)

  const selectProduct = () => {
    setCart(!cart)
    handleSelected()
  }

  return (
    <Card sx={{ maxWidth: 345 }}>

      <CardMedia
        component="img"
        height="200"
        image={ data.image }
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          { data.title }
        </Typography>
        <Typography variant="body2" color="text.secondary">
          { data.description }
        </Typography>
        <Typography variant="body2">
          <Box mt={2} fontSize={20} textAlign='right' >
            { `S/.${data.price}` }
          </Box>
        </Typography>
      </CardContent>

      <CardActions>
        <Button onClick={() => selectProduct()} size="large" variant="outlined" size="small" color="primary">
          {
            cart ? 'Eliminar' : 'Agregar'
          }
        </Button>
      </CardActions>
    </Card>
  );
}
