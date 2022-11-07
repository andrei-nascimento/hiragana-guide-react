import React from 'react';
import './Navbar.css';
import { AppBar, Box, Grid, IconButton, Toolbar, Typography } from '@material-ui/core';
// @ts-ignore
import logo from '../../../assets/logo.png';
import MenuIcon from '@material-ui/icons/Menu';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
// @ts-ignore
import CustomizedMenus from '../Menu/Menu.tsx';


function Navbar() {

    let navigate = useNavigate();
    let navbarComponent;

    navbarComponent = <AppBar position="static" className='navbar'>
    <Toolbar className='toolbar'>
        <Grid className='principal' onClick={() => {navigate('/home')}}>
            <img src={logo} alt="logo" className='navbar-logo' />
            <Box className='menu'>
                <Box>
                    <Typography className='titulo-nav'>
                        Hiragana Guide
                    </Typography>
                </Box>
            </Box>
        </Grid>
        <Box>
            <CustomizedMenus />
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