import React from "react";
import './Additional.css';
import { Button, Grid, Paper, Typography } from '@material-ui/core';
import { Link } from "react-router-dom";

function Additional() {
    return(
        <Grid container className='container-basic'>
            <Grid item xs={12}>
                <Typography className='title-basic'>
                    Hiragana Table - Additional
                </Typography>
            </Grid>
        <Grid container xs={8} className='container-basic-paper'>
            <Grid item className='papers-basic'>
                <Paper className='paper-none-dash' elevation={0}>-</Paper>
                <Paper className='paper-none' elevation={0}>YA</Paper>
                <Paper className='paper-none' elevation={0}>YU</Paper>
                <Paper className='paper-none' elevation={0}>YŪ</Paper>
                <Paper className='paper-none' elevation={0}>YO</Paper>
                <Paper className='paper-none' elevation={0}>YŌ</Paper>
            </Grid>
            <Grid item className='papers-basic'>
                <Paper className='paper-none' elevation={0}>K</Paper>
                <Paper className='paper'>きゃ<p className='silaba'>kya</p></Paper>
                <Paper className='paper'>きゅ<p className='silaba'>kyu</p></Paper>
                <Paper className='paper'>きゅう<p className='silaba'>kyū</p></Paper>
                <Paper className='paper'>きょ<p className='silaba'>kyo</p></Paper>
                <Paper className='paper'>きょう<p className='silaba'>kyō</p></Paper>
            </Grid>
            <Grid item className='papers-basic'>
                <Paper className='paper-none' elevation={0}>S</Paper>
                <Paper className='paper'>しゃ<p className='silaba'>sha</p></Paper>
                <Paper className='paper'>しゅ<p className='silaba'>shu</p></Paper>
                <Paper className='paper'>しゅう<p className='silaba'>shū</p></Paper>
                <Paper className='paper'>しょ<p className='silaba'>sho</p></Paper>
                <Paper className='paper'>しょう<p className='silaba'>shō</p></Paper>
            </Grid>
            <Grid item className='papers-basic'>
                <Paper className='paper-none' elevation={0}>T</Paper>
                <Paper className='paper'>ちゃ<p className='silaba'>cha</p></Paper>
                <Paper className='paper'>ちゅ<p className='silaba'>chu</p></Paper>
                <Paper className='paper'>ちゅう<p className='silaba'>chū</p></Paper>
                <Paper className='paper'>ちょ<p className='silaba'>cho</p></Paper>
                <Paper className='paper'>ちょう<p className='silaba'>chō</p></Paper>
                </Grid>
            <Grid item className='papers-basic'>
                <Paper className='paper-none' elevation={0}>N</Paper>
                <Paper className='paper'>にゃ<p className='silaba'>nya</p></Paper>
                <Paper className='paper'>にゅ<p className='silaba'>nyu</p></Paper>
                <Paper className='paper'>にゅう<p className='silaba'>nyū</p></Paper>
                <Paper className='paper'>にょ<p className='silaba'>nyo</p></Paper>
                <Paper className='paper'>にょう<p className='silaba'>nyō</p></Paper>
            </Grid>
            <Grid item className='papers-basic'>
                <Paper className='paper-none' elevation={0}>H</Paper>
                <Paper className='paper'>ひゃ<p className='silaba'>hya</p></Paper>
                <Paper className='paper'>ひゅ<p className='silaba'>hyu</p></Paper>
                <Paper className='paper'>ひゅう<p className='silaba'>hyū</p></Paper>
                <Paper className='paper'>ひょ<p className='silaba'>hyo</p></Paper>
                <Paper className='paper'>ひょう<p className='silaba'>hyō</p></Paper>
            </Grid>
            <Grid item className='papers-basic'>
                <Paper className='paper-none' elevation={0}>M</Paper>
                <Paper className='paper'>みゃ<p className='silaba'>mya</p></Paper>
                <Paper className='paper'>みゅ<p className='silaba'>myu</p></Paper>
                <Paper className='paper'>みゅう<p className='silaba'>myū</p></Paper>
                <Paper className='paper'>みょ<p className='silaba'>myo</p></Paper>
                <Paper className='paper'>みょう<p className='silaba'>myō</p></Paper>
            </Grid>
            <Grid item className='papers-basic'>
                <Paper className='paper-none' elevation={0}>R</Paper>
                <Paper className='paper'>りゃ<p className='silaba'>rya</p></Paper>
                <Paper className='paper'>りゅ<p className='silaba'>ryu</p></Paper>
                <Paper className='paper'>りゅう<p className='silaba'>ryū</p></Paper>
                <Paper className='paper'>りょ<p className='silaba'>ryo</p></Paper>
                <Paper className='paper'>りょう<p className='silaba'>ryō</p></Paper>
            </Grid>
            <Grid item className='papers-basic'>
                <Paper className='paper-none' elevation={0}>G</Paper>
                <Paper className='paper'>ぎゃ<p className='silaba'>gya</p></Paper>
                <Paper className='paper'>ぎゅ<p className='silaba'>gyu</p></Paper>
                <Paper className='paper'>ぎゅう<p className='silaba'>gyū</p></Paper>
                <Paper className='paper'>ぎょ<p className='silaba'>gyo</p></Paper>
                <Paper className='paper'>きょう<p className='silaba'>gyō</p></Paper>
            </Grid>
            <Grid item className='papers-basic'>
                <Paper className='paper-none' elevation={0}>J</Paper>
                <Paper className='paper'>じゃ<p className='silaba'>ja</p></Paper>
                <Paper className='paper'>じゅ<p className='silaba'>ju</p></Paper>
                <Paper className='paper'>じゅう<p className='silaba'>jū</p></Paper>
                <Paper className='paper'>じょ<p className='silaba'>jo</p></Paper>
                <Paper className='paper'>じょう<p className='silaba'>jō</p></Paper>
            </Grid>
            <Grid item className='papers-basic'>
                <Paper className='paper-none' elevation={0}>CH</Paper>
                <Paper className='paper'>ちゃ<p className='silaba'>cha</p></Paper>
                <Paper className='paper'>ちゅ<p className='silaba'>chu</p></Paper>
                <Paper className='paper'>ちゅう<p className='silaba'>chū</p></Paper>
                <Paper className='paper'>ちょ<p className='silaba'>cho</p></Paper>
                <Paper className='paper'>ちょう<p className='silaba'>chō</p></Paper>
            </Grid>
            <Grid item className='papers-basic'>
                <Paper className='paper-none' elevation={0}>B</Paper>
                <Paper className='paper'>びゃ<p className='silaba'>bya</p></Paper>
                <Paper className='paper'>びゅ<p className='silaba'>byu</p></Paper>
                <Paper className='paper'>びゅう<p className='silaba'>byū</p></Paper>
                <Paper className='paper'>びょ<p className='silaba'>byo</p></Paper>
                <Paper className='paper'>びょう<p className='silaba'>byō</p></Paper>
            </Grid>
            <Grid item className='papers-basic'>
                <Paper className='paper-none' elevation={0}>P</Paper>
                <Paper className='paper'>ぴゃ<p className='silaba'>pya</p></Paper>
                <Paper className='paper'>ぴゅ<p className='silaba'>pyu</p></Paper>
                <Paper className='paper'>ぴゅう<p className='silaba'>pyū</p></Paper>
                <Paper className='paper'>ぴょ<p className='silaba'>pyo</p></Paper>
                <Paper className='paper'>ぴょう<p className='silaba'>pyō</p></Paper>
            </Grid>
        </Grid>
        <Grid container className='bottom-button'>
            <Grid item xs={3} className='basic-button'>
                <Link to='/basic-table' className="link">
                    <Button className='essential-button'>Basic</Button>
                </Link>
                <Link to='/essential-table' className="link">
                    <Button className='additional-button'>Essential</Button>
                </Link>
            </Grid>
        </Grid>
        </Grid>
    )
}

export default Additional;