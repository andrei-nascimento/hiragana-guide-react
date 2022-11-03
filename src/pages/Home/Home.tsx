import './Home.css';
import { Box, Button, Grid, Typography } from '@material-ui/core';
// @ts-ignore
import background from '../../assets/jp1.png';
// @ts-ignore
import learning from '../../assets/learning.png';
import React from 'react';

function Home() {
    
    return(
        <Grid container className='container-home'>
            <Grid item xs={12}>
                <div style={{ backgroundImage: `url(${background})` }} className='img-home'>
                    <Typography className='title-background'>
                        Study the hiragana alphabet easily
                    </Typography>
                    <Box className='button-background'>
                        <Button className='button-text'>
                            Discovery
                        </Button>
                    </Box>
                </div>
            </Grid>
            <Grid item xs={6} className='menu-left'>
                <Box className='central'>
                    <Typography className='menu-text'>With <strong>Higanana Guide</strong> you can practice and learn about the most important japanese alphabet. A simple way to improve your skills and make sure that your pronunciation will be correct. Start with the vogals and then, learn about the groups of syllables.
                    </Typography>
                    <Box className='button-box-menu'>
                        <Button className='button-menu'>
                            Hiragana Table
                        </Button>
                    </Box>
                </Box>
            </Grid>
            <Grid item xs={6} className='menu-right'>
                <img src={learning} alt="woman studying" className='woman'/>
            </Grid>
        </Grid>
    )
}

export default Home;