import React from 'react'
import { useState } from 'react';
import { AppBar, Button, IconButton, Menu, MenuItem, Toolbar } from '@mui/material'
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import { Container } from '@mui/system';
import Box from '@mui/material/Box';
import MenuIcon from '@mui/icons-material/Menu';
const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = useState(null);


  const Nothing = styled(Button)({
    backgroundColor:"purple",
    textTransform:"none",
    padding:"5px 12px",
    borderColor:"#000",
    fontFamily:[
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:hover':{
      boxsShadow:'none',
      backgroundColor:"black",
      borderColor:"purple"
    }
  })
  const pages = ['Products', 'Pricing', 'Blog'];
  const handleCloseNavMenu = () =>{
    setAnchorElNav(null);
  }
 const handleLogin = () =>{
  console.log("logged in")
 }
 const handleOpenNavMenu = (event) => {
  setAnchorElNav(event.currentTarget);
};
   return (
    <>
    <AppBar position='static'>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
           <Typography
           variant='h6'
           noWrap
           herf="/"
           sx={{
            mr:2,
            display:{xs:'none' , md:"flex"},
            fontWeight:700,
            letterSpacing:'.3rem',
            color:'inherit',
            textDecoration:'none'
           }}
           >
             LOGO
           </Typography>
           <Box sx={{flexGrew:1, display:{xs:'flex',md:'none'}}}>
                <IconButton 
                size='large'
                color="secondary"
                aria-label='users links'
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                > 
                <MenuIcon/>
                </IconButton>
                <Menu
                id="menu-bar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical:'bottom',
                  horizontal:'left'
                }}
                keepMounted
                transformOrigin={{
                  vertical:'top',
                  horizontal:'left'
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{display:{xs:'block' , md:'none'}}}
                >
                 {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
                </Menu>
           </Box>
           <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            LOGO
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex', justifyContent: 'center' }}}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page}
              </Button>
            ))}
          </Box>
          <Nothing variant='warning' onClick={handleLogin}>Login</Nothing>
          
        </Toolbar>
      </Container>
    </AppBar>
    </>
  )
}
export default Navbar