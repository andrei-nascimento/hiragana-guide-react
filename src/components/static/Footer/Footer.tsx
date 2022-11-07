import React from "react";
import './Footer.css';
import { Grid, Typography } from '@material-ui/core';

function Footer() {
    let footerComponent;
    footerComponent = 
    <Grid container className='footer-container'>
        <Grid item xs={12}>
            <Grid className='footer'>
                <Typography className='texto-footer'>
                    © Andrei Nascimento - 2022
                </Typography>
            </Grid>
        </Grid>
    </Grid>
    
    return(
        <>
            {footerComponent}
        </>
    )
}

export default Footer;