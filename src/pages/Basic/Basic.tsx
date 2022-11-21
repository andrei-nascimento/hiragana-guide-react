import React from "react";
import './Basic.css';
import { Button, Grid, Paper, Typography } from '@material-ui/core';
import { Link } from "react-router-dom"; 
// @ts-ignore 
import ButtonAudioA from "../../components/Audios.tsx";

function Basic() {
    return(
        <Grid container className='container-basic'>
            <Grid item xs={12}>
                <Typography className='title-basic'>
                    Hiragana Table - Basic
                </Typography>
            </Grid>
        <Grid container xs={8} className='container-basic-paper'>
            <Grid item className='papers-basic'>
                <Paper className='paper-none-dash' elevation={0}>-</Paper>
                <Paper className='paper-none' elevation={0}>A</Paper>
                <Paper className='paper-none' elevation={0}>I</Paper>
                <Paper className='paper-none' elevation={0}>U</Paper>
                <Paper className='paper-none' elevation={0}>E</Paper>
                <Paper className='paper-none' elevation={0}>O</Paper>
            </Grid>
            <Grid item className='papers-basic'>
                <Paper className='paper-none-dash'elevation={0}>-</Paper>
                <Paper className='paper'><p className="jp">あ</p><p className='silaba'>a</p><ButtonAudioA /></Paper>
                <Paper className='paper'>い<p className='silaba'>i</p></Paper>
                <Paper className='paper'>う<p className='silaba'>u</p></Paper>
                <Paper className='paper'>え<p className='silaba'>e</p></Paper>
                <Paper className='paper'>お<p className='silaba'>o</p></Paper>
            </Grid>
            <Grid item className='papers-basic'>
                <Paper className='paper-none' elevation={0}>K</Paper>
                <Paper className='paper'>か<p className='silaba'>ka</p></Paper>
                <Paper className='paper'>き<p className='silaba'>ki</p></Paper>
                <Paper className='paper'>く<p className='silaba'>ku</p></Paper>
                <Paper className='paper'>け<p className='silaba'>ke</p></Paper>
                <Paper className='paper'>こ<p className='silaba'>ko</p></Paper>
            </Grid>
            <Grid item className='papers-basic'>
                <Paper className='paper-none' elevation={0}>S</Paper>
                <Paper className='paper'>さ<p className='silaba'>sa</p></Paper>
                <Paper className='paper'>し<p className='silaba'>shi</p></Paper>
                <Paper className='paper'>す<p className='silaba'>su</p></Paper>
                <Paper className='paper'>せ<p className='silaba'>se</p></Paper>
                <Paper className='paper'>そ<p className='silaba'>so</p></Paper>
            </Grid>
            <Grid item className='papers-basic'>
                <Paper className='paper-none' elevation={0}>T</Paper>
                <Paper className='paper'>た<p className='silaba'>ta</p></Paper>
                <Paper className='paper'>ち<p className='silaba'>chi</p></Paper>
                <Paper className='paper'>つ<p className='silaba'>tsu</p></Paper>
                <Paper className='paper'>て<p className='silaba'>te</p></Paper>
                <Paper className='paper'>と<p className='silaba'>to</p></Paper>
                </Grid>
            <Grid item className='papers-basic'>
                <Paper className='paper-none' elevation={0}>N</Paper>
                <Paper className='paper'>な<p className='silaba'>na</p></Paper>
                <Paper className='paper'>に<p className='silaba'>ni</p></Paper>
                <Paper className='paper'>ぬ<p className='silaba'>nu</p></Paper>
                <Paper className='paper'>ね<p className='silaba'>ne</p></Paper>
                <Paper className='paper'>の<p className='silaba'>no</p></Paper>
            </Grid>
            <Grid item className='papers-basic'>
                <Paper className='paper-none' elevation={0}>H</Paper>
                <Paper className='paper'>は<p className='silaba'>ha</p></Paper>
                <Paper className='paper'>ひ<p className='silaba'>hi</p></Paper>
                <Paper className='paper'>ふ<p className='silaba'>hu</p></Paper>
                <Paper className='paper'>へ<p className='silaba'>he</p></Paper>
                <Paper className='paper'>ほ<p className='silaba'>ho</p></Paper>
            </Grid>
            <Grid item className='papers-basic'>
                <Paper className='paper-none' elevation={0}>M</Paper>
                <Paper className='paper'>ま<p className='silaba'>ma</p></Paper>
                <Paper className='paper'>み<p className='silaba'>mi</p></Paper>
                <Paper className='paper'>む<p className='silaba'>mu</p></Paper>
                <Paper className='paper'>め<p className='silaba'>me</p></Paper>
                <Paper className='paper'>も<p className='silaba'>mo</p></Paper>
            </Grid>
            <Grid item className='papers-basic'>
                <Paper className='paper-none' elevation={0}>Y</Paper>
                <Paper className='paper'>や<p className='silaba'>ya</p></Paper>
                <Paper className='paper-none-dash' elevation={0}>-</Paper>
                <Paper className='paper'>ゆ<p className='silaba'>yu</p></Paper>
                <Paper className='paper-none-dash' elevation={0}>-</Paper>
                <Paper className='paper'>よ<p className='silaba'>yo</p></Paper>
            </Grid>
            <Grid item className='papers-basic'>
                <Paper className='paper-none' elevation={0}>R</Paper>
                <Paper className='paper'>ら<p className='silaba'>ra</p></Paper>
                <Paper className='paper'>り<p className='silaba'>ri</p></Paper>
                <Paper className='paper'>る<p className='silaba'>ru</p></Paper>
                <Paper className='paper'>れ<p className='silaba'>re</p></Paper>
                <Paper className='paper'>ろ<p className='silaba'>ro</p></Paper>
            </Grid>
            <Grid item className='papers-basic'>
                <Paper className='paper-none' elevation={0}>W</Paper>
                <Paper className='paper'>わ<p className='silaba'>wa</p></Paper>
                <Paper className='paper-none-dash' elevation={0}>-</Paper>
                <Paper className='paper'>ん<p className='silaba'>n</p></Paper>
                <Paper className='paper-none-dash' elevation={0}>-</Paper>
                <Paper className='paper'>を<p className='silaba'>wo</p></Paper>
            </Grid>
        </Grid>
        <Grid container className='bottom-button'>
            <Grid item xs={3} className='basic-button'>
                <Link to='/essential-table' className="link">
                    <Button className='essential-button'>Essential</Button>
                </Link>
                <Link to='/additional-table' className="link">
                    <Button className='additional-button'>Additional</Button>
                </Link>
            </Grid>
        </Grid>
        </Grid>
    )
}

export default Basic;