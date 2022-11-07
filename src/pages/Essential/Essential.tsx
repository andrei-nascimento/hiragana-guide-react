import React from "react";
import './Essential.css';
import { Button, Grid, Paper, Typography } from '@material-ui/core';
import { Link } from "react-router-dom";

function Essential() {
    return(
        <Grid container className='container-essential'>
            <Grid item xs={12}>
                <Typography className='title-essential'>
                    Hiragana Table - Essential
                </Typography>
            </Grid>
        <Grid container xs={8} className='container-essential-paper'>
            <Grid item className='papers-essential'>
                <Paper className='paper-none-dash' elevation={0}>-</Paper>
                <Paper className='paper-none' elevation={0}>A</Paper>
                <Paper className='paper-none' elevation={0}>I</Paper>
                <Paper className='paper-none' elevation={0}>U</Paper>
                <Paper className='paper-none' elevation={0}>E</Paper>
                <Paper className='paper-none' elevation={0}>O</Paper>
            </Grid>
            <Grid item className='papers-essential'>
                <Paper className='paper-none' elevation={0}>G</Paper>
                <Paper className='paper'>が<p className='silaba'>ga</p></Paper>
                <Paper className='paper'>ぎ<p className='silaba'>gui</p></Paper>
                <Paper className='paper'>ぐ<p className='silaba'>gu</p></Paper>
                <Paper className='paper'>げ<p className='silaba'>gue</p></Paper>
                <Paper className='paper'>ご<p className='silaba'>go</p></Paper>
            </Grid>
            <Grid item className='papers-essential'>
                <Paper className='paper-none' elevation={0}>Z</Paper>
                <Paper className='paper'>ざ<p className='silaba'>za</p></Paper>
                <Paper className='paper'>じ<p className='silaba'>ji</p></Paper>
                <Paper className='paper'>ず<p className='silaba'>zu</p></Paper>
                <Paper className='paper'>ぜ<p className='silaba'>ze</p></Paper>
                <Paper className='paper'>ぞ<p className='silaba'>zo</p></Paper>
            </Grid>
            <Grid item className='papers-essential'>
                <Paper className='paper-none' elevation={0}>D</Paper>
                <Paper className='paper'>だ<p className='silaba'>da</p></Paper>
                <Paper className='paper'>ぢ<p className='silaba'>chi</p></Paper>
                <Paper className='paper'>づ<p className='silaba'>dzu</p></Paper>
                <Paper className='paper'>で<p className='silaba'>de</p></Paper>
                <Paper className='paper'>ど<p className='silaba'>do</p></Paper>
            </Grid>
            <Grid item className='papers-essential'>
                <Paper className='paper-none' elevation={0}>B</Paper>
                <Paper className='paper'>ば<p className='silaba'>ba</p></Paper>
                <Paper className='paper'>び<p className='silaba'>bi</p></Paper>
                <Paper className='paper'>ぶ<p className='silaba'>bu</p></Paper>
                <Paper className='paper'>べ<p className='silaba'>be</p></Paper>
                <Paper className='paper'>ぼ<p className='silaba'>bo</p></Paper>
                </Grid>
            <Grid item className='papers-essential'>
                <Paper className='paper-none' elevation={0}>P</Paper>
                <Paper className='paper'>ぱ<p className='silaba'>pa</p></Paper>
                <Paper className='paper'>ぴ<p className='silaba'>pi</p></Paper>
                <Paper className='paper'>ぷ<p className='silaba'>pu</p></Paper>
                <Paper className='paper'>ぺ<p className='silaba'>pe</p></Paper>
                <Paper className='paper'>ぽ<p className='silaba'>po</p></Paper>
            </Grid>
        </Grid>
        <Grid container className='bottom-button'>
            <Grid item xs={3} className='basic-button'>
                <Link to='/basic-table' className="link">
                    <Button className='essential-button'>Basic</Button>
                </Link>
                <Link to='/additional-table'  className="link">
                    <Button className='additional-button'>Additional</Button>
                </Link>
            </Grid>
        </Grid>
        </Grid>
    )
}

export default Essential;