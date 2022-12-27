import React from 'react';
import './Navbar.css';
import { AppBar, Box, Grid, Toolbar, Typography } from '@material-ui/core';
// @ts-ignore
import logo from '../../../assets/imgs/logo.png';
import { useNavigate } from 'react-router-dom';
// @ts-ignore
import CustomizedMenus from '../Menu/Menu.tsx';
// @ts-ignore
import MenuBookIcon from '@material-ui/icons/MenuBook';


function Navbar() {

    let navigate = useNavigate();
    let navbarComponent;

    navbarComponent = 
    <AppBar position="static" className='navbar'>
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
            <Grid className='content'>
                <Box>
                    <MenuBookIcon 
                    className='material-navbar'
                    onClick={() => {navigate('/books')}}/>
                </Box>
                <Box>
                    <CustomizedMenus />
                </Box>
            </Grid>
        </Toolbar>
    </AppBar>

    return(
        <>
            {navbarComponent}
        </>
    )
}

export default Navbar;