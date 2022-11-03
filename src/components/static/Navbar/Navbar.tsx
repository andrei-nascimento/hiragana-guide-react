import React from 'react';
import './Navbar.css';
import { AppBar, Box, Grid, IconButton, Link, Toolbar, Typography } from '@material-ui/core';
// @ts-ignore
import logo from '../../../assets/logo.png';
import MenuIcon from '@material-ui/icons/Menu'


function Navbar() {
    let navbarComponent;

    navbarComponent = <AppBar position="static" className='navbar'>
    
    <Toolbar className='toolbar'>
        <Grid className='principal'>
            <img src={logo} alt="logo" className='navbar-logo' />
            <Box className='menu'>
                <Box className='cursor'>
                    <Typography className='titulo-nav'>
                        Hiragana Guide
                    </Typography>
                </Box>
            </Box>
        </Grid>
        <Box>
            <IconButton>
                <MenuIcon />
            </IconButton>
        </Box>
    </Toolbar>
    </AppBar>

    return(
        <>
            {navbarComponent}
        </>
    )
}

export default Navbar;