import * as React from 'react';
import { useEffect, useState } from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { styled } from '@mui/material/styles';
import Badge, { BadgeProps } from '@mui/material/Badge';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';

const StyledBadge = styled(Badge)<BadgeProps>(({ theme }) => ({
    '& .MuiBadge-badge': {
        right: -3,
        top: 13,
        border: `2px solid ${theme.palette.background.paper}`,
        padding: '0 4px',
    },
  }));

export default function NavBar({product, cleanFilter}) {

  const [open,setOpen] = useState(false)
  const [total,setTotal] = useState(0)


  useEffect( ()  => { 
    console.log(product) 
  },[product] )


  const toggleMenu = () => setOpen(!open)
  
  const resetFilter = () => cleanFilter()
  

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            News
          </Typography>
          <IconButton aria-label="cart">
            <StyledBadge  onClick={toggleMenu} badgeContent={product.length} color="secondary">
              <ShoppingCartIcon />
            </StyledBadge>
          </IconButton>
          <Menu
            id="basic-menu"
            open={open}>
            <Button onClick={toggleMenu} variant="text">Cerrar</Button>
            { product.map((item, index: number) => (
              <MenuItem key={index}>{`${item.title} - S/${item.price}`}   </MenuItem>
              )) }
              {/* <MenuItem>Total: {product[index]}</MenuItem> */}
            {
              product.length != 0 && (
                <Button onClick={resetFilter} variant="text">Vaciar</Button>
              )
            }
          </Menu>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
